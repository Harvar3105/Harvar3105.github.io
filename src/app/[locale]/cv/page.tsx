import Fireflies from "@/components/animations/fireflies";
import FileDownloader from "@/components/widgets/FileDownloader";
import PdfViewer from "@/components/widgets/PdfViewer";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function CV({params}: {params: Promise<{locale: string}>;}){
  const {locale} = use(params);
  setRequestLocale(locale);
  const t = useTranslations('CV');

  let pdfViewer = null;
  try {
    pdfViewer = <PdfViewer url={locale === "en" ? "/pdf/CV.pdf" : "/pdf/CV_Rus.pdf"} />;
  } catch (e) {
    console.error("Failed to render PdfViewer:", e);
    pdfViewer = <p>PDF could not be loaded.</p>;
  }

  return(
    <div className="flex flex-col items-center justify-center min-h-screen md:py-16 py-8 font-[family-name:var(--font-geist-sans)]">
      {pdfViewer}
      <FileDownloader url={locale === "en" ? "/pdf/CV.pdf" : "/pdf/CV_Rus.pdf"} filename="Juri_Petrotsenko_CV" label={t("download")} />
      <Fireflies count={50} />
    </div>
  );
}