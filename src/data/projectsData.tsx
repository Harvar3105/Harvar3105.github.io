import { useTranslations } from "next-intl";

export type Project = {
  title: string,
  description: string;
  imgLink: string;
  pageLink: string;
  tags: string[];
};

export function useGamesFinderProject(): Project {
  const t = useTranslations("Projects");

  return {
    title: "GamesFinder",
    description: t("GamesFinder.description"),
    imgLink: "/gamesFinder/proj_preview.png",
    pageLink: "projects/gamesFinder",
    tags: ["WIP"]
  };
}

export function useMedeiaDownloaderProject(): Project {
  const t = useTranslations("Projects");

  return {
    title: "MediaDownloader",
    description: t("MediaDownloader.description"),
    imgLink: "/mediaDownloader/proj_preview.png",
    pageLink: "projects/mediaDownloader",
    tags: [".NET", "WPF", "WebView", "React", "yt-dlp", "Tailwind CSS", "TypeScript"]
  };
}