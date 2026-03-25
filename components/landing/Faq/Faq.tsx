"use client"

import { useState } from "react";

interface FaqProps{
    question: string
    desc: string
}

export default function Faq({question, desc}: FaqProps){

    const [viewDesc, setViewDesc] = useState(false);

    return (
        <div className="w-full rounded-xl overflow-hidden border border-yellow-400/50 dark:border-yellow-500/30 shadow-md">
            {/* Question row */}
            <button
                className="
                    w-full flex items-center justify-between gap-3 text-left
                    px-5 py-3
                    bg-white/80 dark:bg-white/5
                    backdrop-blur-sm
                    hover:bg-yellow-50 dark:hover:bg-yellow-500/10
                    transition-colors duration-200
                    cursor-pointer
                "
                onClick={() => setViewDesc(!viewDesc)}
            >
                <p className="text-black dark:text-white text-sm md:text-base font-medium leading-snug">
                    {question}
                </p>
                <svg
                    className={`shrink-0 w-5 h-5 text-yellow-500 transition-transform duration-300 ${viewDesc ? "rotate-180" : "rotate-0"}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {/* Answer panel */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${viewDesc ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="px-5 py-4 bg-yellow-400/10 dark:bg-yellow-500/5 border-t border-yellow-400/20 dark:border-yellow-500/20">
                    <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base leading-relaxed">
                        {desc}
                    </p>
                </div>
            </div>
        </div>
    );
}