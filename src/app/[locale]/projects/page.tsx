import ProjectTile, { Project } from "@/components/widgets/Tiles/ProjectTile";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function Projects({
  params
}: {
    params: Promise<{ locale: string }>;
  }){
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("Projects");

  const projects: Project[] = [{
    title: "GamesFinder",
    description: t("GamesFinder.description"),
    imgLink: "/gamesFinder/proj_preview.png",
    pageLink: "projects/gamesFinder"
  },
  {
    title: "MediaDownloader",
    description: t("MediaDownloader.description"),
    imgLink: "/mediaDownloader/proj_preview.png",
    pageLink: "projects/mediaDownloader"
  }
  ];

  return (
    <main className="flex-grow pt-[140px] pb-section-gap px-gutter max-w-container-max mx-auto w-full">
      <section className="mb-section-gap max-w-3xl">
        <h1 className="gradient-text-inverse font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-stack-md text-on-surface">
          {t("header")}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant">
          {t("description")}
        </p>
      </section>
      <section className="flex flex-col gap-stack-lg">
        {projects.map((proj: Project, key: number) => {return (<ProjectTile key={key} proj={proj} />);})}
      </section>
    </main>
  );
}