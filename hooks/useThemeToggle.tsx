"use client";

import { useEffect, useState } from "react";

export function useThemeToggle() {
     const [theme, setTheme] = useState("light");

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
        try {
            const parsedTheme = JSON.parse(storedTheme);
            setTheme(parsedTheme);
        } catch {
            setTheme("light");
        }
        } else {
        setTheme("light");
        }
    }, []);

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === "dark") {
            localStorage.removeItem('theme')
            root.classList.add("dark");
            root.classList.remove("light");
            localStorage.setItem('theme', JSON.stringify(theme));
        } else {
            localStorage.removeItem('theme')
            root.classList.remove("dark");
            root.classList.add("light");
            localStorage.setItem('theme', JSON.stringify(theme));
        }
    }, [theme]);

    return { theme, setTheme };
}