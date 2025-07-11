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

export default withNextIntl(nextConfig);
