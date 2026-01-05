import About from "@/components/landing/About";
import Intro from "@/components/landing/Intro";
import RecentVideos from "@/components/landing/RecentVideos";

export default async function Main() {

  await fetch(`${process.env.NEXT_PUBLIC_FUNCTION_URL_YT_FETCHER}`);

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