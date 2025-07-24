import {use} from 'react';
import {setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";
import FirefliesConsumer from '@/components/consumers/FirefliesConsumer';

export default function Home({params} : {params: Promise<{locale: string}>;}) {
  const {locale} = use(params);
  setRequestLocale(locale);

  const t = useTranslations('Home');

  return (
    <div className="h-full px-8 font-[family-name:var(--font-geist-sans)]">

      <div className="flex flex-col-reverse w-full h-60 md:h-75 lg:h-100">
        <span className="md:px-10">
          <h3 className="md:text-xl text-lg">
            {t("about")}
          </h3>
          <h1 className="md:text-6xl text-4xl font-bold">
            {t("name")}
          </h1>
        </span>
      </div>

      <div className="flex flex-col md:pt-10 pt-3">
        <span className="md:x-10 text-right">
          <h3 className="md:text-4xl text-2xl font-bold">
            {t("about_me_header")}
          </h3>
          <h1 className="md:text-lg text-base">
            {t("about_me")}
          </h1>
          <br/>
          <h1 className="md:text-lg text-base">
            {t("passion")}
          </h1>
        </span>
      </div>

      <FirefliesConsumer />
    </div>
  );
}
