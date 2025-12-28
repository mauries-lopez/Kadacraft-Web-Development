export default function About(){
    return (
        <>
            <section className="w-full">
                <div className="w-full bg-neutral-100 dark:bg-neutral-900 p-10 md:p-20 transition duration-300">
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
            </section>
        </>
    )
}