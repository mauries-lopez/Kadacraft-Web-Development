export default function Footer(){

    return(
        <>
            <footer className="w-full flex justify-center items-center bg-neutral-100 dark:bg-neutral-900 transition duration-300 p-5">
                <p className="text-xs text-black dark:text-white"> Website written and maintained by 
                    <span className="ml-1 text-xs text-black dark:text-white hover:underline">
                        <a href="https://www.youtube.com/@Atmospheric" target="_blank" rel="noopener noreferrer">
                            ATMOS
                        </a>
                    </span>
                </p>
            </footer>
        </>
    )
}