"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function LogoButton() {
  const t = useTranslations("Navigation");
  return (
    <Link href="/" className="block min-w-0 truncate font-headline-md text-headline-md font-bold text-on-surface tracking-tight">
      <h1>
        {t("logo")}
      </h1>
    </Link>
  );
}