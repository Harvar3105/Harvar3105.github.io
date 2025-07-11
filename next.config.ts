import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const isProd = process.env.NODE_ENV ?? 'production';
const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: isProd ? '/' : '',
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true
  }
};

export const config = {
  // Match all pathnames except for
  // - … if they start with `/api`, `/trpc`, `/_next` or `/_vercel`
  // - … the ones containing a dot (e.g. `favicon.ico`)
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)'
};

export default withNextIntl(nextConfig);
