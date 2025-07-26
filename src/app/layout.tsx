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

  const googleVerification = process.env.GOOGLE_SEARCH_ENGINE_VERIFICATION_CODE;

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content={googleVerification} />
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