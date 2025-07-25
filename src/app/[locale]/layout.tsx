import "../globals.css";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

import { NextIntlClientProvider, hasLocale, useTranslations } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Viewport } from "next";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = useTranslations("Metadata" );

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL!;
  const title = t("title");
  const description = t("description");
  const ogImage = `${siteUrl}/og-preview.png`;

  return {
    title,
    description,
    keywords:
      "HTML, CSS, JavaScript, JS, TypeScript, TS, React, " + t("keywords"),
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: "/",
      languages: {
        en: "/en",
        ru: "/ru",
      },
    },
    openGraph: {
      title,
      description,
      url: siteUrl,
      siteName: "Portfolio",
      locale,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
      // creator: '@twitterHandle'
    },
    authors: [{ name: "Jüri Petrotšenko" }],
    icons: {
      icon: "/favicon.ico",
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function generateViewport(): Viewport {
  return {
    width: "device-width",
    initialScale: 1,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <NextIntlClientProvider locale={locale}>
      <Header />
      <main className="flex-grow pt-16 min-h-[calc(100vh-100px)] md:min-h-screen">
        {children}
      </main>
      <Footer />
    </NextIntlClientProvider>
  );
}
