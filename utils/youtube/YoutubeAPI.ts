
// import { createClient } from '@/utils/supabase/server'
// import { cookies } from 'next/headers'

// ( 2 Quotas )
export async function fetchChannelVideos(channelHandle: string): Promise<any> {
    
    // First, get the channel uploads playlist ID ( 1 Quota )
    const channelDetails = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=%40${channelHandle}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`)
    if (!channelDetails.ok) {
        throw new Error('Network response was not ok');
    }

    // Parse the JSON response
    const channelDetailsJson = await channelDetails.json();

    // Extract the uploads playlist ID
    const uploadsPlaylistId = channelDetailsJson.items[0].contentDetails.relatedPlaylists.uploads;
    
    // Fetch the videos from the uploads playlist ( 1 Quota )
    const channelVideos = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${uploadsPlaylistId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`);
    if (!channelVideos.ok) {
        throw new Error('Network response was not ok');
    }
    const channelVideosJson = await channelVideos.json();

    // channelVideosJson.items[0].snippet.videoOwnerChannelId
    // channelVideosJson.items[0].snippet.title
    // channelVideosJson.items[0].snippet.thumbnails.maxres.url

    /*
    const cookieStore = await cookies()
    const supabase = createClient(cookieStore)

    let vidLength = channelVideosJson.items.length;
    for (let i = 0; i < vidLength; i++) {
        const {data, error} = await supabase
        .from('channel_yt_videos')
        .insert([
            {
                channelId: channelVideosJson.items[0].snippet.videoOwnerChannelId,
                title: channelVideosJson.items[0].snippet.title,
                thumbnailUrl: channelVideosJson.items[0].snippet.thumbnails.maxres.url,
            }
        ])
        .select()
    }
    */

    return channelVideosJson.items;
}