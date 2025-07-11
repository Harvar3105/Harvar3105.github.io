import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const isProd = process.env.NODE_ENV ?? 'production';

const nextConfig: NextConfig = {
  /* config options here */
  // basePath: isProd ? '/' : '',
  output: "export",
  distDir: "dist",
  images: {
    unoptimized: true
  }
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
