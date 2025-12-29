import Background from "@/components/Background";

export default function RecentVideos(){
    return (
        <>
            <div className="hidden relative w-full min-h-svh md:p-10 overflow-hidden flex justify-center items-center">
                {/* Background layer */}
                <div className="absolute inset-0">
                    <Background
                        srcLight="/image/kadacraft_background3_light.png"
                        srcDark="/image/kadacraft_background3_dark.png"
                    />
                </div>
            </div>
        </>
    )
}