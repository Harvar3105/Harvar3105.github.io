import Mail from "@/assets/svg/Mail";
import Location from "@/assets/svg/Location";
import EmailSender from "@/components/widgets/Tiles/EmailSender";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";
import Open from "@/assets/svg/Open";
import Github from "@/assets/svg/Github";
import Description from "@/assets/svg/Description";
import Download from "@/assets/svg/Download";

export default function Contact({
  params
}: {
    params: Promise<{ locale: string }>;
  }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("Contact");

  return (
    <main className="flex-grow pt-32 pb-section-gap px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
      <div className="mb-section-gap max-w-3xl">
        <h1 className="font-headline-lg-mobile md:font-display-xl md:text-display-xl text-on-surface mb-stack-md">
          {t("header")}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {t("description")}
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 bg-surface-container border border-surface-stroke p-8 rounded-xl relative overflow-hidden">
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary-container rounded-full opacity-5 blur-3xl pointer-events-none" />
          <h2 className="font-headline-md text-headline-md text-on-surface mb-stack-lg relative z-10">
            {t("mail_header")}
          </h2>
          <EmailSender />
        </div>
        <div className="lg:col-span-5 flex flex-col space-y-8">
          <div className="bg-surface-container border border-surface-stroke p-8 rounded-xl">
            <h3 className="font-headline-md text-headline-md text-on-surface mb-stack-md">
              {t("direct_header")}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group cursor-pointer pb-4 border-b border-surface-stroke">
                <span className="material-symbols-outlined text-primary-container">
                  <Mail height="35px" width="35px"/>
                </span>
                <span className="font-body-md text-body-md">
                  email address . dev?
                </span>
                <Open />
              </li>
              <li className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group cursor-pointer pb-4 border-b border-surface-stroke">
                <span className="material-symbols-outlined text-primary-container">
                  <Location height="35px" width="35px" />
                </span>
                <span className="font-body-md text-body-md">
                  {t("addr")}
                </span>
              </li>
              <li className="flex items-center gap-4 text-on-surface-variant hover:text-primary transition-colors group cursor-pointer">
                <span className="material-symbols-outlined text-primary-container">
                  <Github height="35px" width="35px" />
                </span>
                <span className="font-body-md text-body-md">
                  My github name
                </span>
              </li>
            </ul>
          </div>
          <div className="bg-surface-container border border-primary-container/30 p-8 rounded-xl relative overflow-hidden group hover:border-primary-container transition-colors duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/5 to-transparent z-0" />
            <div className="relative z-10 flex flex-col items-start h-full justify-between">
              <div>
                <span className="material-symbols-outlined text-primary-container mb-2 text-4xl">
                  <Description height="35px" width="35px" />
                </span>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                  {t("cv_header")}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                  {t("cv_prom")}
                </p>
              </div>
              <a
                className="inline-flex items-center justify-center gap-2 border border-surface-stroke bg-transparent text-on-surface hover:bg-surface-container-high transition-colors font-label-mono text-label-mono px-6 py-3 rounded-DEFAULT w-full group-hover:border-primary-container"
                href="#"
              >
                <span className="material-symbols-outlined">
                  <Download height="35px" width="35px" />
                </span>
                {t("download")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}