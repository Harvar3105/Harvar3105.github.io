import "../globals.css";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

import {NextIntlClientProvider, hasLocale} from 'next-intl';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import {getTranslations } from "next-intl/server";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export async function generateMetadata({params}: {params: Promise<{locale: string}>;}) {
  const {locale} = await params;
  const t = await getTranslations({locale, namespace: 'Metadata'});

  return {
    title: t('title'),
    charSet: "UTF-8",
    description: t("description"),
    keywords: "HTML, CSS, JavaScript, JS, TypeScript, TS, React, " + t("keywords"),
    author: "Jüri Petrotšenko",
    viewport: "width=device-width, initial-scale=1.0",
    icons: {
      icon: '/favicon.ico'
    }
  };
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const {locale} = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <Header />
      <main className="flex-grow pt-16 min-h-[calc(100vh-100px)] md:min-h-screen">{children}</main>
      <Footer />
    </NextIntlClientProvider>
  );
}
