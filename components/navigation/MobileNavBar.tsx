import { useEffect } from "react";

interface MobileNavBarProps{
    mobile: boolean
    setMobile: React.Dispatch<React.SetStateAction<boolean>>;
}

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Members", href: "/members" },
    { label: "Worlds", href: "/worlds" },
    { label: "Mods", href: "https://drive.google.com/file/d/1ctGg5PuSHL7Nf-1OgsTWfQNjWX57uLXY/view", external: true },
];

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
            <div className={`
                md:hidden w-full h-svh absolute inset-0
                bg-white/95 dark:bg-neutral-900/95
                backdrop-blur-xl
                border-r border-yellow-400/20 dark:border-yellow-500/10
                transform transition-transform duration-500 ease-in-out
                ${mobile ? "translate-x-0" : "translate-x-full"}
                flex flex-col
            `}>
                {/* Close button */}
                <div className="w-full flex justify-end p-6">
                    <button
                        className="flex items-center gap-2 text-gray-700 dark:text-white text-base font-semibold
                            px-4 py-2 rounded-full
                            bg-yellow-400/10 dark:bg-yellow-500/10
                            border border-yellow-400/30 dark:border-yellow-500/20
                            hover:bg-yellow-400/20 dark:hover:bg-yellow-500/20
                            hover:text-yellow-500 dark:hover:text-yellow-300
                            transition-all duration-200"
                        onClick={() => setMobile(false)}
                    >
                        Close
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Nav links */}
                <nav className="flex flex-col items-center justify-center flex-1 gap-6 pb-20">
                    {navLinks.map(({ label, href, external }) => (
                        <a
                            key={label}
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            onClick={() => setMobile(false)}
                            className="
                                text-3xl font-bold tracking-wide uppercase
                                text-gray-800 dark:text-white
                                hover:text-yellow-500 dark:hover:text-yellow-400
                                transition-colors duration-200
                                relative group
                            "
                        >
                            {label}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300 rounded-full" />
                        </a>
                    ))}
                </nav>

                {/* Bottom accent */}
                <div className="h-1 w-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30" />
            </div>
        </>
    )
}