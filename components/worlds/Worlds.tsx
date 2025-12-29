"use client"

import Background from "@/components/Background";
import World from "@/components/worlds/World";
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
            <div className="w-full h-svh flex flex-col justify-center items-center bg-neutral-100 ">
                <Background srcLight="/image/temp-background_light.png" srcDark="/image/temp-background_dark.png "/>
                <div className="w-full h-130 md:h-full flex flex-row md:grid md:grid-cols-2 lg:grid-cols-3 justify-start items-center gap-10 mt-10 p-10 md:p-20 overflow-x-scroll z-10 snap-x snap-mandatory md:overflow-hidden slide-in-top">
                    <World title="Season 1" href="https://www.mediafire.com/file/s2b7j3ckj9dkgvx/KadaCraft_S1.mcworld/file" srcImage="/image/season1/kadacraftS1-best.png" edition="bedrock" setSeasonName={setSeasonName} setIsViewGalleryBool={setIsViewGalleryBool}/>
                    <World title="Season 2" href="https://www.mediafire.com/file/d6akwu2lvm2xz6f/KadaCraft_Season_2.mcworld/file" srcImage="/image/season2/kadacraftS2-best.png" edition="bedrock" setSeasonName={setSeasonName} setIsViewGalleryBool={setIsViewGalleryBool}/>
                    <World title="Season 3" href="https://www.mediafire.com/file/rdnv4o2enbjabrh/KadaCraft_Season_3_%2528Pruned_Java_World%2529.rar/file" srcImage="/image/season3/kadacraftS3-best.png" edition="java" setSeasonName={setSeasonName} setIsViewGalleryBool={setIsViewGalleryBool}/>
                    <World title="Season 4" href="https://www.mediafire.com/file/9u1k34wta8a3z14/KadaCraft_Season_Four.rar/file" srcImage="/image/season4/kadacraftS4-best.png" edition="java" setSeasonName={setSeasonName} setIsViewGalleryBool={setIsViewGalleryBool}/>
                    <World title="Season 4.1" href="https://drive.google.com/file/d/1UuIYC5o4mUoje6wnNLpfUD1s9MOM0r64/view" srcImage="/image/season4.1/kadacraftS4.1-best.png" edition="java" setSeasonName={setSeasonName} setIsViewGalleryBool={setIsViewGalleryBool}/>
                </div>
            </div>

            {/* Pictures */}
            <div className={`${viewGalleryBool ? "flex " : "hidden"} absolute inset-0 justify-center items-center z-50`}>
                <div
                    className="w-full h-svh flex items-center justify-center bg-neutral-700/80 px-10 md:px-70"
                    onClick={() => endViewGallery()}
                >
                    <div onClick={e => e.stopPropagation()} className="w-full flex flex-col slide-in-top justify-center">
                        
                        <div className="absolute inset-0 w-full z-10 flex flex-row">
                            <div className="w-full ">
                                {/* Left Arrow */}
                                <button
                                    className="absolute h-full p-3 md:p-10 bg-black/50 rounded-l-2xl text-4xl md:text-7xl hover:bg-black/70 transition duration-300"
                                    onClick={() => prevImage()}
                                >
                                    ‹
                                </button>
                            </div>

                            <div className="w-full flex justify-end items-center">
                                {/* Right Arrow */}
                                <button
                                    className="absolute h-full p-3 md:p-10 bg-black/50 rounded-r-2xl text-4xl md:text-7xl hover:bg-black/70 transition duration-300"
                                    onClick={() => nextImage()}
                                >
                                    ›
                                </button>
                            </div>
                        </div>
                        
                        {/* Image */}
                        {worldImages[seasonIndex].gallery && (
                            <img
                                src={worldImages[seasonIndex].gallery[imageIndex]}
                                alt="World preview"
                                className="object-contain rounded-2xl drop-shadow-2xl max-h-[80vh] order-1"
                            />
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}