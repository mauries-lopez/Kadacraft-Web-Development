"use client";

import React from "react";

interface ThemeProps {
  theme: string;
  setTheme: React.Dispatch<React.SetStateAction<string>>;
}

export default function ThemeToggle({theme, setTheme} : ThemeProps) {
  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="p-2 rounded-full flex items-center justify-center shadow transition dark:bg-gray-200 dark:text-gray-900 bg-stone-800 text-gray-100 hover:scale-105 active:scale-95"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l1.414-1.414M6.05 6.05L4.636 4.636M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-5 w-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
        </svg>
      )}
    </button>
  );
}