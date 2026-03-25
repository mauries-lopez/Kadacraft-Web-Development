import Faq from "./Faq/Faq"
import Image from "next/image"

export default function About(){
    return (
        <>
            <section className="w-full flex flex-col md:flex-row bg-neutral-100 dark:bg-neutral-900 transition duration-300">

                {/* Left: About */}
                <div className="w-full p-10 md:p-20 flex flex-col justify-center items-center gap-6">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                        bg-yellow-400/20 dark:bg-yellow-500/10
                        border border-yellow-400/40 dark:border-yellow-500/30">
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-yellow-600 dark:text-yellow-300">
                            About Us
                        </span>
                    </div>

                    <Image
                        src="/kadacraft_logo.png"
                        alt="KadaCraft Logo"
                        width={1000}
                        height={1000}
                        loading="lazy"
                        className="w-full max-w-40 md:max-w-72 object-contain drop-shadow-lg"
                    />

                    <p className="w-full md:max-w-lg text-gray-700 dark:text-gray-300 text-base md:text-lg leading-relaxed text-center">
                        is a wholesome Minecraft server made up of Filipino content creators, known for its creative builds and fun, story-driven roleplay.
                        Each adventure is packed with charm, memorable characters, and lighthearted moments, while also sharing meaningful stories and moral lessons about friendship, teamwork, and growing together.
                        It&apos;s a place where creativity meets heart and every story leaves you with something to smile about.
                    </p>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent self-stretch mx-0" />

                {/* Right: FAQ */}
                <div className="w-full flex flex-col justify-center items-center p-10 md:p-20 gap-5">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
                        bg-yellow-400/20 dark:bg-yellow-500/10
                        border border-yellow-400/40 dark:border-yellow-500/30">
                        <span className="w-2 h-2 rounded-full bg-yellow-400" />
                        <span className="text-xs font-semibold tracking-widest uppercase text-yellow-600 dark:text-yellow-300">
                            FAQs
                        </span>
                    </div>

                    <Image
                        src="/image/faqs.png"
                        alt="FAQs"
                        width={1000}
                        height={1000}
                        loading="lazy"
                        className="w-full max-w-40 md:max-w-72 h-8 md:h-10 object-contain"
                    />

                    <div className="flex flex-col gap-y-3 w-full max-w-xl">
                        <Faq question="Paano makasali ng KadaCraft?" desc="Walang kasiguraduhan na makakasali ka ng KadaCraft, pero ito ang iilan sa mga pamantayan namin sa pagpili. (1) At least 18 years old. (2) Content Creator/Streamer on any platform. (3) Creates Minecraft Content. (4) Dedicated & Consistent. (5) Minecraft Java Edition"/>
                        <Faq question="Bakit wala ung ibang KadaCraft Members?" desc="Iba-iba ang dahilan. Maaaring 'busy' sa tunay na buhay at nagtra-trabaho. Kapag wala ang 'link' nila dito, ibig sabihin 'di na sila kabilang sa KadaCraft. Sa anong dahilan? marami, maaaring personal at 'di na dapat tanungin. Maaaring 'di talaga nila gusto mag-YouTube, dahil walang kasiguraduhan ang YouTube bilang trabaho."/>
                    </div>
                </div>
            </section>
        </>
    )
}
