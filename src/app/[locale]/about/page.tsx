import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import Fireflies from '@/components/animations/fireflies';
import StarRating from '@/components/widgets/StarRating';

export default function About({params}: {params: Promise<{locale: string}>;}) {
    const {locale} = use(params);
    setRequestLocale(locale);
    
    return (
    <div className='items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]'>
        <h1 className="text-xl font-bold mb-4">Fields</h1>

        <div className='p-10 bg-[var(--background)]'>
            <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                <table className='table-auto w-full text-left border-collapse'>
                    <thead className='bg-[var(--hover-background)] text-[var(--hover-text)]'>
                        <tr>
                            <th className='border border-[var(--border)] p-2'>Field</th>
                            <th className='border border-[var(--border)] p-2'>Knowledge</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Web</td>
                            <td className='border border-[var(--border)] p-2'>React, Vue, AspNetCore, Blazor</td>
                            {/* TODO: change all frameworks to icons and logos? */}
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Server</td>
                            <td className='border border-[var(--border)] p-2'>dotnet Web Api, NodeJS, SpringCore, JakartaServlet</td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Crossplatform</td>
                            <td className='border border-[var(--border)] p-2'>Flutter</td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Databases</td>
                            <td className='border border-[var(--border)] p-2'>MongoDB, PostgreSQL, SQLServer</td>
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Other</td>
                            <td className='border border-[var(--border)] p-2'>Docker, Github Actions, Gitlab CI/CD, Tailwind, Bootstrap</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <h1 className="text-xl font-bold mt-16">Programming Languages</h1>

        <div className='p-10 bg-[var(--background)]'>
            <div className="overflow-hidden rounded-xl border border-[var(--border)]">
                <table className='table-auto w-full text-left border-collapse'>
                    <thead className='bg-[var(--hover-background)] text-[var(--hover-text)]'>
                        <tr>
                            <th className='border border-[var(--border)] p-2 px-5'>Language</th>
                            <th className='border border-[var(--border)] p-2 px-20'>Knowledge</th>
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
                            {/* TODO: change all frameworks to icons and logos? */}
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Java</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={4} isLtr={true}/>
                                </div>
                            </td>
                            {/* TODO: change all frameworks to icons and logos? */}
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Python</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={3} isLtr={true}/>
                                </div>
                            </td>
                            {/* TODO: change all frameworks to icons and logos? */}
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Kotlin</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={3} isLtr={true}/>
                                </div>
                            </td>
                            {/* TODO: change all frameworks to icons and logos? */}
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>PHP</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={2} isLtr={true}/>
                                </div>
                            </td>
                            {/* TODO: change all frameworks to icons and logos? */}
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>JavaScript</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={3} isLtr={true}/>
                                </div>
                            </td>
                            {/* TODO: change all frameworks to icons and logos? */}
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>Dart</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={3} isLtr={true}/>
                                </div>
                            </td>
                            {/* TODO: change all frameworks to icons and logos? */}
                        </tr>
                        <tr>
                            <td className='border border-[var(--border)] p-2'>PL/SQL</td>
                            <td className='border border-[var(--border)] p-2'>
                                <div className="flex justify-end">
                                    <StarRating total={5} filled={3} isLtr={true}/>
                                </div>
                            </td>
                            {/* TODO: change all frameworks to icons and logos? */}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <Fireflies count={50} />
    </div>
    );

}