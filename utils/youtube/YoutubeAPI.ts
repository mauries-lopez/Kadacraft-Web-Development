"use server"

import { channel } from "diagnostics_channel";

// ( 2 Quotas )
export async function fetchChannelVideos(channelHandle: string): Promise<any> {
    // First, get the channel uploads playlist ID ( 1 Quota )
    const channelDetails = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&forHandle=%40${channelHandle}&key=${process.env.YOUTUBE_API_KEY}`)
    if (!channelDetails.ok) {
        throw new Error('Channel Details Cannot be fetched!');
    }

    // Parse the JSON response
    const channelDetailsJson = await channelDetails.json();

    // Extract the uploads playlist ID
    const uploadsPlaylistId = channelDetailsJson.items[0].contentDetails.relatedPlaylists.uploads;
    
    // Fetch the videos from the uploads playlist ( 1 Quota )
    const channelVideos = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=${uploadsPlaylistId}&key=${process.env.YOUTUBE_API_KEY}`);
    if (!channelVideos.ok) {
        throw new Error('Channel Videos Cannot be fetched!');
    }
    const channelVideosJson = await channelVideos.json();
    return channelVideosJson.items;
}

export async function fetchMemberVideos(channelHandle: string): Promise<any> {
    // First, get the channel uploads playlist ID ( 1 Quota )
    const channelDetails = await fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2C%20contentDetails&forHandle=%40${channelHandle}&key=${process.env.YOUTUBE_API_KEY}`)
    if (!channelDetails.ok) {
        throw new Error('Channel Details Cannot be fetched!');
    }

    // Parse the JSON response
    const channelDetailsJson = await channelDetails.json();

     // Extract the YouTube Profile Picture through Thumbnails
    const channelIconUrl = channelDetailsJson.items[0].snippet.thumbnails.high.url;
    
    // Extract the uploads playlist ID
    const uploadsPlaylistId = channelDetailsJson.items[0].contentDetails.relatedPlaylists.uploads;
    
    // Fetch the videos from the uploads playlist ( 1 Quota )
    const channelVideos = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId=${uploadsPlaylistId}&key=${process.env.YOUTUBE_API_KEY}`);
    if (!channelVideos.ok) {
        throw new Error('Channel Videos Cannot be fetched!');
    }
    const channelVideosJson = await channelVideos.json();
    
    // Return both videos and profile picture URL
    return { videos: channelVideosJson.items, channelIconUrl, channelHandle };
}