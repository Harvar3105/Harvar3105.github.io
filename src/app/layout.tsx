
export const dynamic = 'force-static';

export default function RootLayout({ children }: { children: React.ReactNode }) {

  const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_ENGINE_VERIFICATION_CODE;

  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content={googleVerification} />
      </head>
      <body className="antialiased min-h-[884px] relative flex flex-col selection:bg-primary-container selection:text-on-primary-container">
        {children}
      </body>
    </html>
  );
}