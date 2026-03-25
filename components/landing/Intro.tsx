import Background from "../Background";
import Image from "next/image";

export default function Intro() {
  return (
    <>
      <section className="relative w-full h-svh overflow-hidden">

        <Background srcLight="/image/kadacraft_background1_light.png" srcDark="/image/kadacraft_background1_dark.png"/>

        {/* Foreground content */}
        <div className="relative w-full h-full flex flex-col justify-center items-center gap-y-4 scale-in-center px-6">

          {/* Welcome pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full
            bg-yellow-400/20 dark:bg-yellow-500/10
            border border-yellow-400/40 dark:border-yellow-500/30
            backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs font-semibold tracking-widest uppercase text-yellow-600 dark:text-yellow-300">
              Welcome, Adventurer!
            </span>
          </div>

          {/* "Welcome to" */}
          <h1 className="text-black dark:text-white text-3xl md:text-5xl font-bold transition duration-300 drop-shadow-md">
            Welcome to
          </h1>

          {/* Logo + comma */}
          <div className="flex justify-center items-center gap-1">
            <Image
              src="/kadacraft_logo.png"
              alt="KadaCraft Logo"
              width={1000}
              height={1000}
              priority
              className="w-full max-w-48 md:max-w-96 object-contain drop-shadow-xl"
            />
            <span className="text-black dark:text-white text-3xl md:text-5xl font-bold transition duration-300">,</span>
          </div>

          {/* Scroll hint */}
          <div className="absolute bottom-8 flex flex-col items-center gap-1 opacity-60 animate-bounce">
            <span className="text-xs text-gray-600 dark:text-gray-300 tracking-widest uppercase">Scroll</span>
            <svg className="w-4 h-4 text-gray-600 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>
    </>
  );
}