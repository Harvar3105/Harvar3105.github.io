import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function MediaDownloaderPage({
  params
}: {
    params: Promise<{ locale: string }>;
  }){
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("WIP");

  return (
    <main className="flex-grow pt-[140px] pb-section-gap px-gutter max-w-container-max mx-auto w-full">
      <section>
        <h1 className="gradient-text-inverse font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-stack-md text-on-surface">
          {t("header")}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {t("description")}
        </p>
      </section>
    </main>
  );
}