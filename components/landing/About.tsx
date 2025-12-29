import Faq from "./Faq/Faq"

export default function About(){
    return (
        <>
            <section className="w-full flex flex-col md:flex-row bg-neutral-100 dark:bg-neutral-900 ">
                <div className="w-full p-10 md:p-20 transition duration-300 flex flex-col justify-center items-center">
                    {/* Foreground content */}
                    <div className="flex flex-col justify-center items-center gap-y-3">
                        <div className="w-full flex justify-center items-center ">
                            <img
                            src="kadacraft_logo.png"
                            alt="KadaCraft Logo"
                            className="w-full max-w-50 md:max-w-100 object-contain"
                            />
                        </div>

                        <div className="w-full flex justify-center items-center ">
                            <p className="w-full md:max-w-200 text-black dark:text-white text-base md:text-lg transition duration-300 text-center">
                                is a wholesome Minecraft server made up of Filipino content creators, known for its creative builds and fun, story-driven roleplay. 
                                Each adventure is packed with charm, memorable characters, and lighthearted moments, while also sharing meaningful stories and moral lessons about friendship, teamwork, and growing together.
                                It’s a place where creativity meets heart and every story leaves you with something to smile about.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="w-full flex flex-col justify-center items-center p-10 md:p-20 gap-y-3">
                    <img src="/image/faqs.png" className="w-full max-w-50 md:max-w-100 h-8 md:h-10 object-contain" />
                    <div className="flex flex-col gap-y-2">
                        <Faq question="Paano makasali ng KadaCraft?" desc="Walang kasiguraduhan na makakasali ka ng KadaCraft, pero ito ang iilan sa mga pamantayan namin sa pagpili. (1) At least 18 years old. (2) Content Creator/Streamer on any platform. (3) Creates Minecraft Content. (4) Dedicated & Consistent. (5) Minecraft Java Edition"/>
                        <Faq question="Bakit wala ung ibang KadaCraft Members?" desc="Iba-iba ang dahilan. Maaaring 'busy' sa tunay na buhay at nagtra-trabaho. Kapag wala ang 'link' nila dito, ibig sabihin 'di na sila kabilang sa KadaCraft. Sa anong dahilan? marami, maaaring personal at 'di na dapat tanungin. Maaaring 'di talaga nila gusto mag-YouTube, dahil walang kasiguraduhan ang YouTube bilang trabaho."/>
                        <Faq question="Anong mga mods ng KadaCraft?" desc="Wala masyado. Pinapanatili naming 'vanilla' ang halos lahat ng aming mga season. Kung maglalagay kami ng maraming mods, mag-iiba na ang tawag dito, tulad nang ginawa namin sa Kada Z. Kadalasan, ang nakikita ninyo sa KadaCraft 7 ay mga resource packs at data packs. Karamihan sa mga mods namin ay server-side at hindi naman magagamit sa singleplayer."/>
                    </div>
                </div>
            </section>
        </>
    )
}
