"use client"

import { useThemeToggle } from "@/hooks/useThemeToggle";
import ThemeToggle from "../ThemeToggle";

export default function NavigationBar(){

    const {theme, setTheme} = useThemeToggle();

    return (
        <header className="w-full fixed top-0 p-5 z-100 slide-in-elliptic-top-fwd">
            <div className="flex w-full items-center rounded-xl bg-neutral-100 dark:bg-neutral-800 backdrop-blur-sm px-5 py-3 transition duration-300 drop-shadow-xl">
                <div className="w-auto">
                    <img 
                        src={"kadacraft_logo.png"} 
                        alt="KadaCraft Logo"
                        className="w-full max-w-50 object-contain"
                    />
                </div>
                <div className="hidden md:flex w-full items-center justify-evenly text-black dark:text-white font-semibold text-lg">
                    <a href="/" className="hover:border-b hover:border-b-yellow-400 hover:text-yellow-400">Home</a>
                    <a href="/" className="hover:border-b hover:border-b-yellow-400 hover:text-yellow-400">Members</a>
                    <a href="/" className="hover:border-b hover:border-b-yellow-400 hover:text-yellow-400">Worlds</a>
                    <a href="/" className="hover:border-b hover:border-b-yellow-400 hover:text-yellow-400">FAQs</a>
                </div>
                <div className="w-full md:w-auto flex items-center justify-end mr-3 ">
                    <ThemeToggle theme={theme} setTheme={setTheme}/>
                </div>
                <button className="flex md:hidden text-black dark:text-white">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    )
}