import Background from "@/components/Background";
import Member from "@/components/Member";

export default function Members(){

    let members: string[] = ["AveryMcIvory", "AZ1O1O", "BeeBuYog", "ClariDori", "Jade", "JZGrit", "KenPlayz", "KingFB", "Klarens", "KristianPH", "KyahRye", "LadySue", "MakiKun", "McHero2", "MythDaRiffer", "Obri", "Robraks", "SlyTheMiner", "Starsere", "Sthreed", "TenderJoncy", "WetzkieGamer", "WitchCarnelian", "ZeriFae", "ZircMCGamer"];

    return(
        <>
            <div className="w-full">
                

                <div className="relative w-full flex justify-center items-start p-3 md:p-10 ">
                    <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-5 md:gap-10 p-4 z-10 mt-15 drop-shadow-md">
                        {members.map((name) => (
                            <Member key={name} name={name} />
                        ))}
                    </div>
                    <Background srcLight="/image/kadacraft_background0_light.png" srcDark="/image/kadacraft_background0_dark.png"/>
                </div>
            </div>
        </>
    )
}