import About from "@/components/landing/About";
import Intro from "@/components/landing/Intro";
import RecentVideos from "@/components/landing/RecentVideos";

export default async function Main() {

  // Only fetch during runtime, not during build
  if (process.env.NEXT_PUBLIC_FUNCTION_URL_YT_FETCHER && !process.env.NEXT_PUBLIC_FUNCTION_URL_YT_FETCHER.includes('localhost')) {
    try {
      await fetch(`${process.env.NEXT_PUBLIC_FUNCTION_URL_YT_FETCHER}`);
    } catch (error) {
      console.error('Failed to trigger video sync:', error);
    }
  }

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