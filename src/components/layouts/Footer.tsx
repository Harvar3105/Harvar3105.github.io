import GitHubAnimated from "@/assets/svg/GithubAnimated";
import LinkedInAnimated from "@/assets/svg/LinkedInAnimated";
import MailToAnimated from "@/assets/svg/MailToAnimated";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");

  const email = process.env.EMAIL;
  const linkedInUrl = process.env.LINKEDIN_URL;
  const githubUrl = process.env.GH_URL;

  return (
    <footer className="w-full py-stack-lg bg-background border-t border-surface-stroke mt-auto">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-container-max mx-auto gap-6">
        <div className="font-body-md text-body-md text-text-muted text-center md:text-left">
          {t("authorship")}
        </div>
        <div className="flex gap-6">
          <a
            className="font-label-mono text-2xl md:text-3xl text-label-mono text-text-muted hover:text-primary-container transition-colors duration-200 opacity-80 hover:opacity-100"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubAnimated />
          </a>
          <a
            className="font-label-mono text-2xl md:text-3xl text-label-mono text-text-muted hover:text-primary-container transition-colors duration-200 opacity-80 hover:opacity-100"
            href={linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInAnimated />
          </a>
          <a
            className="font-label-mono text-2xl md:text-3xl text-label-mono text-text-muted hover:text-primary-container transition-colors duration-200 opacity-80 hover:opacity-100"
            href={`mailto:${email}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <MailToAnimated />
          </a>
        </div>
      </div>

    </footer>
  );
}
