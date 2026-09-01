"use client";

import MoonAltLoop from "@/assets/svg/MoonAltLoop";
import SunnyLoop from "@/assets/svg/SunnyLoop";
import { useEffect, useState } from "react";

export type Theme = "light" | "dark";

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme") as "light" | "dark" | null;

    const provided =
      stored ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");

    const hasValue: boolean = document.documentElement.classList.contains("dark") || document.documentElement.classList.contains("light");

    if (!hasValue) {
      document.documentElement.classList.add(provided);
    } else {
      document.documentElement.classList.toggle("dark", provided === "dark");
      document.documentElement.classList.toggle("light", provided === "light");
    }

    setTheme(provided);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    console.log("Toggling theme to:", newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };


  return (
    <div className="relative flex items-center bg-surface-container-low border border-surface-stroke rounded-full p-1">
      <div
        className={`absolute top-1 left-1 w-8 h-8 rounded-full bg-surface-container-high transition-transform duration-300 ${
          theme === "dark" ? "translate-x-0" : "translate-x-8"
        }`}
      />

      <button
        type="button"
        className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full text-primary"
        onClick={toggleTheme}
        aria-label="Dark theme"
      >
        <span className="material-symbols-outlined text-[18px]">
          <MoonAltLoop />
        </span>
      </button>

      {/* Light mode */}
      <button
        type="button"
        className="relative z-10 w-8 h-8 flex items-center justify-center rounded-full text-primary"
        onClick={toggleTheme}
        aria-label="Light theme"
      >
        <span className="material-symbols-outlined text-[18px]">
          <SunnyLoop />
        </span>
      </button>
    </div>
  );
}