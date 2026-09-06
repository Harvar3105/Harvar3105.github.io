import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export type Project = {
    title: string,
    description: string;
    imgLink: string;
    pageLink: string;
  };

export default function ProjectTile({
  proj
}: {proj: Project}){
  const t = useTranslations("Projects");

  return (
    <div className="group bg-surface-container border border-surface-stroke rounded-xl overflow-hidden transition-colors duration-300 hover:border-primary flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-64 md:h-auto border-b md:border-b-0 md:border-r border-surface-stroke overflow-hidden">
        <Image
          className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
          src={proj.imgLink}
          width={100}
          height={100}
          alt={proj.title}
        />
      </div>
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <h2 className="font-headline-lg text-headline-md md:text-headline-lg text-on-surface mb-stack-md">
          {proj.title}
        </h2>
        <p className="font-body-md text-body-md text-on-surface-variant mb-stack-lg">
          {proj.description}
        </p>
        <div>
          <Link
            className="px-6 py-2 border border-primary text-primary rounded-full font-label-mono text-label-mono hover:bg-primary hover:text-on-primary transition-all"
            href={proj.pageLink}
          >
            {t("open_proj")}
          </Link>
        </div>
      </div>
    </div>
  );
}