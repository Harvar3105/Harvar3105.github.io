"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "../widgets/Buttons/LanguageSwitcher";
import LogoButton from "../widgets/Buttons/LogoButton";
import NavigationButton from "../widgets/Buttons/NavigationButton";
import ThemeSwitcher from "../widgets/Buttons/ThemeSwitcher";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const t = useTranslations("Navigation");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        menuButtonRef.current &&
        !menuButtonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-surface-stroke bg-glass-bg backdrop-blur-md">
      <nav className="relative w-full min-w-0 mx-auto flex h-20 max-w-container-max items-center justify-between px-gutter">
        <LogoButton />
        <ul className="hidden items-center gap-stack-lg md:flex">
          <NavigationButton title={"home"} href="/" />
          <NavigationButton title={"experience"} href="/experience" />
          <NavigationButton title={"projects"} href="/projects" />
        </ul>
        <div className="hidden items-center gap-4 md:flex">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <button className="hidden md:flex font-bold btn-primary px-8 py-3 rounded font-label-mono text-label-mono items-center gap-2">
            {t("get_in_touch")}
          </button>
        </div>

        <button
          ref={menuButtonRef}
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 6l12 12M18 6L6 18"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {menuOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-full left-0 w-full border-b border-surface-stroke bg-glass-bg backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col gap-4 p-gutter">
              <NavigationButton title={"home"} href="/" />
              <NavigationButton title={"experience"} href="/experience" />
              <NavigationButton title={"projects"} href="/projects" />
            </ul>
            <div className="flex items-center gap-4 border-t border-surface-stroke px-gutter py-4">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
