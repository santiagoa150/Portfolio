# Shared layout components

Page-shell components rendered once around the router outlet (in `app.html`), as opposed to `shared/ui/`'s reusable content atoms.

## Sidebar (`app-sidebar`)

The persistent navigation from the Figma template's sidebar, shown identically on every page.

```html
<app-sidebar />
<main class="pt-16 lg:pt-0 lg:pl-71.25">
  <router-outlet />
</main>
```

- **Desktop (`lg:` and up):** a `position: fixed` sidebar, 285px wide, full viewport height — stays in place while the page content in `<main>` scrolls independently. `<main>` needs `lg:pl-71.25` so its content isn't hidden behind it.
- **Mobile (below `lg:`):** the fixed sidebar is hidden; a fixed top bar (logo + hamburger button) takes its place, and tapping the hamburger opens a full-screen overlay with the same links/socials/copyright. `<main>` needs `pt-16` to clear the mobile bar's height.
- Nav links use `routerLinkActive` for the active-page highlight (bold + a gradient underline reproducing the Figma accent line); the Home link uses `exact` matching so it isn't active on every route.
- Social links are read from `environment.socialLinks` (see `src/environments/environment.type.ts`) rather than hardcoded, so they can be changed without touching this component.
- Nav labels are translated via `$localize` in `sidebar.ts` (not a template `i18n` attribute, since they're rendered from a data array) — add new locale strings under the `nav.*` keys in `messages.es.json` if a label changes.
