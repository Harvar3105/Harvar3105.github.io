import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import Fireflies from '@/components/animations/fireflies';
import StarRating from '@/components/widgets/StarRating';
import { useTranslations } from 'next-intl';

export default function About({params}: {params: Promise<{locale: string}>;}) {
  const {locale} = use(params);
  setRequestLocale(locale);

  const t = useTranslations("Skills");

  const cellStyle = "border border-[var(--border)] md:p-3 p-2";
  const tableTitleStyle = "md:text-2xl text-xl font-bold mb-4 mt-10";
  const tableBg = "bg-[var(--background)] md:w-fit w-full";
  const tableShape = "overflow-hidden rounded-xl border border-[var(--border)]";
  const tableStyle = "table-auto w-full text-left border-collapse";
  const tableHeadStyle = "md:text-xl text-lg bg-[var(--hover-background)] text-[var(--hover-text)]";

  return (
    <div className='items-center justify-items-center min-h-screen px-8 pb-20 font-[family-name:var(--font-geist-sans)]'>

      <h1 className={tableTitleStyle}>{t("Fields.header")}</h1>
      <div className={tableBg}>
        <div className={tableShape}>
          <table className={tableStyle}>
            <thead className={tableHeadStyle}>
              <tr>
                <th className={`${cellStyle} text-center`}>{t("Fields.Head.field")}</th>
                <th className={`${cellStyle} text-center`}>{t("Fields.Head.techs")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cellStyle}>{t("Fields.Body.web")}</td>
                <td className={cellStyle}>React, Vue, AspNetCore, Blazor</td>
                {/* TODO: change all frameworks to icons and logos? */}
              </tr>
              <tr>
                <td className={cellStyle}>{t("Fields.Body.server")}</td>
                <td className={cellStyle}>dotnet Web Api, NodeJS, SpringCore, JakartaServlet</td>
              </tr>
              <tr>
                <td className={cellStyle}>{t("Fields.Body.crosp")}</td>
                <td className={cellStyle}>Flutter</td>
              </tr>
              <tr>
                <td className={cellStyle}>{t("Fields.Body.db")}</td>
                <td className={cellStyle}>MongoDB, PostgreSQL, SQLServer</td>
              </tr>
              <tr>
                <td className={cellStyle}>{t("Fields.Body.other")}</td>
                <td className={cellStyle}>Docker, Github Actions, Gitlab CI/CD, Tailwind, Bootstrap</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h1 className={tableTitleStyle}>{t("Prog_langs.header")}</h1>
      <div className={tableBg}>
        <div className={tableShape}>
          <table className={tableStyle}>
            <thead className={tableHeadStyle}>
              <tr>
                <th className={`${cellStyle} text-center md:px-5`}>{t("Prog_langs.Head.lang")}</th>
                <th className={`${cellStyle} text-center md:px-10`}>{t("Prog_langs.Head.knowledge")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cellStyle}>C#</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                    <StarRating total={5} filled={4} isLtr={true}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={cellStyle}>Java</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                    <StarRating total={5} filled={4} isLtr={true}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={cellStyle}>Python</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                    <StarRating total={5} filled={3} isLtr={true}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={cellStyle}>Kotlin</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                    <StarRating total={5} filled={3} isLtr={true}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={cellStyle}>PHP</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                    <StarRating total={5} filled={2} isLtr={true}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={cellStyle}>JavaScript</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                    <StarRating total={5} filled={3} isLtr={true}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={cellStyle}>Dart</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                    <StarRating total={5} filled={3} isLtr={true}/>
                  </div>
                </td>
              </tr>
              <tr>
                <td className={cellStyle}>PL/SQL</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                    <StarRating total={5} filled={3} isLtr={true}/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h1 className={tableTitleStyle}>{t("Languages.header")}</h1>
      <div className={tableBg}>
        <div className={tableShape}>
          <table className={tableStyle}>
            <thead className={tableHeadStyle}>
              <tr>
                <th className={`${cellStyle} text-center`}>{t("Languages.Head.lang")}</th>
                <th className={`${cellStyle} text-center md:px-15`}>{t("Languages.Head.lvl")}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={cellStyle}>{t("Languages.Body.Lang.eng")}</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                    {t("Languages.Body.Level.b2")}
                  </div>
                </td>
              </tr>
              <tr>
                <td className={cellStyle}>{t("Languages.Body.Lang.est")}</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                    {t("Languages.Body.Level.b2")}
                  </div>
                </td>
              </tr>
              <tr>
                <td className={cellStyle}>{t("Languages.Body.Lang.rus")}</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                    {t("Languages.Body.Level.native")}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h1 className={tableTitleStyle}>{t("Other.header")}</h1>
      <div className={tableBg}>
        <div className={tableShape}>
          <table className={tableStyle}>
            <tbody>
              <tr>
                <td className={cellStyle}>{t("Other.modeling")}</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                      Blender
                  </div>
                </td>
              </tr>
              <tr>
                <td className={cellStyle}>{t("Other.game_dev")}</td>
                <td className={cellStyle}>
                  <div className="flex justify-end">
                      Unity
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <Fireflies count={50} />
    </div>
  );

}