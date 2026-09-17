import ArrowLeftAnimated from "@/assets/svg/ArrowLeftAnimated";
import ArrowsDiff from "@/assets/svg/ArrowsDif";
import Bug from "@/assets/svg/Bug";
import Code from "@/assets/svg/Code";
import Console from "@/assets/svg/Console";
import Desktop from "@/assets/svg/Desktop";
import Eye from "@/assets/svg/Eye";
import FileSystemTree from "@/assets/svg/FileSystemTree";
import Gears from "@/assets/svg/Gears";
import Rocket from "@/assets/svg/Rocket";
import Star from "@/assets/svg/Star";
import Terminal from "@/assets/svg/Terminal";
import Verify from "@/assets/svg/Verify";
import Video from "@/assets/svg/Video";
import Web from "@/assets/svg/Web";
import { useMedeiaDownloaderProject } from "@/data/projectsData";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { use } from "react";

export default function MediaDownloaderPage({
  params
}: {
    params: Promise<{ locale: string }>;
  }){
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("MediaDownloader");
  const project = useMedeiaDownloaderProject();

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
                href="https://github.com/Harvar3105/MediaDownloader"
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
          <section className="flex flex-col gap-stack-lg">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary font-label-mono text-label-mono uppercase tracking-wider">
                <span className="material-symbols-outlined w-5 h-5">
                  <Eye width="inherit" height="inherit"/>
                </span>
                <span>{t("Workflow.type")}</span>
              </div>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">
                {t("Workflow.title")}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
              <div className="group flex flex-col rounded-xl bg-surface-container-low border border-surface-stroke overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,188,255,0.08)]">
                <div className="flex items-center justify-between px-4 py-3 bg-surface-container-lowest border-b border-surface-stroke">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                  </div>
                  <span className="font-label-mono text-label-mono text-text-muted text-[12px]">{t("Workflow.Step1.type")}</span>
                  <span className="text-text-muted w-7 h-7">
                    <Terminal width="inherit" height="inherit" />
                  </span>
                </div>

                <div className="relative bg-surface-container-lowest flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                  <Image
                    className="rounded-lg w-full object-cover max-h-[360px] shadow-lg group-hover:scale-[1.01] transition-transform duration-500"
                    alt="High precision dark UI screenshot of a desktop media downloader showing an input view"
                    width={100}
                    height={100}
                    src="/mediaDownloader/overview1.png"
                  />
                </div>

                <div className="p-stack-md flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-headline-md text-on-surface">{t("Workflow.Step1.title")}</h3>
                    <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-primary font-label-mono text-label-mono">{t("Workflow.Step1.phase")}</span>
                  </div>
                  <p className="font-body-md text-body-md text-text-muted">
                    {t("Workflow.Step1.description")}
                  </p>
                </div>
              </div>

              <div className="group flex flex-col rounded-xl bg-surface-container-low border border-surface-stroke overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(208,188,255,0.08)]">
                <div className="flex items-center justify-between px-4 py-3 bg-surface-container-lowest border-b border-surface-stroke">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                    <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                  </div>
                  <span className="font-label-mono text-label-mono text-text-muted text-[12px]">{t("Workflow.Step2.type")}</span>
                  <span className="text-text-muted w-7 h-7">
                    <Video width="inherit" height="inherit" />
                  </span>
                </div>

                <div className="relative bg-surface-container-lowest flex items-center justify-center p-4 sm:p-6 overflow-hidden">
                  <Image
                    className="rounded-lg w-full object-cover max-h-[360px] shadow-lg group-hover:scale-[1.01] transition-transform duration-500"
                    alt="Technical application screen featuring a detailed vertical list of video stream formats"
                    width={100}
                    height={100}
                    src="/mediaDownloader/overview2.png"
                  />
                </div>

                <div className="p-stack-md flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-md text-headline-md text-on-surface">{t("Workflow.Step2.title")}</h3>
                    <span className="px-2.5 py-0.5 rounded bg-surface-container-high text-primary font-label-mono text-label-mono">{t("Workflow.Step2.phase")}</span>
                  </div>
                  <p className="font-body-md text-body-md text-text-muted">
                    {t("Workflow.Step2.description")}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col gap-stack-lg">
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 text-primary font-label-mono text-label-mono uppercase tracking-wider">
                <span className="material-symbols-outlined w-6 h-6">
                  <FileSystemTree width="inherit" height="inherit" />
                </span>
                <span>{t("Architecture.type")}</span>
              </div>
              <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface">
                {t("Architecture.title")}
              </h2>
              <p className="font-body-md text-body-md text-text-muted max-w-2xl">
                {t("Architecture.description")}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-md relative">
              <div className="flex flex-col justify-between p-stack-md rounded-xl bg-surface-container-low border border-surface-stroke">
                <div className="flex flex-col gap-stack-sm">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined w-10 h-10">
                        <Web width="inherit" height="inherit" className="p-1.5"/>
                      </span>
                    </span>
                    <span className="font-label-mono text-label-mono text-primary uppercase">{t("Architecture.Layer1.level")}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{t("Architecture.Layer1.title")}</h3>
                  <div className="flex flex-wrap gap-1.5 py-1">
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[12px] text-secondary">React 18</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[12px] text-secondary">TypeScript</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[12px] text-secondary">Tailwind</span>
                  </div>
                  <p className="font-body-md text-body-md text-text-muted">
                    {t("Architecture.Layer1.description")}
                  </p>
                </div>
                <div className="mt-stack-md pt-stack-sm border-t border-surface-stroke flex items-center gap-2 font-label-mono text-[12px] text-text-muted">
                  <span className="material-symbols-outlined w-5 h-5 text-primary">
                    <ArrowsDiff width="inherit" height="inherit" />
                  </span>
                  <span>{t("Architecture.Layer1.type")}</span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-stack-md rounded-xl bg-surface-container-low border border-surface-stroke">
                <div className="flex flex-col gap-stack-sm">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined w-10 h-10">
                        <Gears width="inherit" height="inherit" className="p-1.5"/>
                      </span>
                    </span>
                    <span className="font-label-mono text-label-mono text-primary uppercase">{t("Architecture.Layer2.level")}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{t("Architecture.Layer2.title")}</h3>
                  <div className="flex flex-wrap gap-1.5 py-1">
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[12px] text-secondary">C# 12</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[12px] text-secondary">Process Monitor</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[12px] text-secondary">Async Streams</span>
                  </div>
                  <p className="font-body-md text-body-md text-text-muted">
                    {t("Architecture.Layer2.description")}
                  </p>
                </div>
                <div className="mt-stack-md pt-stack-sm border-t border-surface-stroke flex items-center gap-2 font-label-mono text-[12px] text-text-muted">
                  <span className="material-symbols-outlined w-5 h-5 text-primary">
                    <Console width="inherit" height="inherit" />
                  </span>
                  <span>{t("Architecture.Layer2.type")}</span>
                </div>
              </div>

              <div className="flex flex-col justify-between p-stack-md rounded-xl bg-surface-container-low border border-surface-stroke">
                <div className="flex flex-col gap-stack-sm">
                  <div className="flex items-center justify-between">
                    <span className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined w-10 h-10">
                        <Desktop width="inherit" height="inherit" className="p-1.5"/>
                      </span>
                    </span>
                    <span className="font-label-mono text-label-mono text-primary uppercase">{t("Architecture.Layer3.level")}</span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">{t("Architecture.Layer3.title")}</h3>
                  <div className="flex flex-wrap gap-1.5 py-1">
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[12px] text-secondary">WPF</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[12px] text-secondary">WebView2</span>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-mono text-[12px] text-secondary">Zero-Install</span>
                  </div>
                  <p className="font-body-md text-body-md text-text-muted">
                    {t("Architecture.Layer3.description")}
                  </p>
                </div>
                <div className="mt-stack-md pt-stack-sm border-t border-surface-stroke flex items-center gap-2 font-label-mono text-[12px] text-text-muted">
                  <span className="material-symbols-outlined w-5 h-5 text-primary">
                    <Verify width="inherit" height="inherit" />
                  </span>
                  <span>{t("Architecture.Layer3.type")}</span>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-surface-container border border-surface-stroke p-stack-md flex flex-col md:flex-row items-start md:items-center justify-between gap-stack-md">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-container-highest flex items-center justify-center text-primary flex-shrink-0">
                  <span className="material-symbols-outlined w-14 h-14">
                    <Rocket width="inherit" height="inherit" className="p-1.5"/>
                  </span>
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <span className="font-headline-md text-headline-md text-on-surface">{t("Core.title")}</span>
                    <span className="px-2 py-0.5 rounded bg-primary-container text-on-primary-container font-label-mono text-[12px]">{t("Core.version")}</span>
                  </div>
                  <p className="font-body-md text-body-md text-text-muted">
                    {t("Core.description")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-label-mono text-label-mono text-secondary">{t("Core.mark")}</span>
              </div>
            </div>
          </section>
          <section className="rounded-xl bg-surface-container border border-surface-stroke p-stack-lg flex flex-col md:flex-row items-center justify-between gap-stack-md">
            <div className="flex flex-col gap-1">
              <h3 className="font-headline-md text-headline-md text-on-surface">{t("Codebase.title")}</h3>
              <p className="font-body-md text-body-md text-text-muted">{t("Codebase.description")}</p>
            </div>
            <div className="flex items-center gap-stack-sm flex-wrap">
              <a
                href="https://github.com/Harvar3105/MediaDownloader"
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
                href="https://github.com/Harvar3105/MediaDownloader/issues"
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