"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function NavigationButton({
  title,
  href,
}: {
  title: string;
  href: string;
}) {
  const pathname = usePathname();
  const pathWithoutLocale = "/" + pathname.split("/").slice(2).join("/");
  const isActive = pathWithoutLocale === href;

  const t = useTranslations("Navigation");

  return (
    <li key={href}>
      <Link href={href} className={`font-label-mono text-label-mono transition-all duration-200 ${isActive ? "text-primary font-bold border-b-2 border-primary pb-1 scale-95" : "text-on-surface-variant hover:text-primary"}`}>
        <span className="material-symbol-outlined">{t(title.toLocaleLowerCase())}</span>
      </Link>
    </li>
  );
}