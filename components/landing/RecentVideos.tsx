"use client"

import Background from "@/components/Background";
import { fetchChannelVideos } from "@/utils/youtube/YoutubeAPI";
import { useEffect, useState } from "react";

export default function RecentVideos(){

    const [videos, setVideos] = useState<any>(null);

    useEffect (() => {
        fetchChannelVideos("Atmospheric").then(setVideos)
    }, []);

    console.log("Videos:", videos);

    return (
        <>
            <div className="hidden relative w-full min-h-svh md:p-10 overflow-hidden flex justify-center items-center">
                {/* Background layer */}
                <div className="absolute inset-0">
                    <Background
                        srcLight="/image/kadacraft_background3_light.png"
                        srcDark="/image/kadacraft_background3_dark.png"
                    />
                </div>
            </div>
        </>
    )
}