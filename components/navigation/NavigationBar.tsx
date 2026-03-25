"use client"

import { useThemeToggle } from "@/hooks/useThemeToggle";
import ThemeToggle from "../ThemeToggle";
import { useState } from "react";
import MobileNavBar from "./MobileNavBar";
import Image from "next/image";

const navLinks = [
    { label: "Home", href: "/" },
    { label: "Members", href: "/members" },
    { label: "Worlds", href: "/worlds" },
    { label: "Mods", href: "https://drive.google.com/file/d/1ctGg5PuSHL7Nf-1OgsTWfQNjWX57uLXY/view", external: true },
];

export default function NavigationBar(){

    const [mobile, setMobile] = useState(false);
    const {theme, setTheme} = useThemeToggle();

    return (
        <header className="w-full fixed top-0 px-4 py-3 z-[100] slide-in-top">
            <div className="flex w-full items-center rounded-full
                bg-white/80 dark:bg-neutral-900/80
                backdrop-blur-lg
                px-4 py-2
                transition duration-300
                shadow-lg shadow-black/10 dark:shadow-black/30
                border border-yellow-400/40 dark:border-yellow-500/20">

                {/* Logo */}
                <div className="w-auto shrink-0">
                    <Image
                        src="/kadacraft_logo.png"
                        alt="KadaCraft Logo"
                        width={500}
                        height={200}
                        priority
                        className="w-36 md:w-44 object-contain"
                    />
                </div>

                {/* Desktop nav links */}
                <nav className="hidden md:flex w-full items-center justify-evenly text-gray-800 dark:text-white font-semibold text-sm uppercase tracking-wide">
                    {navLinks.map(({ label, href, external }) => (
                        <a
                            key={label}
                            href={href}
                            target={external ? "_blank" : undefined}
                            rel={external ? "noopener noreferrer" : undefined}
                            className="relative group hover:text-yellow-500 dark:hover:text-yellow-400 transition-colors duration-200"
                        >
                            {label}
                            <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-yellow-400 group-hover:w-full transition-all duration-300 rounded-full" />
                        </a>
                    ))}
                </nav>

                {/* Right: theme toggle + hamburger */}
                <div className="flex items-center gap-3 ml-auto">
                    <ThemeToggle theme={theme} setTheme={setTheme}/>

                    <button
                        className="flex md:hidden text-gray-800 dark:text-white
                            p-1.5 rounded-full
                            hover:bg-yellow-400/10 dark:hover:bg-yellow-500/10
                            hover:text-yellow-500 dark:hover:text-yellow-400
                            transition-colors duration-200"
                        onClick={() => setMobile(!mobile)}
                        aria-label="Open menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>
            </div>

            <MobileNavBar setMobile={setMobile} mobile={mobile}/>
        </header>
    )
}