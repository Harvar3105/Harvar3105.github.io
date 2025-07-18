import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import Fireflies from '@/components/animations/fireflies';
import EmailSender from '@/components/widgets/EmailSender';
import LoadingWidget from '@/components/widgets/LoadingWidget';
import { useTranslations } from 'next-intl';

export default function Contacts({params}: {params: Promise<{locale: string}>;}){
    const {locale} = use(params);
    setRequestLocale(locale);

    const t = useTranslations('Contact');

    return (
        <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <h1 className='text-xl font-bold mb-4'>{t("form_name")}</h1>
            <EmailSender />
            <Fireflies count={50} />
        </div>
    );
}