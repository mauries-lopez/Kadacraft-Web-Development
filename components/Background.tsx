import Image from "next/image";

interface BackgroundProps {
    srcLight: string,
    srcDark: string
}

export default function Background({ srcLight, srcDark }: BackgroundProps) {
    return (
        <>
            {/* Background image for light mode */}
            <Image
                src={srcLight}
                alt="Light background"
                fill
                priority
                className="object-cover object-center z-0 dark:hidden transition duration-300"
            />

            {/* Background image for dark mode */}
            <Image
                src={srcDark}
                alt="Dark background"
                fill
                priority
                className="hidden object-cover object-center z-0 dark:block transition duration-300"
            />

            {/* White/black overlay */}
            <div className="absolute inset-0 bg-white/50 dark:bg-black/50 z-0 blur-3xl" />
        </>
    );
}
