/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  i18n: {
    locales: ['en', 'ru'],
    defaultLocale: 'en',
  },
};
