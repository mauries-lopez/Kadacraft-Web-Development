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
            <div className="relative w-full min-h-svh md:p-10 overflow-hidden flex flex-col justify-center items-center">
                {/* Background layer */}
                <div className="absolute inset-0">
                    <Background
                        srcLight="/image/kadacraft_background0_light.png"
                        srcDark="/image/kadacraft_background0_dark.png"
                    />
                </div>

                <div className="relative text-center bg-white dark:bg-neutral-700 rounded-2xl mt-25 md:mt-15 mx-9 py-1 px-4 shadow-2xl">
                    <p className="text-xs md:text-sm italic text-red-500 dark:text-white transition duration-300">
                        Note: this is an active list — only members who ACTIVELY upload KADACRAFT videos among their 50 most recent uploads are displayed here.
                    </p>
                </div>

                {/* Content layer */}
                <div
                    className="
                        relative z-10
                        w-full
                        flex flex-row
                        gap-10
                        overflow-x-auto
                        snap-x snap-mandatory
                        px-20
                        py-5
                        
                        md:grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        md:overflow-hidden
                    "
                >
                    {loading ? (
                        <div className="w-full col-span-full text-center p-8">
                            <div className="inline-block animate-pulse md:mt-4 mb-4 p-4 shadow dark:bg-gray-200 dark:text-gray-900 bg-stone-800 text-gray-100 hover:scale-105 active:scale-95 justify-center items-center rounded-full font-bold">Loading members…</div>
                        </div>
                    ) : members.length === 0 ? (
                        <div className="w-full col-span-full text-center p-8">
                            <div className="text-gray-600 dark:text-gray-300">No active members yet.</div>
                        </div>
                    ) : (
                        members
                            .filter(member => member.name && member.channelIconUrl)
                            .map(({ name, channelIconUrl }) => (
                                <Member key={name} name={name!} channelIconUrl={channelIconUrl!} />
                            ))
                    )}
                </div>
            </div>
        </>
    )
}