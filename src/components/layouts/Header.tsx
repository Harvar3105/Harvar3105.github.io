"use client";

import {useTranslations} from 'next-intl';
import LanguageSwitcher from '../widgets/LanguageSwitcher';
import ThemeSwitcher from '../widgets/ThemeSwitcher';
import { useState } from "react";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { Link } from '@/i18n/navigation';

export default function Header() {
    const navButtonsStyle = "inline-flex items-center justify-center text-sm font-medium hover:text-[var(--hover-text)] hover:bg-[var(--hover-background)] py-3 px-5 border-b-2 hover:border-b-[var(--accent-color)] border-transparent";

    const t = useTranslations('Navigation');

    const scrollDirection = useScrollDirection();
    const [isHovered, setIsHovered] = useState(false);

    const isHidden = scrollDirection === "down" && !isHovered;

    return (
        <header
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b border-[var(--border)] px-5 bg-[var(--background)] ${
                isHidden ? "h-10" : "h-16"
            }`}
        >
            <div className="relative w-full h-full">
                <nav className={`absolute inset-0 flex items-center justify-between transition-opacity duration-[750ms] ${
                            isHidden ? 'opacity-0 pointer-events-none' : 'opacity-100'
                        }`}>
                    <ThemeSwitcher />
                    <ul className="flex justify-center">
                    <li>
                        <Link href="/" className={navButtonsStyle}>
                            {t('home')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/about" className={navButtonsStyle}>
                            {t('about')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects" className={navButtonsStyle}>
                            {t('projects')}
                        </Link>
                    </li>
                    <li>
                        <Link href="/contacts" className={navButtonsStyle}>
                            {t('contact')}
                        </Link>
                    </li>
                    </ul>
                    <LanguageSwitcher/>
                </nav>
                <div
                    className={`absolute inset-x-0 bottom-[-8px] flex justify-center transition-opacity duration-[750ms] ${
                        isHidden ? 'opacity-100' : 'opacity-0 pointer-events-none'
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
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    );
}