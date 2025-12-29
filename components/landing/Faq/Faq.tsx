"use client"

import { useState } from "react";

interface FaqProps{
    question: string
    desc: string
}

export default function Faq({question, desc}: FaqProps){

    const [viewDesc, setViewDesc] = useState(false);

    return (
        <>
            <div className="w-full text-center bg-white dark:bg-neutral-800 p-2 drop-shadow-md rounded-full border-2 border-yellow-400 cursor-pointer" onClick={() => setViewDesc(!viewDesc)}>
                <p className="text-black dark:text-white text-sm md:text-base transition duration-300 ">{question}</p>
            </div>
            {viewDesc && (
                <div className="w-full">
                    <p className="text-black dark:text-white text-sm md:text-base transition duration-300 ">{desc}</p>
                </div>
            )}
        </>
    )
}