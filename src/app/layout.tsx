import { FirefliesProvider } from "@/components/providers/FirefliesContextProvider";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const dynamic = 'force-static';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Site - portfolio" />
        <meta name="keywords" content="HTML, CSS, JavaScript, JS, TypeScript, TS, React, Portfolio" />
        <meta name="author" content="Jüri Petrotšenko" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <FirefliesProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
        >
          {children}
        </body>
      </FirefliesProvider>
    </html>
  );
}