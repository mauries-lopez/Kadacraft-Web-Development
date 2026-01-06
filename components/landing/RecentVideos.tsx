"use client"

import Background from "@/components/Background";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function RecentVideos() {

    const [videos, setVideos] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const supabase = createClient();

        const fetchVideos = async () => {

            const { data, error } = await supabase
                .from("channel_yt_videos")
                .select("*")
                .order("publishedAt", { ascending: false });

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
            <div className="relative w-full min-h-svh md:p-20 overflow-hidden flex justify-center items-center">
                {/* Background layer */}
                <div className="absolute inset-0">
                    <Background
                        srcLight="/image/kadacraft_background3_light.png"
                        srcDark="/image/kadacraft_background3_dark.png"
                    />
                </div>

                <div className="w-full flex flex-col justify-center items-center">
                    {/* Header */}
                    <div className="w-full flex justify-center items-center pt-4">
                        <img src="/image/recent_videos.png" alt="Recent Videos" className="w-64 md:w-96 drop-shadow-lg" />
                    </div>

                    {/* Content layer */}
                    <div className="relative w-full md:h-svh md:overflow-x-hidden overflow-auto z-20 flex flex-col items-center mt-10">
                        {loading ? (
                            <div className="flex w-full h-full justify-center items-center">
                                <p className="text-xl font-semibold">Loading videos...</p>
                            </div>
                        ) : videos.length === 0 ? (
                            <div className="flex w-full h-full justify-center items-center">
                                <p className="text-xl font-semibold">Fetching videos... Retry after some time</p>
                            </div>
                        ) : (
                            <div className="
                                w-full
                                flex flex-row
                                gap-6
                                overflow-x-auto
                                snap-x snap-mandatory
                                px-6
                                
                                md:grid
                                md:grid-cols-2
                                lg:grid-cols-3
                                md:overflow-visible
                                md:gap-6
                                md:justify-items-center
                                md:px-0
                            ">
                                {videos.map((video) => (
                                    <a
                                        key={video.id}
                                        href={`https://www.youtube.com/watch?v=${video.videoId}`}
                                        target="_blank"
                                        className="
                                            snap-center
                                            shrink-0 
                                            w-[85vw] 
                                            max-w-[400px] 
                                            md:w-full 
                                            md:max-w-none 
                                            
                                            drop-shadow-xl 
                                            flex flex-col 
                                            hover:scale-102 
                                            transition duration-300 
                                            rounded-lg overflow-hidden 
                                            items-center 
                                            cursor-pointer 
                                            slide-in-top
                                        "
                                    >
                                        <div className="bg-neutral-100 dark:bg-neutral-800 backdrop-blur-sm p-4 rounded-2xl h-full w-full flex flex-col gap-3 transition duration-300 ">
                                            <div className="aspect-video w-full overflow-hidden rounded-lg relative">
                                                <img src={video.thumbnailUrl} alt={video.title} className="w-full h-full object-cover absolute inset-0" />
                                            </div>
                                            <h3 className="mt-2 line-clamp-2 font-[Minecraft] text-lg md:text-xl font-bold text-black dark:text-white transition duration-300 ">{video.title}</h3>
                                        </div>
                                    </a>

                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}