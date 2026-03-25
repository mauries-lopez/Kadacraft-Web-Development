"use client"

import Background from "@/components/Background";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import Image from "next/image";

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

        const triggerSync = async () => {
            if (process.env.NEXT_PUBLIC_FUNCTION_URL_YT_FETCHER) {
                try {
                    await fetch(process.env.NEXT_PUBLIC_FUNCTION_URL_YT_FETCHER);
                } catch (error) {
                    console.error('Failed to trigger video sync:', error);
                }
            }
        };

        fetchVideos();
        triggerSync();
    }, []);

    return (
        <>
            <div className="relative w-full min-h-svh overflow-hidden flex flex-col items-center">
                {/* Background layer */}
                <div className="absolute inset-0">
                    <Background
                        srcLight="/image/kadacraft_background3_light.png"
                        srcDark="/image/kadacraft_background3_dark.png"
                    />
                </div>

                {/* Hero header */}
                <div className="relative z-10 w-full flex flex-col items-center pt-28 pb-4 px-6 text-center">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full
                        bg-yellow-400/20 dark:bg-yellow-500/10
                        border border-yellow-400/40 dark:border-yellow-500/30
                        backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-yellow-600 dark:text-yellow-300">
                            Latest Content
                        </span>
                    </div>
                    <Image
                        src="/image/recent_videos.png"
                        alt="Recent Videos"
                        width={1000}
                        height={1000}
                        priority
                        className="w-56 md:w-96 drop-shadow-lg"
                    />
                </div>

                {/* Content layer */}
                <div className="relative z-10 w-full px-6 md:px-12 pb-16 pt-4">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center gap-4 py-20">
                            <div className="flex gap-2">
                                {[0, 1, 2].map(i => (
                                    <span
                                        key={i}
                                        className="w-3 h-3 rounded-full bg-yellow-400 animate-bounce"
                                        style={{ animationDelay: `${i * 0.15}s` }}
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium tracking-wide">
                                Loading videos…
                            </p>
                        </div>
                    ) : videos.length === 0 ? (
                        <div className="flex flex-col items-center justify-center gap-3 py-20">
                            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center">
                                <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.847v6.306a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                                </svg>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 font-medium">Updating… Retry again shortly.</p>
                        </div>
                    ) : (
                        /* Mobile: horizontal scroll | Desktop: grid */
                        <div className="
                            flex flex-row gap-5 overflow-x-auto snap-x snap-mandatory pb-4
                            md:grid md:grid-cols-2 lg:grid-cols-3
                            md:overflow-visible md:snap-none md:pb-0 md:gap-6
                        ">
                            {videos.map((video, index) => (
                                <a
                                    key={video.id}
                                    href={`https://www.youtube.com/watch?v=${video.videoId}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                        group snap-center shrink-0
                                        w-[85vw] max-w-[400px]
                                        md:w-full md:max-w-none
                                        flex flex-col
                                        rounded-2xl overflow-hidden
                                        bg-white/70 dark:bg-white/5
                                        border border-white/60 dark:border-white/10
                                        backdrop-blur-md
                                        shadow-lg hover:shadow-2xl hover:shadow-yellow-400/20 dark:hover:shadow-yellow-500/20
                                        transition-all duration-300
                                        hover:-translate-y-1 hover:scale-[1.02]
                                        slide-in-top
                                    "
                                    style={{ animationDelay: `${Math.min(index * 60, 400)}ms` }}
                                >
                                    {/* Thumbnail */}
                                    <div className="aspect-video w-full overflow-hidden relative">
                                        <Image
                                            src={video.thumbnailUrl}
                                            alt={video.title}
                                            fill
                                            loading="lazy"
                                            sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Play overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                                            <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                                                <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-4 flex flex-col gap-1">
                                        <h3 className="line-clamp-2 font-['Minecraft'] text-sm md:text-base font-bold text-gray-900 dark:text-white leading-snug">
                                            {video.title}
                                        </h3>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}