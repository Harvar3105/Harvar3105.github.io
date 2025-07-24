"use client";

import { useTranslations } from "next-intl";
import LanguageSwitcher from "../widgets/LanguageSwitcher";
import ThemeSwitcher from "../widgets/ThemeSwitcher";
import { useEffect, useRef, useState } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Link } from "@/i18n/navigation";
import FirefliesSetter from "../widgets/FirefliesSetter";

export default function Header() {
  const navButtonsStyle =
    "inline-flex items-center justify-center text-lg font-medium hover:text-[var(--hover-text)] hover:bg-[var(--hover-background)] py-3 lg:px-5 md:px-3 border-b-2 hover:border-b-[var(--accent-color)] border-transparent";
  const navMobileButtonsStyle =
    "inline-flex items-center justify-center text-base font-medium w-full text-center py-3 border-b-1 border-b-[var(--accent-color)]";

  const t = useTranslations("Navigation");
  const scrollDirection = useScrollDirection();
  const [isHovered, setIsHovered] = useState(false);

  const isHidden = scrollDirection === "down" && !isHovered;

  const [menuOpen, setMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-[var(--border)] px-5 backdrop-blur bg-black/30 ${
        isHidden ? "h-10" : "h-16"
      }`}
    >
      {/* Desktop and tablet navigation */}
      <div className="relative w-full h-full">
        <nav
          className={` hidden md:flex absolute inset-0 items-center justify-between transition-opacity duration-[750ms] ${isHidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div className="flex items-center ml-5 lg:space-x-10 md:space-x-5 z-50">
            <ThemeSwitcher />
            <FirefliesSetter />
          </div>
          <ul className="hidden md:flex  absolute left-1/2 transform -translate-x-[50%] lg:space-x-6 md:space-x-0 z-50">
            <li>
              <Link href="/" className={navButtonsStyle}>
                {t("home")}
              </Link>
            </li>
            <li>
              <Link href="/skills" className={navButtonsStyle}>
                {t("about")}
              </Link>
            </li>
            <li>
              <Link href="/projects" className={navButtonsStyle}>
                {t("projects")}
              </Link>
            </li>
            <li>
              <Link href="/contacts" className={navButtonsStyle}>
                {t("contact")}
              </Link>
            </li>
            <li>
              <Link href="/cv" className={navButtonsStyle}>
                {t("cv")}
              </Link>
            </li>
          </ul>
          <div className="mr-5 z-50">
            <LanguageSwitcher />
          </div>
        </nav>

        <nav
          className={` flex md:hidden absolute inset-0 items-center justify-between transition-opacity duration-[750ms] ${isHidden ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div className="flex items-center space-x-5 z-50">
            <ThemeSwitcher />
            <FirefliesSetter />
            <LanguageSwitcher />
          </div>
          <button
            ref={menuButtonRef}
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded focus:outline-none text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
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
            <ul
              ref={dropdownRef}
              className="absolute top-16 left-0 w-full flex flex-col bg-black/90 md:hidden z-50 backdrop-blur"
            >
              <li>
                <Link href="/" className={`${navMobileButtonsStyle}`}>
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/skills" className={`${navMobileButtonsStyle}`}>
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link href="/projects" className={`${navMobileButtonsStyle}`}>
                  {t("projects")}
                </Link>
              </li>
              <li>
                <Link href="/contacts" className={`${navMobileButtonsStyle}`}>
                  {t("contact")}
                </Link>
              </li>
              <li>
                <Link href="/cv" className={`${navMobileButtonsStyle}`}>
                  {t("cv")}
                </Link>
              </li>
            </ul>
          )}
        </nav>

        <div
          className={`absolute inset-x-0 bottom-[-8px] flex justify-center transition-opacity duration-[750ms] ${
            isHidden ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="animate-soft-pulse bg-[var(--accent-color)] text-dark w-10 h-6 rounded-b-full flex items-center justify-center shadow-md translate-y-4.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              strokeWidth="5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
}
