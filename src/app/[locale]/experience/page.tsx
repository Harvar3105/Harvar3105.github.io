import Build from "@/assets/svg/Build";
import Dns from "@/assets/svg/Dns";
import School from "@/assets/svg/School";
import Terminal from "@/assets/svg/Terminal";
import Web from "@/assets/svg/Web";
import Work from "@/assets/svg/Work";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import React from "react";
import { use } from "react";

export default function Experience({
  params
}: {
    params: Promise<{ locale: string }>;
  }) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("Experience");

  type SkillCard = {
    title: string;
    icon: React.JSX.Element;
    skills: string[];
  };
  return (
    <main className="pt-[140px] pb-section-gap px-gutter max-w-container-max mx-auto relative">
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary opacity-10 blur-[100px] -z-10" />
      <section className="mb-section-gap fade-in-up">
        <h1 className="gradient-text-inverse font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg mb-stack-md text-on-surface">
          {t("header")}
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
          {t("description")}
        </p>
      </section>
      <section className="mb-section-gap">
        <div className="flex items-center gap-4 mb-stack-lg">
          <span className="material-symbols-outlined text-primary fill">
            <Terminal height="2em" width="2em" />
          </span>
          <h2 className="font-headline-md text-headline-md">
            {t("Skills.section_name")}
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{ title: t("Skills.front"), icon: <Web height="2em" width="2em" />, skills: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Framer Motion"] },
            { title: t("Skills.back"), icon: <Dns height="2em" width="2em" />, skills: ["Node.js", "Python", "PostgreSQL", "Redis", "GraphQL"] },
            { title: t("Skills.infra"), icon: <Build height="2em" width="2em" />, skills: ["Docker", "Git", "AWS", "CI/CD", "Figma"] }]
            .map((card: SkillCard, pos: number) => {
              return React.createElement(
                'div',
                { key: pos, className: 'bg-[#1A1A1A] border border-surface-stroke rounded-xl p-8 hover:border-[#8B5CF6] transition-colors duration-300 group' },
                React.createElement(
                  'div',
                  { className: 'flex justify-between items-center mb-6' },
                  React.createElement(
                    'h3',
                    { className: 'font-body-lg text-body-lg font-semibold text-on-surface group-hover:text-primary transition-colors' },
                    card.title
                  ),
                  React.createElement(
                    'span',
                    { className: 'material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors' },
                    card.icon
                  )
                ),
                React.createElement(
                  'div',
                  { className: 'flex flex-wrap gap-3' },
                  card.skills.map((skill: string) => {
                    return React.createElement(
                      'span',
                      { key: skill, className: 'bg-surface-container border border-surface-stroke rounded-full px-4 py-1.5 font-label-mono text-label-mono text-on-surface-variant' },
                      skill
                    );
                  })
                )
              );
            })
          }
        </div>
      </section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <section>
          <div className="flex items-center gap-4 mb-stack-lg">
            <span className="material-symbols-outlined text-primary">
              <School height="2em" width="2em" />
            </span>
            <h2 className="font-headline-md text-headline-md">
              {t("Edu.section_name")}
            </h2>
          </div>
          <div className="relative pl-8 border-l border-surface-stroke py-2">
            <div className="absolute w-3 h-3 bg-[#8B5CF6] rounded-full -left-[6.5px] top-4 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
            <div className="mb-2">
              <span className="font-label-mono text-label-mono text-primary">
                {t("Edu.date")}
              </span>
            </div>
            <h3 className="font-body-lg text-body-lg font-semibold text-on-surface mb-1">
              {t("Edu.degree")}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              {t("Edu.uni")}
            </p>
            <p className="font-body-md text-body-md text-text-muted leading-relaxed">
              {t("Edu.description")}
            </p>
          </div>
        </section>
        <section>
          <div className="flex items-center gap-4 mb-stack-lg">
            <span className="material-symbols-outlined text-primary">
              <Work height="2em" width="2em" />
            </span>
            <h2 className="font-headline-md text-headline-md">
              {t("Exp.section_name")}
            </h2>
          </div>
          <div className="relative pl-8 border-l border-surface-stroke py-2">
            <div className="absolute w-3 h-3 bg-[#8B5CF6] rounded-full -left-[6.5px] top-4 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
            <div className="mb-2">
              <span className="font-label-mono text-label-mono text-primary">
                {t("Exp.date")}
              </span>
            </div>
            <h3 className="font-body-lg text-body-lg font-semibold text-on-surface mb-1">
              {t("Exp.role")}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4">
              {t("Exp.company")}
            </p>
            <ul className="list-disc font-body-md text-body-md text-text-muted leading-relaxed">
              <li>
                <p>{t("Exp.t1")}</p>
              </li>
              <li>
                <p>{t("Exp.t2")}</p>
              </li>
              <li>
                <p>{t("Exp.t3")}</p>
              </li>
              <li>
                <p>{t("Exp.t4")}</p>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}