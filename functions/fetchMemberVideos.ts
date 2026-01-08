// netlify/functions/fetchMemberVideos.ts
import { fetchMemberVideos } from "@/utils/youtube/YoutubeAPI";
import { createClient } from "@supabase/supabase-js";
import { Context } from "@netlify/functions";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

// SERVER-ONLY Supabase client
const supabase = createClient(supabaseUrl!, supabaseKey!);

const runSync = async () => {
    // Update sync status
    await supabase.from("sync_table").update({ sync_status: true, sync_time: new Date() }).eq("table_name", "member_yt_videos");

    // Clear all existing videos from previous hour
    await supabase.from("member_yt_videos").delete().neq("id", 0);

    const youtubeHandles: string[] = ["AceDhaniel", "BeeBuYog", "curiouscattttt", "GleiiZie", "its_jhiggssee", "KeetMichael",
        "KenPlayzTM", "KingFB", "Klaud9ne", "McHeroYT", "mythdariffer", "PashneaGaming",
        "Obriii", "robraks", "Sashwie", "sirzedric", "SlyTheMiner", "sorokiru", "SthreedYT", "tenderjoncy",
        "WITCHCARNELIAN", "xzenzrmc", "ZircMcGamer"];

    // Process handles with limited concurrency and batch inserts to avoid long sequential waits
    const concurrency = 5;

    const allInserts: any[] = [];

    for (let i = 0; i < youtubeHandles.length; i += concurrency) {
        const chunk = youtubeHandles.slice(i, i + concurrency);
        const promises = chunk.map(async (name) => {
            try {
                const data = await fetchMemberVideos(name);
                const videos = data.videos;
                const channelIconUrl = data.channelIconUrl;
                const channelHandle = data.channelHandle;

                if (!videos || videos.length === 0) {
                    console.log(`No videos found for channel: ${name}`);
                    return [];
                }

                // Filter to only include videos with "kadacraft" in the title (case-insensitive)
                const filtered = videos.filter((item: any) => {
                    const title = (item?.snippet?.title || "").toString().toLowerCase();
                    return title.includes("kadacraft");
                });

                if (filtered.length === 0) {
                    console.log(`No Kadacraft videos for channel: ${name}`);
                    return [];
                }

                return filtered.map((item: any) => ({
                    channelIconUrl: channelIconUrl,
                    channelHandle: channelHandle,
                    channelId: item.snippet.videoOwnerChannelId,
                    title: item.snippet.title,
                    videoId: item.snippet.resourceId.videoId,
                    publishedAt: item.snippet.publishedAt,
                    thumbnailUrl: item.snippet.thumbnails.maxres?.url ?? item.snippet.thumbnails.high.url,
                }));

            } catch (err) {
                console.error(`Failed fetching videos for ${name}:`, err);
                return [];
            }
        });

        const results = await Promise.all(promises);
        for (const r of results) {
            if (r && r.length) allInserts.push(...r);
        }
    }

    if (allInserts.length > 0) {
        const { error } = await supabase.from("member_yt_videos").insert(allInserts);
        if (error) {
            console.error("Error inserting batched videos:", error);
        }
    } else {
        console.log("No videos matched filters across all channels.");
    }

    return {
        statusCode: 200,
        body: JSON.stringify({ message: "Sync completed successfully" }),
    };
};

export const handler = async (req: Request, context: Context) => {

    const { data } = await supabase
        .from("sync_table")
        .select("sync_status")
        .eq("id", 2)
        .single();

    if (data?.sync_status == false) {
        return await runSync();
    } else {

        // Reset sync status if 60 minutes have passed
        const { data } = await supabase.from("sync_table").select("sync_time").eq("id", 2).single();

        if (!data || !data.sync_time) {
            // Handle missing data case safely
            return {
                statusCode: 500,
                body: JSON.stringify({ message: "Sync table configuration error." }),
            };
        }

        const curTime = new Date();
        const lastSyncTime = new Date(data.sync_time);
        const timeDiff = curTime.getTime() - lastSyncTime.getTime();
        const minutesDiff = Math.floor(timeDiff / (1000 * 60));
        console.log("Minutes since last sync:", minutesDiff);
        if (minutesDiff >= 60) { // 60 minutes have passed, then update sync status to allow new sync
            await supabase.from("sync_table").update({ sync_status: false, sync_time: new Date() }).eq("table_name", "member_yt_videos");

            // Immediately start sync now that status is reset
            return await runSync();
        }

        // Return a response if sync is still in cooldown
        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Sync in progress or cooldown active. Try again in ${60 - minutesDiff} minutes.` }),
        };
    }
}