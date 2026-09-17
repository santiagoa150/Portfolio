# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Angular 22 SSR portfolio app scaffolded from `angular-frontend-template`, using Tailwind CSS v4 for styling and built-in Angular i18n (Spanish) for content. Package manager is **yarn** (not npm) — `yarn@1.22.22` is pinned via `packageManager`, and `angular.json` sets `cli.packageManager` to `yarn`. Node version is pinned in `.nvmrc` (24.16.0).

## Commands

- `yarn start` — run the dev server (`ng serve`) at `http://localhost:4200`.
- `yarn build` — production build (SSR output) to `dist/`.
- `yarn watch` — development-configuration build in watch mode.
- `yarn test` — run unit tests via the Angular CLI's Vitest-based unit-test builder (`@angular/build:unit-test`). To run a single test file, pass it through: `yarn test --project Angular-Frontend-Template -- src/app/path/to/file.spec.ts` (or invoke `vitest` directly against the file once tests exist).
- `yarn lint` — `ng lint`, backed by `@angular-eslint/builder` and the flat ESLint config in `eslint.config.js`.
- `node dist/Angular-Frontend-Template/server/server.mjs` — run the built SSR server (also exposed as `yarn serve:ssr:Angular-Frontend-Template`).
- `ng generate component <name>` (or other schematics) — scaffolding uses the `angular-eslint` schematic collection (configured in `angular.json`), and generated components default to `style: css`.
- `ng extract-i18n` — regenerates `src/app/shared/infra/i18n/messages.es.json` from `i18n="@@id"` markers in templates.

Lint-staged is configured in `package.json` (`eslint --fix` for `*.ts,html`; `prettier --write` for `*.ts,html,css,json,md`) and Husky is initialized (`.husky/`), but no hook script currently invokes lint-staged — it isn't automatically wired to `pre-commit` yet.

## Architecture

**Structure is context-first, not layer-first.** Feature code lives under `src/app/context/<context-name>/...` rather than in global `components/`/`pages/` folders. Within a context, code is further organized by layer, e.g. `context/home/ui/page/<page-name>/`. Shared/cross-cutting code lives under `src/app/shared/` (currently just `shared/infra/i18n/`). When adding a new page or feature, follow this pattern: create/extend a context directory and place the page under `ui/page/<page-name>/`, with the component file named `<page-name>.page.ts` and its template `<page-name>.page.html`.

Routing is lazy per-page: `app.routes.ts` uses `loadComponent: () => import('./context/.../<name>.page').then((m) => m.<ClassName>)` for each route rather than eagerly importing components.

**SSR setup**: this is an Angular SSR app (`@angular/ssr`), with separate config for browser and server:
- `app.config.ts` — browser `ApplicationConfig` (router, hydration, global error listeners).
- `app.config.server.ts` — merges `app.config.ts` with `provideServerRendering(withRoutes(serverRoutes))`.
- `app.routes.server.ts` — server rendering strategy per route (`RenderMode`); currently everything is `RenderMode.Prerender`. New routes that shouldn't be statically prerendered need an entry here.
- `server.ts` — the Express entry point (`AngularNodeAppEngine`), where API endpoints would be added if needed (none exist yet); exports `reqHandler` for platforms like Firebase Cloud Functions and self-starts on `PORT` (default 4000) otherwise.

**i18n**: uses Angular's built-in `i18n`/`i18n="@@id"` template attributes (not a runtime library like ngx-translate). Source locale is `"source"`; the only target locale is `es`, translated in `src/app/shared/infra/i18n/messages.es.json` (configured in `angular.json` under `projects.Angular-Frontend-Template.i18n`). `@angular/localize/init` is a polyfill, and `localize: ["es"]` is set on the build target. When writing template text meant to be user-facing, add an `i18n="@@<context>.<key>"` attribute and update the corresponding entry in `messages.es.json`.

**Styling**: Tailwind CSS v4, wired through PostCSS (`@tailwindcss/postcss` in `.postcssrc.json`) rather than a `tailwind.config.js`. The theme is defined via CSS custom properties in `src/styles.css` using Tailwind v4's `@theme` block — `primary`, `secondary`, and `accent` color scales (50–950) are the app's palette; extend that block (not a JS config file) to add design tokens. Component styles default to plain CSS per `angular.json` schematics (`"style": "css"`); Tailwind utility classes are used directly in templates.

**Environments**: `src/environments/environment.type.ts` defines the `Environment` interface; `environment.ts` / `environment.prod.ts` implement it. Production builds file-replace `environment.ts` with `environment.prod.ts` (configured in `angular.json`).

## Conventions

- Selectors: components use `app-` kebab-case element selectors, directives use `app` camelCase attribute selectors (enforced by ESLint rules in `eslint.config.js`).
- TypeScript is strict-leaning: `noImplicitOverride`, `noPropertyAccessFromIndexSignature`, `noImplicitReturns`, `noFallthroughCasesInSwitch`, plus Angular's `strictInjectionParameters` and `strictInputAccessModifiers` are all enabled in `tsconfig.json`.
- Prettier: single quotes, 100-character print width, and the `angular` parser for `.html` files (`.prettierrc`).
- Component classes use standalone Angular API style (`imports: [...]` on `@Component`, no `standalone: true` needed since it's the default in this Angular version) and `signal()` for local state (see `app.ts`).
