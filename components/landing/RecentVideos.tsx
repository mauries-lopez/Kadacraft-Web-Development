"use client"

import Background from "@/components/Background";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function RecentVideos(){

    const [videos, setVideos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const supabase = createClient();

        const fetchVideos = async () => {

            const { data, error } = await supabase
                .from("channel_yt_videos")
                .select("*")
                .order("publishedAt", { ascending: false});

            console.log(data);

            if (error) {
                console.error("Error fetching videos:", error);
            } else {
                setVideos(data || []);
            }
            setLoading(false);
        };

        fetchVideos();
    }, []);


    return (
        <>
            <div className="relative w-full min-h-svh md:p-10 overflow-hidden flex justify-center items-center">
                {/* Background layer */}
                <div className="absolute inset-0">
                    <Background
                        srcLight="/image/kadacraft_background3_light.png"
                        srcDark="/image/kadacraft_background3_dark.png"
                    />
                </div>
                
                {/* Content layer */}
                <div className="relative z-10 w-full max-w-5xl">
                    {loading ? (
                        <p>Loading videos...</p>
                    ) : videos.length === 0 ? (
                        <p>No videos found</p>
                    ) : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {videos.map((video) => (
                            <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank">
                                <div key={video.id} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
                                    <img src={video.thumbnailUrl} alt={video.title} className="w-full rounded" />
                                    <h3 className="mt-2 text-lg font-semibold">{video.title}</h3>
                                </div>
                            </a>

                        ))}
                    </div>
                    )}
                </div>
            </div>
        </>
    )
}