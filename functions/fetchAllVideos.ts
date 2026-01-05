// netlify/functions/fetchAllVideos.ts
import { fetchChannelVideos } from "@/utils/youtube/YoutubeAPI";
import { createClient } from "@supabase/supabase-js";
import { Context } from "@netlify/functions";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_SECRET_KEY;

// SERVER-ONLY Supabase client
const supabase = createClient(supabaseUrl!,supabaseKey!);

export const handler = async (req: Request, context: Context) => {

    const { data } = await supabase
        .from("sync_table")
        .select("sync_status")
        .eq("id", 1)
        .single();

    if ( data?.sync_status == false ) {

        // Update sync status
        if ( data?.sync_status == false) {
            await supabase.from("sync_table").update({sync_status: true, sync_time: new Date()}).eq("table_name", "channel_yt_videos");
        } else {
            const { data } = await supabase.from("sync_table").select("sync_time").eq("id", 1).single();
            const curTime = new Date();
            const lastSyncTime = new Date(data?.sync_time);
            const timeDiff = curTime.getTime() - lastSyncTime.getTime();
            const minutesDiff = Math.floor(timeDiff / (1000 * 60));
            if (minutesDiff >= 60) { // 60 minutes have passed, then update sync status to allow new sync
                await supabase.from("sync_table").update({sync_status: true, sync_time: new Date()}).eq("table_name", "channel_yt_videos");
        }        

        // Clear all existing videos from previous hour
        await supabase.from("channel_yt_videos").delete().neq("id",0);

        const youtubeHandles: string[] = ["averymcivory3875", "1O1OOO", "BeeBuYog", "claridori", "jadeqtt1", 
                                    "JZGRIT11", "KenPlayzTM", "KingFB", "klrns_", "KristianPH", 
                                    "kyahrye1651", "LadysueAlberto07", "MakiKun", "McHeroYT", "mythdariffer", 
                                    "Obriii", "robraks", "SlyTheMiner", "StarserePlays", "SthreedYT", "tenderjoncy", 
                                    "WetzkieGamer", "WITCHCARNELIAN", "zerifae", "ZircMcGamer"];

        for ( const name of youtubeHandles ) {
            }

            // Call YouTube API to fetch videos of all the channels
            const videos = await fetchChannelVideos(name);
            
            if (!videos || videos.length === 0) {
                return {
                    statusCode: 200,
                    body: JSON.stringify({ message: "No videos found" }),
                };
            }

            // Stores to Supabase
            const inserts = videos.map((item: any) => ({
                channelId: item.snippet.videoOwnerChannelId,
                title: item.snippet.title,
                videoId: item.snippet.resourceId.videoId,
                publishedAt: item.snippet.publishedAt,
                thumbnailUrl: item.snippet.thumbnails.maxres?.url ?? item.snippet.thumbnails.high.url,
            }));

            const { error } = await supabase.from("channel_yt_videos").insert(inserts);

            if (error) throw error;

            console.log("Done");
        }

        return {
            statusCode: 200,
        };
    } else {
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Sync already in progress or recently completed." }),
        }
    }
};