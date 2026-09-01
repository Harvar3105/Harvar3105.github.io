import { use } from "react";
import { setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import Open from "@/assets/svg/Open";
// import { useTranslations } from "next-intl";

export default function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("Home");

  return (
    <main className="relative flex-grow pt-32 pb-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full flex flex-col gap-section-gap max-md:overflow-x-clip">
      <div className="ambient-glow"></div>
      <section className="relative min-h-[614px] flex flex-col justify-center items-start pt-12 md:pt-0" id="hero">
        <div className="max-w-3xl flex flex-col gap-stack-md">
          <p className="font-label-mono text-label-mono text-primary-container mb-2 uppercase tracking-widest">
            {t("welcome")}
          </p>
          <h1 className="font-headline-lg-mobile text-headline-lg-mobile md:font-display-xl md:text-display-xl text-on-surface gradient-text">
            {t("name")}
          </h1>
          <h2 className="font-headline-md text-headline-md text-on-surface-variant max-w-2xl mt-4">
            {t("whoami")}
          </h2>
          <div className="flex flex-wrap gap-4 mt-8">
            <button className="font-bold btn-primary px-8 py-3 rounded font-label-mono text-label-mono flex items-center gap-2">
              {t("Buttons.contact_me")}
            </button>
            <a className="btn-secondary px-8 py-3 rounded font-label-mono text-label-mono flex items-center gap-2">
              {t("Buttons.to_github")} <Open />
            </a>
            <a className="btn-secondary px-8 py-3 rounded font-label-mono text-label-mono flex items-center gap-2">
              {t("Buttons.linkedIn")} <Open />
            </a>
          </div>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[40%] opacity-40 hidden lg:block pointer-events-none">
          <svg className="w-full h-auto drop-shadow-[0_0_15px_rgba(139,92,246,0.3)]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path d="M 0,100 L 200,100 M 100,0 L 100,200" fill="none" stroke="#8B5CF6" strokeDasharray="4 4" strokeWidth="1.5"/>
            <circle cx="100" cy="100" fill="none" r="80" stroke="#8B5CF6" strokeWidth="1" opacity="0.6"/>
            <circle cx="100" cy="100" fill="none" r="40" stroke="#4f319c" strokeWidth="1" opacity="0.8"/>
            <circle cx="100" cy="100" fill="none" r="2" stroke="#8B5CF6" opacity="0.8"/>
          </svg>
        </div>
      </section>
      <section className="flex flex-col md:flex-row gap-12 items-start" id="about">
        <div className="md:w-1/3">
          <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface border-l-4 border-primary pl-4">
            {t("about_me_header")}
          </h2>
        </div>
        <div className="md:w-2/3 flex flex-col gap-6 font-body-lg text-body-lg text-on-surface-variant">
          <p>
            {t("about_me")}
          </p>
          <p>
            {t("eager")}
          </p>
          <div className="glass-card p-6 rounded-lg mt-4 border-l-2 border-l-primary">
            <p className="font-body-md text-body-md text-on-surface">
              {t("passion")}
            </p>
          </div>
        </div>
      </section>
      <section className="glass-card rounded-2xl p-12 text-center flex flex-col items-center gap-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary opacity-5 pointer-events-none" />
        <h2 className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-on-surface">
          {t("lets_build")}
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {t("looking_for")}
        </p>
      </section>
    </main>
  );
}
