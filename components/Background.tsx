interface BackgroundProps {
    srcLight: string,
    srcDark: string
}

export default function Background({ srcLight, srcDark }: BackgroundProps) {
    return (
        <>
            {/* Background image for light mode */}
            <div
                className="absolute inset-0 bg-cover bg-center z-0 dark:hidden transition duration-300"
                style={{
                    backgroundImage: `url('${srcLight}')`,
                }}
            />

            {/* Background image for dark mode */}
            <div
                className="hidden absolute inset-0 bg-cover bg-center z-0 dark:flex transition duration-300"
                style={{
                    backgroundImage: `url('${srcDark}')`,
                }}
            />

            {/* White/black overlay */}
            <div className="absolute inset-0 bg-white/50 dark:bg-black/50 z-0 blur-3xl" />
        </>
    );
}
