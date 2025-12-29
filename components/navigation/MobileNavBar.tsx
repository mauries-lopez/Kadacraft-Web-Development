import { useEffect } from "react";

interface MobileNavBarProps{
    mobile: boolean
    setMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MobileNavBar({mobile, setMobile}: MobileNavBarProps){

    useEffect(()=>{
        if (mobile){
            const scrollY = window.scrollY;

            document.body.style.position = "fixed";
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = "100%";
            document.body.style.overflow = "hidden";
        }else{
            document.body.style.position = "";
            document.body.style.top = "";
            document.body.style.width = "";
            document.body.style.overflow = "";

            window.scrollTo(0, scrollY);
        }
    })

    return (
        <>
            <div className={`md:hidden w-full h-svh absolute inset-0 bg-neutral-100 dark:bg-neutral-700 transform transition-transform duration-500 ease-in-out ${mobile ? "translate-x-0" : "translate-x-full"}`}>

                {/* Back button */}
                <div className="w-full flex justify-end ">
                    <button
                        className="flex justify-end items-center gap-1 text-black dark:text-white text-xl font-semibold p-6 hover:text-yellow-400 transition"
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
                </div>


                <div className="md:flex w-full flex flex-col items-center text-black dark:text-white font-semibold text-3xl uppercase gap-10 p-20">
                    <a href="/" className=" hover:text-yellow-400">Home</a>
                    <a href="/members" className=" hover:text-yellow-400">Members</a>
                    <a href="/worlds" className=" hover:text-yellow-400">Worlds</a>
                    <a href="/" className=" hover:text-yellow-400">FAQs</a>
                </div>
            </div>
        </>
    )
}