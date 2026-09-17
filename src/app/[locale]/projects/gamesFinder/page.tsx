import ArrowLeftAnimated from "@/assets/svg/ArrowLeftAnimated";
import Bug from "@/assets/svg/Bug";
import Code from "@/assets/svg/Code";
import Database from "@/assets/svg/Database";
import FileSystemTree from "@/assets/svg/FileSystemTree";
import Star from "@/assets/svg/Star";
import Verify from "@/assets/svg/Verify";
import { useGamesFinderProject } from "@/data/projectsData";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { use } from "react";

export default function GamesFinderPage({
  params
}: {
    params: Promise<{ locale: string }>;
  }){
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("GamesFinder");
  const project = useGamesFinderProject();

  return (
    <main className="flex-grow pt-20 pb-section-gap px-gutter max-w-container-max mx-auto w-full">
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-primary-container/15 rounded-full blur-[120px] pointer-events-none -z-10" />
        <div className="max-w-container-max mx-auto px-gutter py-stack-lg flex flex-col gap-section-gap">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-stack-md">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors group"
            >
              <span className="group-hover:-translate-x-1 transition-transform w-6 h-6">
                <ArrowLeftAnimated width="inherit" height="inherit" />
              </span>
              <span className="font-label-mono text-label-mono tracking-wider uppercase">{t("Widget.back")}</span>
            </Link>
            <div className="flex flex-wrap items-center gap-stack-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low border border-surface-stroke text-on-surface-variant font-label-mono text-label-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                {t("Widget.description")}
              </span>
              <span className="px-3 py-1 rounded-full bg-surface-container-high text-primary font-label-mono text-label-mono font-medium">
                {t("Widget.version")}
              </span>
            </div>
          </div>
          <section className="flex flex-col gap-stack-lg relative">
            <div className="flex flex-col gap-stack-sm max-w-4xl">
              <span className="font-label-mono text-label-mono uppercase text-primary tracking-widest">
                {t("Hero.type")}
              </span>
              <h1 className="gradient-text-inverse font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-stack-md text-on-surface">
                {project.title}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant">
                {t("Hero.description")}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://github.com/Harvar3105/GamesFinderOrchestrator"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-lg bg-primary-container hover:bg-primary text-on-primary-container hover:text-on-primary font-headline-md text-body-md font-semibold shadow-[0_0_24px_rgba(160,120,255,0.25)] transition-all"
              >
                <span className="material-symbols-outlined w-7 h-7">
                  <Code width="inherit" height="inherit" />
                </span>
                <span>{t("Hero.repo")}</span>
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="font-label-mono text-label-mono text-text-muted mr-2">{t("Hero.stack")}</span>
              {project.tags.map((tech) => (
                <span key={tech} className="px-3 py-1 rounded-lg bg-surface-container-low border border-surface-stroke font-label-mono text-label-mono text-on-surface-variant">
                  {tech}
                </span>
              ))}
            </div>
          </section>
          <section className="flex flex-col gap-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-primary font-label-mono text-xs uppercase tracking-widest font-semibold">
                  <span>{t("Workflow.type")}</span>
                </div>
                <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
                  {t("Workflow.title")}
                </h2>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
                {t("Workflow.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8">
              <div className="flex flex-col rounded-2xl bg-surface-container-low p-6 md:p-8 transition-all hover:shadow-[0_20px_50px_rgba(139,92,246,0.1)] group border border-surface-stroke">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_8px_rgba(208,188,255,0.8)]"></span>
                    <h3 className="font-headline-md text-xl font-bold text-text-primary">
                      {t("Workflow.Step1.title")}
                    </h3>
                  </div>
                </div>
                <div className="relative w-full rounded-xl overflow-hidden bg-surface-container-lowest shadow-2xl border border-surface-stroke">
                  <Image
                    alt="Authentication & Secure Access view"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                    src="/gamesFinder/front.png"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant pt-5">
                  {t("Workflow.Step1.description")}
                </p>
              </div>

              <div className="flex flex-col rounded-2xl bg-surface-container-low p-6 md:p-8 transition-all hover:shadow-[0_20px_50px_rgba(139,92,246,0.1)] group border border-surface-stroke">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-6">
                  <div className="flex items-center gap-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-secondary shadow-[0_0_8px_rgba(206,189,255,0.8)]"></span>
                    <h3 className="font-headline-md text-xl font-bold text-text-primary">
                      {t("Workflow.Step2.title")}
                    </h3>
                  </div>
                </div>
                <div className="relative w-full rounded-xl overflow-hidden bg-surface-container-lowest shadow-2xl border border-surface-stroke">
                  <Image
                    alt="Multi-Source Price Aggregation Matrix view"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                    src="/gamesFinder/proj_preview.png"
                    width={100}
                    height={100}
                  />
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant pt-5">
                  {t("Workflow.Step2.description")}
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-primary font-label-mono text-xs uppercase tracking-widest font-semibold">
                <span>{t("Architecture.type")}</span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
                {t("Architecture.title")}
              </h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl">
                {t("Architecture.description")}
              </p>
            </div>
            <div className="relative rounded-2xl bg-surface-container-low p-6 md:p-10 overflow-hidden shadow-2xl border border-surface-stroke">
              <div className="flex items-center justify-between pb-6">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-[24px]">
                    <FileSystemTree width={30} height={30}/>
                  </span>
                  <span className="font-label-mono text-label-mono font-semibold text-text-primary uppercase tracking-wider">{t("Architecture.Scheme.title")}</span>
                </div>
              </div>
              <div className="w-full rounded-xl bg-surface-container-lowest p-4 md:p-8 flex items-center justify-center border border-surface-stroke">
                <Image
                  alt="GamesFinder System Architecture Scheme"
                  className="w-full max-w-4xl h-auto object-contain rounded-lg filter drop-shadow-xl"
                  src="/gamesFinder/scheme.png"
                  width={100}
                  height={100}
                />
              </div>
              <div className="mt-6 flex flex-wrap items-center justify-between gap-4 pt-4 text-xs font-label-mono text-text-muted">
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-container" /><span>{t("Architecture.Scheme.m1")}</span></div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-container" /><span>{t("Architecture.Scheme.m2")}</span></div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-container" /><span>{t("Architecture.Scheme.m3")}</span></div>
                <div className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-primary-container" /><span>{t("Architecture.Scheme.m4")}</span></div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { num: "01", name: t("Architecture.S1.title"), stack: t("Architecture.S1.type"), desc: t("Architecture.S1.description") },
                { num: "02", name: t("Architecture.S2.title"), stack: t("Architecture.S2.type"), desc: t("Architecture.S2.description") },
                { num: "03", name: t("Architecture.S3.title"), stack: t("Architecture.S3.type"), desc: t("Architecture.S3.description") },
                { num: "04", name: t("Architecture.S4.title"), stack: t("Architecture.S4.type"), desc: t("Architecture.S4.description") },
                { num: "05", name: t("Architecture.S5.title"), stack: t("Architecture.S5.type"), desc: t("Architecture.S5.description") },
                { num: "06", name: t("Architecture.S6.title"), stack: t("Architecture.S6.type"), desc: t("Architecture.S6.description") },
              ].map((s) => (
                <div key={s.num} className="flex flex-col p-6 rounded-2xl bg-surface-container-low border border-surface-stroke transition-all hover:bg-surface-container">
                  <div className="flex items-center justify-between pb-3">
                    <span className="font-label-mono text-xs text-primary font-bold">{t("Architecture.service")} {s.num}</span>
                    <span className="material-symbols-outlined text-text-muted text-[18px]">
                      <Verify width={20} height={20}/>
                    </span>
                  </div>
                  <h3 className="font-headline-md text-lg font-bold text-text-primary pb-1">{s.name}</h3>
                  <span className="font-label-mono text-xs text-secondary pb-3">{s.stack}</span>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{s.desc}</p>
                </div>
              ))}
              <div className="flex flex-col p-6 rounded-2xl bg-surface-container-low border border-surface-stroke md:col-span-2 lg:col-span-3">
                <div className="flex items-center justify-between pb-2">
                  <span className="font-label-mono text-xs text-primary font-bold">{`${t("Architecture.service")} / 07`}</span>
                  <span className="material-symbols-outlined text-primary text-xl">
                    <Database height={20} width={29} />
                  </span>
                </div>
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2">
                  <div>
                    <h3 className="font-headline-md text-lg font-bold text-text-primary">{t("Architecture.S7.title")}</h3>
                    <span className="font-label-mono text-xs text-primary">{t("Architecture.S7.type")}</span>
                  </div>
                  <p className="font-body-md text-sm text-on-surface-variant max-w-2xl leading-relaxed">
                    {t("Architecture.S7.description")}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-primary font-label-mono text-xs uppercase tracking-widest font-semibold">
                <span>{t("Highlights.type")}</span>
              </div>
              <h2 className="font-headline-lg text-2xl md:text-3xl font-bold text-text-primary tracking-tight">
                {t("Highlights.title")}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: t("Highlights.H1.title"), desc: t("Highlights.H1.description"), check: t("Highlights.H1.type") },
                { title: t("Highlights.H2.title"), desc: t("Highlights.H2.description"), check: t("Highlights.H2.type") },
                { title: t("Highlights.H3.title"), desc: t("Highlights.H3.description"), check: t("Highlights.H3.type") },
                { title: t("Highlights.H4.title"), desc: t("Highlights.H4.description"), check: t("Highlights.H4.type") },
              ].map((h, i) => (
                <div key={i} className="p-8 rounded-2xl bg-surface-container-low border border-surface-stroke flex flex-col gap-3">
                  <h3 className="font-headline-md text-xl font-semibold text-text-primary">{h.title}</h3>
                  <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">{h.desc}</p>
                  <div className="pt-2 flex items-center gap-2 font-label-mono text-xs text-primary">
                    <span className="material-symbols-outlined text-[16px]">
                      <Verify width={15} height={15} />
                    </span>
                    <span>{h.check}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
          <section className="rounded-xl bg-surface-container border border-surface-stroke p-stack-lg flex flex-col md:flex-row items-center justify-between gap-stack-md">
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-md text-headline-md text-on-surface">{t("Codebase.title")}</h3>
              <p className="font-body-md text-body-md text-text-muted">{t("Codebase.description")}</p>
            </div>
            <div className="flex items-center gap-stack-sm flex-wrap">
              <a
                href="https://github.com/Harvar3105/GamesFinderOrchestrator"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-headline-md text-body-md font-medium transition-colors border border-surface-stroke"
              >
                <span className="material-symbols-outlined text-[18px]">
                  <Bug width={15} height={15}/>
                </span>
                <span>{t("Codebase.report")}</span>
              </a>
              <a
                href="https://github.com/Harvar3105/GamesFinderOrchestrator/issues"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-headline-md text-body-md font-semibold hover:bg-primary-container hover:text-white transition-all shadow-[0_0_15px_rgba(139,92,246,0.3)]"
              >
                <span className="material-symbols-outlined text-[18px]">
                  <Star width={15} height={15}/>
                </span>
                <span>{t("Codebase.star")}</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}