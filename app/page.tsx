import About from "@/components/landing/About";
import Intro from "@/components/landing/Intro";
import RecentVideos from "@/components/landing/RecentVideos";

export default async function Main() {

  return (
    <>
      <main className="w-full transition duration-300">
        <Intro />
        <About />
        <RecentVideos />
      </main>
    </>
  );
}