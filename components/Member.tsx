interface MemberProps{
    name: string
}

export default function Member({name}: MemberProps){

    return(
        <>
            <div className="bg-gradient-to-t from-yellow-500 to-neutral-100 dark:to-black rounded-lg border-4 border-yellow-500 dark:border-neutral-800 shadow-xl overflow-hidden flex flex-col items-center hover:scale-105 transition duration-300 cursor-pointer">
                {/* Image */}
                <div
                    className="w-full h-64 bg-cover"
                    style={{
                        backgroundImage: `url('/image/members/${name}.png')`,
                    }}
                />

                {/* Name / Title */}
                <div className="w-full bg-yellow-500 dark:bg-neutral-800 text-center py-2 transition duration-300 hover:scale-105 ">
                    <h1 className="text-lg md:text-xl font-bold text-black dark:text-white font-['Minecraft']">{name}</h1>
                </div>
            </div>
        </>
    )
}