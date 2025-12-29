
interface WorldProps{
    title: string,
    href: string,
    srcImage: string,
    edition: string
}

export default function World({title, href, srcImage, edition}: WorldProps){
    return(
        <>
            <div className="w-full h-full max-w-300 min-w-70 drop-shadow-xl flex flex-col hover:scale-105 transition duration-300 snap-center">
                <img src={srcImage} className="w-full h-full object-cover bg-center rounded-t-2xl"></img>
                <div className="w-full  bg-yellow-500 dark:bg-neutral-800 text-center py-2 px-5 transition duration-300 flex flex-row items-center gap-2 rounded-b-2xl">
                    <h1 className="w-full flex text-md md:text-xl font-bold text-black dark:text-white font-['Minecraft'] text-start gap-2">
                        {title}
                        { edition === "bedrock" ? (
                            <img src="/image/bedrock-edition.png" className="w-7 h-7 flex justify-center items-start bg-neutral-100 rounded-full p-1"/>
                        ):(
                            <img src="/image/java-edition.png" className="w-7 h-7 flex justify-center items-start bg-neutral-100 rounded-full p-1"/>
                        )}
                    </h1>


                    <button
                        className="p-1 md:p-2 rounded-full bg-black/10 dark:bg-white/10 
                                hover:bg-black/20 dark:hover:bg-white/20 
                                transition duration-300 cursor-pointer"
                        aria-label="View"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-black dark:text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.458 12C3.732 7.943 7.523 5 12 5
                                c4.478 0 8.268 2.943 9.542 7
                                -1.274 4.057-5.064 7-9.542 7
                                -4.477 0-8.268-2.943-9.542-7z"
                            />
                            <circle cx="12" cy="12" r="3" />
                        </svg>
                    </button>

                    <a
                        href={href}
                        className="p-1 md:p-2 rounded-full bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition duration-300 cursor-pointer"
                        target="_blank"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-6 h-6 text-black dark:text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5m0 0l5-5m-5 5V4"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </>
    )
}