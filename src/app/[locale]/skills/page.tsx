import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import Fireflies from '@/components/animations/fireflies';
import StarRating from '@/components/widgets/StarRating';
import { useTranslations } from 'next-intl';

export default function About({params}: {params: Promise<{locale: string}>;}) {
    const {locale} = use(params);
    setRequestLocale(locale);

    const t = useTranslations("Skills");
    
    return (
    <div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>

        <h1 className="text-xl font-bold mb-4">{t("Fields.header")}</h1>
        <div className='p-10 bg-[var(--background)]'>
            <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                <table className='table-auto w-full text-left border-collapse'>
                    <thead className='bg-[var(--hover-background)] text-[var(--hover-text)]'>
                        <tr>
                            <th className='border border-[var(--border)] p-2'>{t("Fields.Head.field")}</th>
                            <th className='border border-[var(--border)] p-2'>{t("Fields.Head.techs")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>{t("Fields.Body.web")}</td>
                            <td className='border border-[var(--border)] p-2'>React, Vue, AspNetCore, Blazor</td>
                            {/* TODO: change all frameworks to icons and logos? */}
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>{t("Fields.Body.server")}</td>
                            <td className='border border-[var(--border)] p-2'>dotnet Web Api, NodeJS, SpringCore, JakartaServlet</td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>{t("Fields.Body.crosp")}</td>
                            <td className='border border-[var(--border)] p-2'>Flutter</td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>{t("Fields.Body.db")}</td>
                            <td className='border border-[var(--border)] p-2'>MongoDB, PostgreSQL, SQLServer</td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>{t("Fields.Body.other")}</td>
                            <td className='border border-[var(--border)] p-2'>Docker, Github Actions, Gitlab CI/CD, Tailwind, Bootstrap</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <h1 className="text-xl font-bold mt-16">{t("Prog_langs.header")}</h1>
        <div className='p-10 bg-[var(--background)]'>
            <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                <table className='table-auto w-full text-left border-collapse'>
                    <thead className='bg-[var(--hover-background)] text-[var(--hover-text)]'>
                        <tr>
                            <th className='border border-[var(--border)] p-2 px-5'>{t("Prog_langs.Head.lang")}</th>
                            <th className='border border-[var(--border)] p-2 px-20'>{t("Prog_langs.Head.knowledge")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>C#</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={4} isLtr={true}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Java</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={4} isLtr={true}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Python</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={3} isLtr={true}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Kotlin</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={3} isLtr={true}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>PHP</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={2} isLtr={true}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>JavaScript</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={3} isLtr={true}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Dart</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={3} isLtr={true}/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>PL/SQL</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={3} isLtr={true}/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <h1 className="text-xl font-bold mb-4">{t("Languages.header")}</h1>
        <div className='p-10 bg-[var(--background)]'>
            <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                <table className='table-auto w-full text-left border-collapse'>
                    <thead className='bg-[var(--hover-background)] text-[var(--hover-text)]'>
                        <tr>
                            <th className='border border-[var(--border)] p-2'>{t("Languages.Head.lang")}</th>
                            <th className='border border-[var(--border)] p-2'>{t("Languages.Head.lvl")}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>{t("Languages.Body.Lang.eng")}</td>
                            <td className='border border-[var(--border)] p-2'>{t("Languages.Body.Level.b2")}</td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>{t("Languages.Body.Lang.est")}</td>
                            <td className='border border-[var(--border)] p-2'>{t("Languages.Body.Level.b2")}</td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>{t("Languages.Body.Lang.rus")}</td>
                            <td className='border border-[var(--border)] p-2'>{t("Languages.Body.Level.native")}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <Fireflies count={50} />
    </div>
    );

}