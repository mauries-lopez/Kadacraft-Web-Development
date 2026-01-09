"use client"
import About from "@/components/landing/About";
import Intro from "@/components/landing/Intro";
import RecentVideos from "@/components/landing/RecentVideos";
import { useState, useEffect } from 'react'

function InstallPrompt() {
  const [isIOS, setIsIOS] = useState(false)
  const [isAndroid, setIsAndroid] = useState(false)
  const [isStandalone, setIsStandalone] = useState(false)
  const [showInstructions, setShowInstructions] = useState(false)

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

  if (!isIOS && !isAndroid) return null

  function handleInstallClick() {
    setShowInstructions(true)
  }

  const instructions = isIOS
    ? 'Tap the Share button 📤 (square with arrow) next to the address bar, select "More", then tap “Add to Home Screen” ➕'
    : /Android/.test(navigator.userAgent)
    ? 'In Chrome on Android, open the menu ⋮ and tap “Add to Home Screen” ➕'
    : 'Open your browser menu ☰ or ⋮ and choose “Add to Home Screen” ➕ to install this app.'

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={handleInstallClick}
          className="flex flex-col justify-center items-center"
          aria-label="Download"
        >
          <p className="font-['Minecraft'] text-black w-20"> Install! </p>
          <img src="/kadacraft_weblogo.png" alt="Kadacraft logo" className="h-15 w-15 rounded-full" />
        </button>
      </div>

      {showInstructions && (
        <div className="fixed inset-0 z-60 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setShowInstructions(false)} />
          <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 rounded-lg shadow-lg p-6 max-w-sm mx-4">
            <h4 className="font-semibold mb-2">Install App</h4>
            <p className="mb-4">{instructions}</p>
            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setShowInstructions(false)}
                className="px-3 py-1 bg-blue-600 text-white rounded"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default function Page() {

  return (
    <>
      <main className="w-full transition duration-300">
        <InstallPrompt/>
        <Intro />
        <About />
        <RecentVideos />
      </main>
    </>
  );
}