"use client";

import { useLocale } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const currentLocale = useLocale();
  const pathname = usePathname().replace('/' + currentLocale, "");

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        type="button"
        className="inline-flex justify-center items-center w-10 h-10 rounded-full bg-[var(--accent-color)] shadow-sm"
      >
        <span className="font-bold text-black">{currentLocale.toUpperCase()}</span>
      </button>

      <div
        className="absolute right-0 mt-2 w-28 origin-top-right rounded-md bg-[var(--accent-color)] shadow-lg z-50"
      >
        {isOpen && (
          <div className="py-1">
            <Link
              href={"/en" + pathname}
              onClick={() => setIsOpen(false)}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#43454d]"
            >
          EN English
            </Link>

            <Link
              href={"/ru" + pathname}
              onClick={() => setIsOpen(false)}
              className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-[#43454d]"
            >
          RU Русский
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}