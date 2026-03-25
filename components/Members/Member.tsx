import Link from "next/link"
import Image from "next/image"

interface MemberProps {
    name: string,
    channelIconUrl: string,
    index?: number
}

export default function Member({ name, channelIconUrl, index = 0 }: MemberProps) {
    // Stagger delay capped so it doesn't get too slow for large lists
    const delay = Math.min(index * 80, 600);

    return (
        <Link href={`/members/${encodeURIComponent(name)}`}>
            <div
                className="
                    group relative flex flex-col items-center
                    rounded-2xl overflow-hidden cursor-pointer
                    bg-white/70 dark:bg-white/5
                    border border-white/60 dark:border-white/10
                    backdrop-blur-md
                    shadow-lg hover:shadow-2xl hover:shadow-yellow-400/20 dark:hover:shadow-yellow-500/20
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:scale-[1.02]
                    slide-in-top
                "
                style={{ animationDelay: `${delay}ms` }}
            >
                {/* Avatar */}
                <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                        src={channelIconUrl}
                        alt={name}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Name bar */}
                <div className="w-full px-4 py-3 flex items-center justify-between
                    bg-yellow-400/90 dark:bg-yellow-500/20
                    border-t border-yellow-300/50 dark:border-yellow-500/20
                    backdrop-blur-sm transition-colors duration-300
                    group-hover:bg-yellow-500 dark:group-hover:bg-yellow-500/30">
                    <h2 className="text-sm md:text-base font-bold text-gray-900 dark:text-white font-['Minecraft'] truncate">
                        {name}
                    </h2>
                    <svg
                        className="shrink-0 w-4 h-4 text-gray-700 dark:text-yellow-300 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                </div>

                {/* Glow ring on hover */}
                <div className="
                    absolute inset-0 rounded-2xl pointer-events-none
                    ring-0 group-hover:ring-2 group-hover:ring-yellow-400/60 dark:group-hover:ring-yellow-500/50
                    transition-all duration-300
                " />
            </div>
        </Link>
    )
}