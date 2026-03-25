"use client"

import { useEffect, useState } from "react";
import Background from "../Background";
import Member from "./Member";
import { createClient } from "@/utils/supabase/client";

export default function MembersPage(){

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [members, setMembers] = useState<{ name: string; channelIconUrl?: string }[]>([]);

    useEffect(() => {
        const supabase = createClient();

        const fetchData = async () => {

            const { data, error } = await supabase
                .from("member_yt_videos")
                .select("*");

            const { data: channels, error: channelsError } = await supabase
                .from("member_yt_videos")
                .select("channelHandle, channelIconUrl");

            if (error) {
                console.error("Error fetching data:", error);
            } else {
                setData(data || []);
            }

            if (channelsError) {
                console.error("Error fetching channel handles:", channelsError);
            } else if (channels) {
                const map = new Map<string, string | undefined>();
                for (const c of channels) {
                    if (!c?.channelHandle) continue;
                    if (!map.has(c.channelHandle)) map.set(c.channelHandle, c.channelIconUrl);
                }
                const arr = Array.from(map.entries()).map(([name, channelIconUrl]) => ({ name, channelIconUrl }));
                setMembers(arr);
            }

            setLoading(false);
        };

        const triggerSync = async () => {
            if (process.env.NEXT_PUBLIC_FUNCTION_URL_YT_FETCHER_MEMBERS) {
                try {
                    await fetch(process.env.NEXT_PUBLIC_FUNCTION_URL_YT_FETCHER_MEMBERS);
                } catch (error) {
                    console.error('Failed to trigger data sync:', error);
                }
            }
        };

        fetchData();
        triggerSync();
    }, []);

    return(
        <>
            <div className="relative w-full min-h-svh overflow-hidden flex flex-col items-center">

                {/* Background layer */}
                <div className="absolute inset-0">
                    <Background
                        srcLight="/image/kadacraft_background0_light.png"
                        srcDark="/image/kadacraft_background0_dark.png"
                    />
                </div>

                {/* Hero section */}
                <div className="relative z-10 w-full flex flex-col items-center pt-28 pb-6 px-6 text-center">
                    <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full
                        bg-yellow-400/20 dark:bg-yellow-500/10
                        border border-yellow-400/40 dark:border-yellow-500/30
                        backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-yellow-600 dark:text-yellow-300">
                            Active Members
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight
                        text-gray-900 dark:text-white
                        drop-shadow-lg font-['Minecraft']">
                        The Crew
                    </h1>
                    <p className="mt-3 max-w-lg text-sm md:text-base text-gray-600 dark:text-gray-300">
                        Meet the active members of <span className="font-bold text-yellow-500">KADACRAFT</span> — creators
                        who are currently uploading and building the community.
                    </p>

                    {/* Note banner */}
                    <div className="mt-6 flex items-start gap-3 max-w-2xl w-full
                        rounded-xl px-4 py-3
                        bg-white/60 dark:bg-white/5
                        border border-white/40 dark:border-white/10
                        backdrop-blur-md shadow-lg text-left">
                        <svg className="mt-0.5 shrink-0 w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10A8 8 0 11 2 10a8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                        <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300 italic leading-relaxed">
                            This is an <span className="font-semibold not-italic text-gray-800 dark:text-white">active list</span> — only members who actively upload KADACRAFT videos among their 50 most recent uploads are shown here.
                        </p>
                    </div>
                </div>

                {/* Member count badge */}
                {!loading && members.length > 0 && (
                    <div className="relative z-10 mb-2">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                            {members.filter(m => m.name && m.channelIconUrl).length} active member{members.filter(m => m.name && m.channelIconUrl).length !== 1 ? "s" : ""}
                        </span>
                    </div>
                )}

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
                                Loading members…
                            </p>
                        </div>
                    ) : members.length === 0 ? (
                        <div className="flex flex-col items-center justify-center gap-3 py-20">
                            <div className="w-16 h-16 rounded-full bg-gray-200 dark:bg-white/10 flex items-center justify-center">
                                <svg className="w-8 h-8 text-gray-400 dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 font-medium">No active members yet.</p>
                        </div>
                    ) : (
                        <div className="
                            grid grid-cols-1
                            sm:grid-cols-2
                            lg:grid-cols-3
                            xl:grid-cols-4
                            gap-6
                        ">
                            {members
                                .filter(member => member.name && member.channelIconUrl)
                                .map(({ name, channelIconUrl }, index) => (
                                    <Member
                                        key={name}
                                        name={name!}
                                        channelIconUrl={channelIconUrl!}
                                        index={index}
                                    />
                                ))
                            }
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}