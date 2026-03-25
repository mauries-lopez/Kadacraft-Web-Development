import { cookies } from "next/headers";
import Link from "next/link";
import Image from "next/image";
import { createClient } from "@/utils/supabase/server";


type PageProps = {
    params: { member_name: string };
};

export default async function MemberPage(props: PageProps) {
    const supabase = createClient(cookies());

    const { params } = props;
    const resolvedParams = await params;

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
        <div className="relative w-full min-h-svh overflow-hidden bg-neutral-100 dark:bg-neutral-900 transition duration-300">

            {/* ── Blurred avatar hero banner ── */}
            <div className="absolute inset-x-0 top-0 h-72 md:h-80 z-0 overflow-hidden">
                {/* Blurred avatar */}
                <Image
                    src={profileUrl}
                    alt=""
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover object-top scale-110 blur-2xl opacity-50 dark:opacity-30"
                    aria-hidden
                />
                {/* Extra dark-mode darkening layer */}
                <div className="absolute inset-0 hidden dark:block bg-black/50" />
                {/* Gradient fade to page bg */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-100/40 to-neutral-100 dark:via-neutral-900/60 dark:to-neutral-900" />
            </div>

            {/* ── Page content ── */}
            <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row gap-6 p-6 pt-28">

                {/* Left: Profile sidebar */}
                <aside className="md:w-72 shrink-0 flex flex-col gap-4">

                    {/* Back button */}
                    <Link href="/members">
                        <div className="flex items-center gap-2 text-sm font-semibold
                            text-gray-700 dark:text-gray-200
                            px-4 py-2.5 rounded-full
                            bg-white/80 dark:bg-white/5
                            border border-white/60 dark:border-white/10
                            backdrop-blur-sm shadow
                            hover:-translate-x-1
                            hover:text-yellow-600 dark:hover:text-yellow-400
                            transition-all duration-200">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                            </svg>
                            Back to Members
                        </div>
                    </Link>

                    {/* Profile card */}
                    <div className="rounded-2xl overflow-hidden
                        bg-white/70 dark:bg-white/5
                        border border-white/60 dark:border-white/10
                        backdrop-blur-md shadow-2xl
                        flex flex-col items-center
                        slide-in-top">

                        {/* Avatar */}
                        <div className="relative w-full aspect-square">
                            <Image
                                src={profileUrl}
                                alt={memberName}
                                fill
                                priority
                                sizes="(max-width: 768px) 100vw, 288px"
                                className="object-cover transition-transform duration-700 hover:scale-105"
                            />
                            {/* Bottom fade */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                            {/* Name overlay on avatar bottom */}
                            <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
                                <h1 className="text-xl font-bold text-white font-['Minecraft'] drop-shadow-lg truncate">
                                    {memberName}
                                </h1>
                                <p className="text-xs text-yellow-300 font-medium mt-0.5">
                                    {videos.length} video{videos.length !== 1 ? "s" : ""}
                                </p>
                            </div>
                        </div>

                        {/* Stats bar */}
                        <div className="w-full px-5 py-3
                            bg-yellow-400/90 dark:bg-yellow-500/20
                            border-t border-yellow-300/50 dark:border-yellow-500/20
                            flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                                <svg className="w-4 h-4 text-gray-800 dark:text-yellow-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.069A1 1 0 0121 8.847v6.306a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                                </svg>
                                <span className="text-sm font-semibold text-gray-800 dark:text-white">
                                    {videos.length} KadaCraft video{videos.length !== 1 ? "s" : ""}
                                </span>
                            </div>
                            <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-yellow-500/30 dark:bg-yellow-400/10">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-xs text-gray-800 dark:text-yellow-300 font-medium">Active</span>
                            </div>
                        </div>
                    </div>

                    {/* Decorative card: "Part of KadaCraft" */}
                    <div className="rounded-2xl px-5 py-4
                        bg-white/60 dark:bg-white/5
                        border border-white/40 dark:border-white/10
                        backdrop-blur-md shadow
                        flex flex-col gap-1">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                            <span className="text-xs font-semibold tracking-widest uppercase text-yellow-600 dark:text-yellow-300">
                                KadaCraft Member
                            </span>
                        </div>
                        <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                            This creator actively uploads KadaCraft content among their most recent videos.
                        </p>
                    </div>
                </aside>

                {/* Right: Videos grid */}
                <main className="flex-1">
                    {/* Section header */}
                    <div className="flex items-center gap-3 mb-5">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                            bg-yellow-400/20 dark:bg-yellow-500/10
                            border border-yellow-400/40 dark:border-yellow-500/30
                            backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-yellow-400" />
                            <span className="text-xs font-semibold tracking-widest uppercase text-yellow-600 dark:text-yellow-300">
                                Recent Videos
                            </span>
                        </div>
                    </div>

                    {videos.length === 0 ? (
                        <div className="flex flex-col items-center justify-center gap-3 py-20
                            rounded-2xl
                            bg-white/60 dark:bg-white/5
                            border border-white/40 dark:border-white/10
                            backdrop-blur-sm">
                            <svg className="w-10 h-10 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.847v6.306a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                            </svg>
                            <p className="text-gray-500 dark:text-gray-400">No videos found for this member.</p>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                            {videos.map((v: { videoId: string; thumbnailUrl: string; title: string; publishedAt: string }, index: number) => (
                                <a
                                    key={v.videoId}
                                    href={`https://www.youtube.com/watch?v=${v.videoId}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="group flex flex-col rounded-2xl overflow-hidden
                                        bg-white/70 dark:bg-white/5
                                        border border-white/60 dark:border-white/10
                                        backdrop-blur-md shadow-md
                                        hover:shadow-xl hover:shadow-yellow-400/20 dark:hover:shadow-yellow-500/20
                                        hover:-translate-y-1 hover:scale-[1.02]
                                        transition-all duration-300
                                        slide-in-top"
                                    style={{ animationDelay: `${Math.min(index * 50, 400)}ms` }}
                                >
                                    {/* Thumbnail */}
                                    <div className="relative w-full aspect-video overflow-hidden">
                                        <Image
                                            src={v.thumbnailUrl}
                                            alt={v.title}
                                            fill
                                            loading="lazy"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                        {/* Play overlay */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30">
                                            <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center shadow-lg">
                                                <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M8 5v14l11-7z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Info */}
                                    <div className="p-4 flex flex-col gap-1 flex-1">
                                        <h3 className="line-clamp-2 text-sm md:text-base font-bold text-gray-900 dark:text-white leading-snug">
                                            {v.title}
                                        </h3>
                                        <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-auto pt-2 font-medium">
                                            {new Date(v.publishedAt).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" })}
                                        </p>
                                    </div>

                                    {/* Glow ring */}
                                    <div className="absolute inset-0 rounded-2xl pointer-events-none ring-0 group-hover:ring-2 group-hover:ring-yellow-400/50 dark:group-hover:ring-yellow-500/40 transition-all duration-300" />
                                </a>
                            ))}
                        </div>
                    )}
                </main>
            </div>
        </div>
    );
}