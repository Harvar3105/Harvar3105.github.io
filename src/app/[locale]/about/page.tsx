import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';

export default function About({params}: {params: Promise<{locale: string}>;}) {
    const {locale} = use(params);
    setRequestLocale(locale);
    
    return (
        <div>
            <h1>WIP</h1>
        </div>
    );
}