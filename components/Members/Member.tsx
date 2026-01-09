import Link from "next/link"

interface MemberProps {
    name: string,
    channelIconUrl: string
}

export default function Member({ name, channelIconUrl }: MemberProps) {

    return (
        <>
            <Link href={`/members/${encodeURIComponent(name)}`}>
                <div className="snap-center w-full md:ml-0 max-w-300 min-w-70 drop-shadow-xl flex flex-col hover:scale-105 transition duration-300 bg-linear-to-t from-yellow-300 dark:from-neutral-500 rounded-lg overflow-hidden items-center cursor-pointer slide-in-top">
                    {/* Image */}
                    <div
                        className="w-full h-100 bg-cover bg-center"
                        style={{
                            backgroundImage: `url('${channelIconUrl}')`,
                        }}
                    />

                    {/* Name / Title */}
                    <div className="w-full bg-yellow-500 dark:bg-neutral-800 text-center py-2 transition duration-300 hover:scale-105 ">
                        <h1 className="text-lg md:text-xl font-bold text-black dark:text-white font-['Minecraft']">{name}</h1>
                    </div>
                </div>
            </Link>
        </>
    )
}