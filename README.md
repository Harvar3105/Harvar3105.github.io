# Jüri Petrotšenko — Portfolio

Personal portfolio website for showcasing my background, technical skills, projects, and professional experience as a software developer.

**Live website:** https://harvar3105.github.io/

## Tech Stack

- **Next.js 15** — React framework and application structure
- **React 19** — UI development
- **TypeScript** — static typing
- **Tailwind CSS 4** — styling and responsive layouts
- **next-intl** — English and Russian localization
- **EmailJS** — contact form email delivery
- **next-sitemap** — sitemap and robots.txt generation
- **GitHub Actions** — automated build and deployment
- **GitHub Pages** — production hosting

## Features

- Responsive portfolio layout
- English and Russian versions
- Projects and professional experience sections
- Technical skills overview
- Contact form
- SEO metadata, canonical URLs, Open Graph data, sitemap and robots.txt
- Automated deployment to GitHub Pages

## Project Structure

```text
.
├── .github/workflows/    # CI/CD workflow for GitHub Pages
├── messages/             # Localization files
├── public/               # Static assets and generated site files
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   ├── components/       # Reusable UI components
│   └── i18n/             # Internationalization configuration
├── next.config.ts
├── next-sitemap.config.js
├── package.json
└── tsconfig.json
```

## Getting Started

### Prerequisites

- Node.js 20+
- npm

## Deployment

The project is deployed to GitHub Pages using GitHub Actions.

A push to the `main` branch triggers the deployment workflow, which:

1. Installs dependencies with npm.
2. Builds the Next.js application.
3. Generates the sitemap and `robots.txt`.
4. Uploads the static build as a GitHub Pages artifact.
5. Deploys the artifact to GitHub Pages.

The build requires environment variables configured as GitHub Actions secrets, including the site URL and credentials used by the contact form and external profile links.

## Localization

The application currently provides two locales:

- `/en` — English
- `/ru` — Russian

Localized content is stored in the `messages/` directory and handled with `next-intl`.

## Author

**Jüri Petrotšenko**

- GitHub: https://github.com/Harvar3105
- LinkedIn: available through the portfolio website

## License

This repository contains the source code of my personal portfolio website. The content, personal information, CV, and other personal assets are not intended for redistribution.