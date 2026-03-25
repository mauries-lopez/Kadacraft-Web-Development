"use client"

import About from "@/components/landing/About";
import Intro from "@/components/landing/Intro";
import RecentVideos from "@/components/landing/RecentVideos";
import { useRef } from 'react';
import Image from "next/image";
import '@khmyznikov/pwa-install';

function InstallPrompt() {

  const pwaInstallRef = useRef<any>(null);

  const handleShowDialog = () => {
      if (pwaInstallRef.current) {
          pwaInstallRef.current.showDialog(true);
      }
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleShowDialog}
          className="flex flex-col justify-center items-center"
          aria-label="Download"
        >
          <p className="font-['Minecraft'] text-black dark:text-white mb-2"> Install App! </p>
          <Image
            src="/kadacraft_weblogo.png"
            alt="Kadacraft logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </button>
      </div>

      <pwa-install
          ref={pwaInstallRef}
          name="KadaCraft"
          description="Kadacraft — Minecraft SMP and videos by Kadacraft."
          manifest-url="/manifest.json"
          disable-screenshots="true"
          icon="kadacraft_weblogo.png"
        />
    </>
  )
}

export default function Page() {
  return (
    <>
      <main className="w-full transition duration-300">
        <InstallPrompt/>
        <Intro/>
        <About/>
        <RecentVideos/>
      </main>
    </>
  );
}