import { useTranslations } from "next-intl";
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";

export default function Footer() {
  const t = useTranslations("Footer");

  const email = process.env.EMAIL;
  const linkedInUrl = process.env.LINKEDIN_URL;
  const githubUrl = process.env.GH_URL;
  const iconsStyle =
    "text-[var(--grey-icons)] hover:text-[var(--accent-color)] text-2xl md:text-3xl";

  return (
    <footer className="w-full py-6 md:text-base sm:text-sm text-center border-t border-gray-300 dark:border-gray-700 backdrop-blur px-3">
      <div className="flex justify-center gap-4 mb-2">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={iconsStyle}
        >
          <FaGithub />
        </a>

        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={iconsStyle}
        >
          <FaLinkedin />
        </a>

        <a
          href={`mailto:${email}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className={iconsStyle}
        >
          <FaMailBulk />
        </a>
      </div>
      <p className="text-gray-500">{t("authorship")}</p>
      <p className="text-gray-500">
        {t("icons_and_illustrations") + " "}
        <a href="http://www.freepik.com">Designed by Freepik</a>
      </p>
    </footer>
  );
}
