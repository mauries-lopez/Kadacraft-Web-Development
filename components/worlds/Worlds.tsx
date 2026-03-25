"use client"

import Background from "@/components/Background";
import World from "@/components/worlds/World";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Worlds(){

    interface WorldImages {
        season: string,
        gallery: string[]
    }

    const worldImages: WorldImages[] = [
        {
            season: "Season 1",
            gallery: ["/image/season1/kadacraftS1_1.png", "/image/season1/kadacraftS1_2.png", "/image/season1/kadacraftS1_3.png", "/image/season1/kadacraftS1_4.png", "/image/season1/kadacraftS1_5.png", "/image/season1/kadacraftS1_6.png", "/image/season1/kadacraftS1-best.png"]
        },
        {
            season: "Season 2",
            gallery: ["/image/season2/kadacraftS2_1.png", "/image/season2/kadacraftS2_2.png", "/image/season2/kadacraftS2_3.png", "/image/season2/kadacraftS2_4.png", "/image/season2/kadacraftS2_5.png", "/image/season2/kadacraftS2_6.png", "/image/season2/kadacraftS2-best.png"]
        },
        {
            season: "Season 3",
            gallery: ["/image/season3/kadacraftS3_1.png", "/image/season3/kadacraftS3_2.png", "/image/season3/kadacraftS3_3.png", "/image/season3/kadacraftS3_4.png", "/image/season3/kadacraftS3_5.png", "/image/season3/kadacraftS3_6.png", "/image/season3/kadacraftS3-best.png"]
        },
        {
            season: "Season 4",
            gallery: ["/image/season4/kadacraftS4_1.png", "/image/season4/kadacraftS4_2.png", "/image/season4/kadacraftS4_3.png", "/image/season4/kadacraftS4_4.png", "/image/season4/kadacraftS4_5.png", "/image/season4/kadacraftS4_6.png", "/image/season4/kadacraftS4-best.png"]
        },
        {
            season: "Season 4.1",
            gallery: ["/image/season4.1/kadacraftS4.1_1.png", "/image/season4.1/kadacraftS4.1_2.png", "/image/season4.1/kadacraftS4.1_3.png", "/image/season4.1/kadacraftS4.1_4.png", "/image/season4.1/kadacraftS4.1_5.png", "/image/season4.1/kadacraftS4.1_6.png", "/image/season4.1/kadacraftS4.1-best.png"]
        },
        {
            season: "Season 5",
            gallery: ["/image/season5/kadacraftS5_1.png", "/image/season5/kadacraftS5_2.png", "/image/season5/kadacraftS5_3.png", "/image/season5/kadacraftS5_4.png", "/image/season5/kadacraftS5_5.png", "/image/season5/kadacraftS5_6.png", "/image/season5/kadacraftS5-best.png"]
        },
        {
            season: "Season 6",
            gallery: ["/image/season6/kadacraftS6_1.png", "/image/season6/kadacraftS6_2.png", "/image/season6/kadacraftS6_3.png", "/image/season6/kadacraftS6_4.png", "/image/season6/kadacraftS6_5.png", "/image/season6/kadacraftS6_6.png", "/image/season6/kadacraftS6-best.png"]
        }
    ]

    const [seasonName, setSeasonName] = useState("undefined");
    const [seasonIndex, setSeasonIndex] = useState(0)
    const [viewGalleryBool, setIsViewGalleryBool] = useState(false)
    const [imageIndex, setImageIndex] = useState(0)

    function endViewGallery(){
        setIsViewGalleryBool(!viewGalleryBool)
        setImageIndex(0)
    }

    function prevImage(){
        if (imageIndex == 0 ){
            setImageIndex(worldImages[seasonIndex].gallery.length - 2)
        } else {
            setImageIndex(imageIndex - 1)
        }
    }

    function nextImage(){
        if (imageIndex == worldImages[seasonIndex].gallery.length - 1){
            setImageIndex(1)
        } else {
            setImageIndex(imageIndex + 1)
        }
    }

    useEffect(() =>{
        if (viewGalleryBool){
            for (let index = 0; index < worldImages.length; index++) {
                if (seasonName === worldImages[index].season) {
                    setSeasonIndex(index)
                }
            }
        }
    }, [viewGalleryBool, seasonName])

    return(
        <>
            <div className="relative w-full min-h-svh overflow-hidden flex flex-col items-center">
                {/* Background layer */}
                <div className="absolute inset-0">
                    <Background
                        srcLight="/image/temp-background_light.png"
                        srcDark="/image/temp-background_dark.png"
                    />
                </div>

                {/* Hero header */}
                <div className="relative z-10 w-full flex flex-col items-center pt-28 pb-4 px-6 text-center">
                    <div className="inline-flex items-center gap-2 mb-3 px-4 py-1.5 rounded-full
                        bg-yellow-400/20 dark:bg-yellow-500/10
                        border border-yellow-400/40 dark:border-yellow-500/30
                        backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-yellow-600 dark:text-yellow-300">
                            World Archive
                        </span>
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white drop-shadow-lg font-['Minecraft']">
                        Worlds
                    </h1>
                    <p className="mt-2 text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-md">
                        Download any KadaCraft season world or browse its gallery screenshots.
                    </p>
                </div>

                {/* World cards grid */}
                <div className="relative z-10 w-full px-6 md:px-12 pb-16 pt-4">
                    {/* Mobile: horizontal scroll | Desktop: grid */}
                    <div className="
                        flex flex-row gap-5 overflow-x-auto snap-x snap-mandatory pb-4
                        md:grid md:grid-cols-2 lg:grid-cols-3
                        md:overflow-visible md:snap-none md:pb-0 md:gap-6
                    ">
                        <World index={0} title="Season 1" href="https://www.mediafire.com/file/s2b7j3ckj9dkgvx/KadaCraft_S1.mcworld/file" srcImage="/image/season1/kadacraftS1-best.png" edition="bedrock" setSeasonName={setSeasonName} setIsViewGalleryBool={setIsViewGalleryBool}/>
                        <World index={1} title="Season 2" href="https://www.mediafire.com/file/d6akwu2lvm2xz6f/KadaCraft_Season_2.mcworld/file" srcImage="/image/season2/kadacraftS2-best.png" edition="bedrock" setSeasonName={setSeasonName} setIsViewGalleryBool={setIsViewGalleryBool}/>
                        <World index={2} title="Season 3" href="https://www.mediafire.com/file/rdnv4o2enbjabrh/KadaCraft_Season_3_%2528Pruned_Java_World%2529.rar/file" srcImage="/image/season3/kadacraftS3-best.png" edition="java" setSeasonName={setSeasonName} setIsViewGalleryBool={setIsViewGalleryBool}/>
                        <World index={3} title="Season 4" href="https://www.mediafire.com/file/9u1k34wta8a3z14/KadaCraft_Season_Four.rar/file" srcImage="/image/season4/kadacraftS4-best.png" edition="java" setSeasonName={setSeasonName} setIsViewGalleryBool={setIsViewGalleryBool}/>
                        <World index={4} title="Season 4.1" href="https://drive.google.com/file/d/1UuIYC5o4mUoje6wnNLpfUD1s9MOM0r64/view" srcImage="/image/season4.1/kadacraftS4.1-best.png" edition="java" setSeasonName={setSeasonName} setIsViewGalleryBool={setIsViewGalleryBool}/>
                        <World index={5} title="Season 5" href="https://drive.google.com/file/d/1ygwXV1d_y9Aq3ErrZhYVOt6DbKg1c_1i/view" srcImage="/image/season5/kadacraftS5-best.png" edition="java" setSeasonName={setSeasonName} setIsViewGalleryBool={setIsViewGalleryBool}/>
                        <World index={6} title="Season 6" href="https://drive.google.com/file/d/1XDviVUyZ1VZ2TiGEq0AqDITL5lJvyf4b/view" srcImage="/image/season6/kadacraftS6-best.png" edition="java" setSeasonName={setSeasonName} setIsViewGalleryBool={setIsViewGalleryBool}/>
                    </div>
                </div>
            </div>

            {/* Lightbox modal */}
            {viewGalleryBool && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => endViewGallery()}
                    />

                    {/* Modal content */}
                    <div className="relative z-10 w-full max-w-5xl mx-4 flex flex-col items-center gap-4 slide-in-top">

                        {/* Top bar: season name + close */}
                        <div className="w-full flex items-center justify-between px-2">
                            <span className="text-white font-bold text-lg font-['Minecraft'] drop-shadow">
                                {seasonName}
                            </span>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-white/60">
                                    {imageIndex + 1} / {worldImages[seasonIndex].gallery?.length ?? 0}
                                </span>
                                <button
                                    className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors duration-200"
                                    onClick={() => endViewGallery()}
                                    aria-label="Close gallery"
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Image + arrows */}
                        <div className="relative w-full flex items-center justify-center">
                            {/* Left arrow */}
                            <button
                                className="absolute left-0 z-10 p-3
                                    bg-black/50 hover:bg-black/70
                                    text-white rounded-l-xl
                                    transition-colors duration-200"
                                onClick={() => prevImage()}
                                aria-label="Previous image"
                            >
                                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>

                            {/* Image */}
                            {worldImages[seasonIndex].gallery && (
                                <div className="relative w-full" style={{ height: "70vh" }}>
                                    <Image
                                        src={worldImages[seasonIndex].gallery[imageIndex]}
                                        alt="World preview"
                                        fill
                                        sizes="100vw"
                                        className="object-contain rounded-xl drop-shadow-2xl"
                                    />
                                </div>
                            )}

                            {/* Right arrow */}
                            <button
                                className="absolute right-0 z-10 p-3
                                    bg-black/50 hover:bg-black/70
                                    text-white rounded-r-xl
                                    transition-colors duration-200"
                                onClick={() => nextImage()}
                                aria-label="Next image"
                            >
                                <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        {/* Dot indicators */}
                        <div className="flex gap-1.5">
                            {worldImages[seasonIndex].gallery?.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setImageIndex(i)}
                                    className={`rounded-full transition-all duration-200 ${i === imageIndex ? "w-5 h-2 bg-yellow-400" : "w-2 h-2 bg-white/30 hover:bg-white/60"}`}
                                    aria-label={`Go to image ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}