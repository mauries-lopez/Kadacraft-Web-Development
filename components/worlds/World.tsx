import Image from "next/image";

interface WorldProps{
    title: string,
    href: string,
    srcImage: string,
    edition: string,
    index?: number,
    setSeasonName: React.Dispatch<React.SetStateAction<string>>
    setIsViewGalleryBool: React.Dispatch<React.SetStateAction<boolean>>
}

export default function World({title, href, srcImage, edition, index = 0, setSeasonName, setIsViewGalleryBool}: WorldProps){

    return(
        <>
            <div
                className="
                    group relative w-full h-full max-w-300 min-w-70
                    rounded-2xl overflow-hidden
                    flex flex-col snap-center
                    bg-white/70 dark:bg-white/5
                    border border-white/60 dark:border-white/10
                    backdrop-blur-md
                    shadow-lg hover:shadow-2xl hover:shadow-yellow-400/20 dark:hover:shadow-yellow-500/20
                    transition-all duration-300
                    hover:-translate-y-1 hover:scale-[1.02]
                    slide-in-top
                "
                style={{ animationDelay: `${Math.min(index * 80, 500)}ms` }}
            >
                {/* Cover image */}
                <div className="relative w-full flex-1 min-h-48 overflow-hidden">
                    <Image
                        src={srcImage}
                        alt={title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                        className="object-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Edition badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5
                        px-3 py-1 rounded-full
                        bg-black/50 backdrop-blur-sm
                        border border-white/20">
                        <Image
                            src={edition === "bedrock" ? "/image/bedrock-edition.png" : "/image/java-edition.png"}
                            alt={edition}
                            width={20}
                            height={20}
                            className="w-4 h-4 rounded-full bg-white/80 p-0.5"
                        />
                        <span className="text-xs text-white font-semibold capitalize">{edition}</span>
                    </div>

                    {/* Dark gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Bottom bar */}
                <div className="w-full px-4 py-3 flex items-center gap-2
                    bg-yellow-400/90 dark:bg-yellow-500/20
                    border-t border-yellow-300/50 dark:border-yellow-500/20
                    transition-colors duration-300
                    group-hover:bg-yellow-500 dark:group-hover:bg-yellow-500/30">

                    <h2 className="flex-1 text-sm md:text-base font-bold text-gray-900 dark:text-white font-['Minecraft'] truncate">
                        {title}
                    </h2>

                    {/* View gallery button */}
                    <button
                        className="p-2 rounded-full
                            bg-black/10 dark:bg-white/10
                            hover:bg-black/20 dark:hover:bg-white/20
                            transition duration-200 cursor-pointer"
                        aria-label="View gallery"
                        onClick={() => {
                            setSeasonName(title)
                            setIsViewGalleryBool(true)
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </button>

                    {/* Download button */}
                    <a
                        href={href}
                        className="p-2 rounded-full
                            bg-black/10 dark:bg-white/10
                            hover:bg-black/20 dark:hover:bg-white/20
                            transition duration-200 cursor-pointer"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Download world"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4" />
                        </svg>
                    </a>
                </div>

                {/* Glow ring */}
                <div className="absolute inset-0 rounded-2xl pointer-events-none ring-0 group-hover:ring-2 group-hover:ring-yellow-400/60 dark:group-hover:ring-yellow-500/50 transition-all duration-300" />
            </div>
        </>
    )
}