import Background from "@/components/Background";
import World from "@/components/worlds/World";

export default function Worlds(){
    return(
        <>
            <div className="w-full h-svh flex flex-col justify-center items-center bg-neutral-100">
                <Background srcLight="/image/temp-background_light.png" srcDark="/image/temp-background_dark.png "/>
                <div className="w-full h-130 md:h-full flex flex-row md:grid lg:grid-cols-3 justify-start items-center gap-10 mt-10 p-10 md:p-20 overflow-x-scroll z-10 snap-x snap-mandatory md:overflow-hidden slide-in-top">
                    <World title="Season 1" href="https://www.mediafire.com/file/s2b7j3ckj9dkgvx/KadaCraft_S1.mcworld/file" srcImage="/image/season1/kadacraftS1-best.png" edition="bedrock"/>
                    <World title="Season 2" href="https://www.mediafire.com/file/d6akwu2lvm2xz6f/KadaCraft_Season_2.mcworld/file" srcImage="/image/season2/kadacraftS2-best.png" edition="bedrock"/>
                    <World title="Season 3" href="https://www.mediafire.com/file/rdnv4o2enbjabrh/KadaCraft_Season_3_%2528Pruned_Java_World%2529.rar/file" srcImage="/image/season3/kadacraftS3-best.png" edition="java"/>
                    <World title="Season 4" href="https://www.mediafire.com/file/9u1k34wta8a3z14/KadaCraft_Season_Four.rar/file" srcImage="/image/season4/kadacraftS4-best.png" edition="java"/>
                    <World title="Season 4.1" href="https://drive.google.com/file/d/1UuIYC5o4mUoje6wnNLpfUD1s9MOM0r64/view" srcImage="/image/season4.1/kadacraftS4.1-best.png" edition="java"/>
                </div>
            </div>
        </>
    )
}