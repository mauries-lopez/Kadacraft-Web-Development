export default function Footer(){
    return(
        <>
            <footer className="w-full bg-neutral-100 dark:bg-neutral-900 transition duration-300 border-t border-neutral-200 dark:border-neutral-800">
                {/* Top accent line */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />

                <div className="flex flex-col items-center justify-center gap-2 py-6 px-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                        Website written and maintained by{" "}
                        <a
                            href="https://www.youtube.com/@Atmospheric"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-semibold text-yellow-600 dark:text-yellow-400 hover:underline underline-offset-2 transition-colors duration-200"
                        >
                            ATMOS
                        </a>
                    </p>
                </div>
            </footer>
        </>
    )
}