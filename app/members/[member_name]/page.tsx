import { cookies } from "next/headers";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";

type PageProps = {
    params: { member_name: string };
};

export default async function MemberPage(props: PageProps) {
    const supabase = createClient(cookies());

    const { params } = props;
    const resolvedParams = await params; // unwrap the Promise

    const nameFromUrl = resolvedParams.member_name;
    const memberName = decodeURIComponent(nameFromUrl);

    const { data, error } = await supabase
        .from("member_yt_videos")
        .select("channelHandle,channelIconUrl,title,videoId,publishedAt,thumbnailUrl")
        .eq("channelHandle", memberName)
        .order("publishedAt", { ascending: false });

    if (error) console.error("Supabase error fetching member videos:", error);

    const videos = data ?? [];
    const profileUrl = videos[0]?.channelIconUrl ?? "/image/yt-profile-default.png";

    return (
        <div className="w-full min-h-svh p-6 bg-neutral-200 dark:bg-neutral-900 ">
            <div className="mx-auto flex flex-col md:flex-row gap-6 mt-20">
                {/* Left: Profile */}
                <div className="flex-1 flex flex-col-reverse md:flex-col">
                    <div className="p-10 rounded-2xl bg-white dark:bg-neutral-800 backdrop-blur-sm flex flex-col items-center">
                        <div className="w-full h-fullD rounded-full overflow-hidden bg-gray-200">
                            <img src={profileUrl} alt={memberName} className="w-full h-full object-cover" />
                        </div>
                        <h1 className="mt-4 text-2xl font-bold text-black dark:text-white ">{memberName}</h1>
                        <p className="text-sm italic text-black dark:text-white mt-2">{videos.length} videos</p>
                    </div>
                    <a href="/members" className="text-sm text-blue-600">
                        <div className="md:mt-4 mb-4 p-4 shadow transition dark:bg-gray-200 dark:text-gray-900 bg-stone-800 text-gray-100 hover:scale-105 active:scale-95 flex justify-center items-center rounded-full font-bold">
                            Back to members
                        </div>
                    </a>
                </div>

                {/* Right: Videos */}
                <div className="flex-3">
                    {videos.length === 0 ? (
                        <div className="p-6 bg-white/5 rounded">No videos found for this member.</div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {videos.map((v: any) => (
                                <a
                                    key={v.videoId}
                                    href={`https://www.youtube.com/watch?v=${v.videoId}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="bg-white dark:bg-neutral-800 backdrop-blur-sm p-4 rounded-2xl h-full w-full flex flex-col gap-3 transition duration-300 hover:scale-102 "
                                >
                                    <div className="w-full aspect-video bg-gray-800 bg-center bg-cover" style={{ backgroundImage: `url(${v.thumbnailUrl})` }} />
                                    <div className="p-3">
                                        <h3 className="line-clamp-2 text-lg md:text-xl font-bold text-black dark:text-white transition duration-300 ">{v.title}</h3>
                                        <p className="text-xs text-gray-500 italic mt-1">{new Date(v.publishedAt).toLocaleDateString()}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}