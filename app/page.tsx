"use client"

import About from "@/components/landing/About";
import Intro from "@/components/landing/Intro";
import RecentVideos from "@/components/landing/RecentVideos";
import { useState, useEffect } from 'react'
import '@khmyznikov/pwa-install';

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)

  let pwaInstallElement: any = null;

  const handleShowDialog = () => {
      if (pwaInstallElement) {
          pwaInstallElement.showDialog(true);
      }
  };

  useEffect(() => {
    setIsIOS(
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream
    )

    setIsStandalone(
      window.matchMedia && window.matchMedia('(display-mode: standalone)').matches
    )
    setIsAndroid(/Android/.test(navigator.userAgent))
  }, [])

  if (isStandalone) return null

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleShowDialog}
          className="flex flex-col justify-center items-center"
          aria-label="Download"
        >
          <p className="font-['Minecraft'] text-black dark:text-white mb-2"> Install App! </p>
          <img src="/kadacraft_weblogo.png" alt="Kadacraft logo" className="h-15 w-15 rounded-full" />
        </button>
      </div>

      <pwa-install
          ref={(el) => {
            pwaInstallElement = el;
          }}
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