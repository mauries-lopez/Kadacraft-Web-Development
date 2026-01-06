// netlify/functions/fetchAllVideos.ts
import { fetchChannelVideos } from "@/utils/youtube/YoutubeAPI";
import { createClient } from "@supabase/supabase-js";
import { Context } from "@netlify/functions";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

// SERVER-ONLY Supabase client
const supabase = createClient(supabaseUrl!, supabaseKey!);

export const handler = async (req: Request, context: Context) => {

    const { data } = await supabase
        .from("sync_table")
        .select("sync_status")
        .eq("id", 1)
        .single();

    if (data?.sync_status == false) {

        // Update sync status
        await supabase.from("sync_table").update({ sync_status: true, sync_time: new Date() }).eq("table_name", "channel_yt_videos");

        // Clear all existing videos from previous hour
        await supabase.from("channel_yt_videos").delete().neq("id", 0);

        const youtubeHandles: string[] = ["averymcivory3875", "1O1OOO", "BeeBuYog", "claridori", "jadeqtt1",
            "JZGRIT11", "KenPlayzTM", "KingFB", "klrns_", "KristianPH",
            "kyahrye1651", "LadysueAlberto07", "MakiKun", "McHeroYT", "mythdariffer",
            "Obriii", "robraks", "SlyTheMiner", "StarserePlays", "SthreedYT", "tenderjoncy",
            "WetzkieGamer", "WITCHCARNELIAN", "zerifae", "ZircMcGamer"];

        for (const name of youtubeHandles) {

            // Call YouTube API to fetch videos of all the channels
            const videos = await fetchChannelVideos(name);

            if (!videos || videos.length === 0) {
                console.log(`No videos found for channel: ${name}`);
                continue;
            }

            // Filter videos to only include those with "KADACRAFT" in the title (case-insensitive) & Uploaded this month or last month
            const now = new Date();
            const currentMonth = now.getMonth();
            const currentYear = now.getFullYear();

            // Calculate last month (handle year boundary)
            const lastMonth = currentMonth === 0 ? 11 : currentMonth - 1;
            const lastMonthYear = currentMonth === 0 ? currentYear - 1 : currentYear;

            const filteredVideos = videos.filter((item: any) => {
                if (!item.snippet.title.toLowerCase().includes("kadacraft")) {
                    return false;
                }

                const publishedDate = new Date(item.snippet.publishedAt);
                const publishedMonth = publishedDate.getMonth();
                const publishedYear = publishedDate.getFullYear();

                // Check if published in current month/year OR last month/year
                return (
                    (publishedMonth === currentMonth && publishedYear === currentYear) ||
                    (publishedMonth === lastMonth && publishedYear === lastMonthYear)
                );
            });

            if (filteredVideos.length === 0) {
                continue;
            }

            // Stores to Supabase
            const inserts = filteredVideos.map((item: any) => ({
                channelId: item.snippet.videoOwnerChannelId,
                title: item.snippet.title,
                videoId: item.snippet.resourceId.videoId,
                publishedAt: item.snippet.publishedAt,
                thumbnailUrl: item.snippet.thumbnails.maxres?.url ?? item.snippet.thumbnails.high.url,
            }));

            const { error } = await supabase.from("channel_yt_videos").insert(inserts);

            if (error) {
                console.error(`Error inserting videos for ${name}:`, error);
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Sync completed successfully" }),
        };
    } else {

        // Reset sync status if 60 minutes have passed
        const { data } = await supabase.from("sync_table").select("sync_time").eq("id", 1).single();

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
        if (minutesDiff >= 60) { // 60 minutes have passed, then update sync status to allow new sync
            await supabase.from("sync_table").update({ sync_status: true, sync_time: new Date() }).eq("table_name", "channel_yt_videos");

            return {
                statusCode: 200,
                body: JSON.stringify({ message: "Sync cooldown expired. Status reset. Please try again." }),
            }
        }

        // Return a response if sync is still in cooldown
        return {
            statusCode: 200,
            body: JSON.stringify({ message: `Sync in progress or cooldown active. Try again in ${60 - minutesDiff} minutes.` }),
        };
    }
}