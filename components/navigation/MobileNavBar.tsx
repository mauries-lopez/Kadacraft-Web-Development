interface MobileNavBarProps{
    mobile: boolean
    setMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavBar({mobile, setMobile}: MobileNavBarProps){
    return (
        <>
            <div className={`w-full h-svh absolute inset-0 bg-neutral-100 dark:bg-neutral-700 z-0 transition duration-300 ${mobile ? "slide-in-right" : "slide-out-right"}`}>

                {/* Back button */}
                <button
                    className="w-full flex justify-end items-center gap-1 text-black dark:text-white text-xl font-semibold p-6 hover:text-yellow-400 transition"
                    onClick={() => setMobile(false)}
                >
                    Back
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>

                <div className="md:flex w-full flex flex-col items-center text-black dark:text-white font-semibold text-3xl gap-7 p-20">
                    <a href="/" className=" hover:text-yellow-400">Home</a>
                    <a href="/members" className=" hover:text-yellow-400">Members</a>
                    <a href="/" className=" hover:text-yellow-400">Worlds</a>
                    <a href="/" className=" hover:text-yellow-400">FAQs</a>
                </div>
            </div>
        </>
    )
}