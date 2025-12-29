import Background from "@/components/Background";
import Member from "@/components/Member";

export default function Page(){

    let members: string[] = ["AveryMcIvory", "AZ1O1O", "BeeBuYog", "ClariDori", "Jade", "JZGrit", "KenPlayz", "KingFB", "Klarens", "KristianPH", "KyahRye", "LadySue", "MakiKun", "McHero2", "MythDaRiffer", "Obri", "Robraks", "SlyTheMiner", "Starsere", "Sthreed", "TenderJoncy", "WetzkieGamer", "WitchCarnelian", "ZeriFae", "ZircMCGamer"];

    return(
        <>
            <div className="relative w-full min-h-svh md:p-10 overflow-hidden flex justify-center items-center">

                {/* Background layer */}
                <div className="absolute inset-0">
                    <Background
                        srcLight="/image/kadacraft_background0_light.png"
                        srcDark="/image/kadacraft_background0_dark.png"
                    />
                </div>

                {/* Content layer */}
                <div
                    className="
                        relative z-10
                        w-full
                        flex flex-row
                        gap-10
                        mt-10
                        overflow-x-auto
                        snap-x snap-mandatory
                        p-20
                        
                        md:grid
                        md:grid-cols-2
                        lg:grid-cols-3
                        md:overflow-hidden
                    "
                >
                    {members.map((name) => (
                        <Member key={name} name={name} />
                    ))}
                </div>
            </div>
        </>
    )
}