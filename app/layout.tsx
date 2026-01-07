import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/components/navigation/NavigationBar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KadaCraft",
  description: "A group of Filipino Gaming Content Creators unified by their love for gaming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased `}
      >
        <NavigationBar/>
        <script
          src="https://app.rybbit.io/api/script.js"
          data-site-id="b0fe3904e389"
          defer
        ></script>
        {children}
        <Footer/>
      </body>
    </html>
  );
}