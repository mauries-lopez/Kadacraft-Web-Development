export default function Intro() {
  return (
    <>
    <section className="w-full h-svh">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: `url('/image/kadacraft_background1.png')`,
          backgroundPosition: '47% 0px',
        }}
      />

      {/* White overlay */}
      <div className="absolute inset-0 bg-white/50 dark:bg-black/70 z-0" />

      {/* Foreground content */}
      <div className="relative w-full h-full flex flex-col justify-center items-center gap-y-3">
        <div className="w-full flex justify-center items-center">
          <h1 className="text-black dark:text-white text-3xl md:text-5xl font-bold transition duration-300">
            Welcome to
          </h1>
        </div>

        <div className="w-full flex justify-center items-center">
          <img
            src="kadacraft_logo.png"
            alt="KadaCraft Logo"
            className="w-full max-w-60 md:max-w-100 object-contain"
          />
          <h1 className="text-black dark:text-white text-3xl md:text-5xl font-bold transition duration-300">
            ,
          </h1>
        </div>

        <div className="w-full flex justify-center items-center">
          <h1 className="text-black dark:text-white text-sm md:text-base font-bold transition duration-300">
            Adventurer!
          </h1>
        </div>
      </div>
    </section>
    </>
  );
}