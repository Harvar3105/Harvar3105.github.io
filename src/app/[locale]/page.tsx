import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";
import FirefliesConsumer from '@/components/consumers/FirefliesConsumer';

export default function Home({params} : {params: Promise<{locale: string}>;}) {
  const {locale} = use(params);
  setRequestLocale(locale);

  const t = useTranslations('Home');

  return (
    <div className="items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">

      <div className="relative w-full h-100">
        <span className="absolute bottom-0 left-10">
          <h3 className="text-xl">
            {t("about")}
          </h3>
          <h1 className="text-6xl font-bold">
            {t("name")}
          </h1>
        </span>
      </div>

      <div className="relative w-full h-50 pt-20">
        <span className="absolute bottom-0 right-10 text-right">
          <h3 className="text-3xl font-bold">
            {t("about_me_header")}
          </h3>
          <h1 className="">
            {t("about_me")}
          </h1>
          <br/>
          <h1 className="">
            {t("passion")}
          </h1>
        </span>
      </div>

      <FirefliesConsumer />
    </div>
  );
}
