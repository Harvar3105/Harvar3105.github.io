"use client";

import { useLocale } from "next-intl";
import Image from "next/image";
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
    <div className="flex items-center border-l border-surface-stroke pl-4">
      <div ref={dropdownRef} className="relative">
        <button
          type="button"
          onClick={toggleDropdown}
          className="w-8 h-8 overflow-hidden rounded-full border border-surface-stroke"
        >
          <Image
            src={
              currentLocale === "en"
                ? "https://flagcdn.com/gb.svg"
                : "https://flagcdn.com/ru.svg"
            }
            alt={currentLocale === "en" ? "English" : "Russian"}
            width={32}
            height={32}
            className="w-full h-full object-cover"
          />
        </button>

        {isOpen && (
          <div className="absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2">
            <div className="flex gap-2">
              <Link
                href={"/en" + pathname}
                onClick={() => setIsOpen(false)}
                className="block w-8 h-8 overflow-hidden rounded-full border border-surface-stroke"
              >
                <Image
                  src="https://flagcdn.com/gb.svg"
                  alt="English"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </Link>

              <Link
                href={"/ru" + pathname}
                onClick={() => setIsOpen(false)}
                className="block w-8 h-8 overflow-hidden rounded-full border border-surface-stroke"
              >
                <Image
                  src="https://flagcdn.com/ru.svg"
                  alt="Russian"
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}