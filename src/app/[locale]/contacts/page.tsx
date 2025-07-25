import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import EmailSender from '@/components/widgets/EmailSender';
import { useTranslations } from 'next-intl';
import FirefliesConsumer from '@/components/consumers/FirefliesConsumer';

export default function Contacts({params}: {params: Promise<{locale: string}>;}){
  const {locale} = use(params);
  setRequestLocale(locale);

  const t = useTranslations('Contact');

  return (
    <div className="items-center justify-items-center md:pt-16 pt-8 px-5 min-h-screen font-[family-name:var(--font-geist-sans)]">
      <h1 className='md:text-4xl text-2xl font-bold md:mb-8 mb-4'>{t("form_name")}</h1>
      <EmailSender />
      <FirefliesConsumer />
    </div>
  );
}