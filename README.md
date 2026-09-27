# Santiago Álvarez — Portfolio

Personal portfolio site for Santiago Álvarez, a backend-focused Software Engineer. Built with Angular 22 (SSR + static prerendering), Tailwind CSS v4, and Angular's built-in i18n, available in Spanish and English.

## Features

- **Server-side rendering with full static prerendering** (`@angular/ssr`) — every route, in both locales, is prerendered at build time (including per-project `works/:id` pages), with an Express SSR server available as a fallback for anything not prerendered.
- **Spanish and English**, served as two real, separately prerendered site copies under `/es/` and `/en/`, each with its own correctly localized `<title>`/`meta description` baked into the static HTML, plus a language switcher in the sidebar.
- **Five sections**: Home, About, Services, Works and Contact, sharing a persistent sidebar with a mobile hamburger menu.
- **Works** showcases real, deployed personal projects with a real tech-stack icon set, an image gallery with a lightbox, and (for a couple of client-heavy stacks with no official logo, like gRPC) explicitly-generic custom glyphs.
- A small reusable **design system** (`Button`, `Card`, `TextField`, `Icon`) extracted from the source Figma file, viewable at `/design-system` in development builds only.

## Getting started

```bash
yarn install
yarn start
```

Then open `http://localhost:4200/`. Note that the dev server only ever serves the English (source-locale) content — see [Internationalization](#internationalization) below for how to preview Spanish.

## Available scripts

| Command | Description |
| --- | --- |
| `yarn start` | Dev server (`ng serve`) at `http://localhost:4200`, English content only. |
| `yarn dev:i18n` | Live-reloading preview of **both** locales at `http://localhost:4300` (`/` redirects to `/es/`) while developing — rebuilds on save (a few seconds, not true HMR) via `ng build --watch` and auto-refreshes connected tabs via `browser-sync`. |
| `yarn build` | Production build (SSR + prerendered output for both locales) to `dist/`. |
| `yarn watch` | Development-configuration build in watch mode, without the live-reloading preview server. |
| `yarn test` | Unit tests via the Angular CLI's Vitest-based test runner. |
| `yarn lint` | ESLint via `@angular-eslint/builder`. |
| `yarn serve:ssr:Angular-Frontend-Template` | Runs the built SSR server (`node dist/Angular-Frontend-Template/server/server.mjs`). |

## Internationalization

Content is authored in English directly in components/templates (`$localize`/`i18n="@@id"`), which doubles as the `en` build; Spanish is a translated target locale in `src/app/shared/infra/i18n/messages.es.json`. `ng build` emits two fully separate, prerendered site copies (`dist/.../browser/es/`, `dist/.../browser/en/`).

Angular's Vite/esbuild-based dev server (`ng serve`) cannot serve translated content in any configuration — it always serves the untranslated English source at `/`. To see or QA the Spanish version, use `yarn dev:i18n` (fast iteration) or a one-off `yarn build` plus any static file server pointed at `/es/`/`/en/`.

## Project structure

Code is organized **context-first**: each of the five site sections is its own context under `src/app/context/<name>/`, further split by layer (e.g. `ui/page/<page-name>/`). Cross-cutting code lives under `src/app/shared/`: `shared/ui/` (the design system), `shared/layout/` (the sidebar), and `shared/infra/` (i18n messages, the SEO title/meta service). See `CLAUDE.md` for the full architecture writeup, including SSR/prerendering setup, styling conventions and known cross-browser gotchas.

## Credits

The visual design is adapted from the [Personal Portfolio Web Template](https://www.figma.com/community/file/1218023713246072698/personal-portfolio-web-template) by **Zubaear** on Figma Community, licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Changes were made: the design was implemented as a real Angular application, one of the template's original pages (Blog) was dropped, and all content was replaced with real, project-specific material.

## Contact

- GitHub: [santiagoa150](https://github.com/santiagoa150)
- LinkedIn: [santiago-álvarez-muñoz](https://www.linkedin.com/in/santiago-%C3%A1lvarez-mu%C3%B1oz-690541281/)
- Email: santiagoa150@gmail.com
