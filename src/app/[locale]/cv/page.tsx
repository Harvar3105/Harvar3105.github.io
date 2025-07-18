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

    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            {/* TODO: if RU, show RU CV. Create RU CV */}
            <PdfViewer url="/pdf/CV.pdf" />
            <FileDownloader url="/pdf/CV.pdf" filename="Juri_Petrotsenko_CV" label={t("download")} />
            <Fireflies count={50} />
        </div>
    );
}