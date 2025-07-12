import Fireflies from "@/components/animations/fireflies";
import FileDownloader from "@/components/widgets/FileDownloader";
import PdfViewer from "@/components/widgets/PdfViewer";
import { setRequestLocale } from "next-intl/server";
import { use } from "react";

export default function CV({params}: {params: Promise<{locale: string}>;}){
    const {locale} = use(params);
    setRequestLocale(locale);

    return(
        <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <PdfViewer url="/pdf/CV.pdf" />
            <FileDownloader url="/pdf/CV.pdf" filename="Juri_Petrotsenko_CV" label="Download CV" />
            <Fireflies count={50} />
        </div>
    );
}