# Shared UI components

Base, reusable presentational components extracted from the Figma template ("Personal Portfolio Web Template"). Import them from their file directly (e.g. `import { Button } from '@app/shared/ui/button/button'` relative path) — there is no barrel file.

## Icon (`app-icon`)

Renders one of the SVG assets in `public/icons/`: `arrow-up-right`, `link`, `phone`, `mail` are extracted from Figma; `github`, `linkedin`, `user` and `location` are custom-authored (not in the source Figma file, which only ships generic Behance/Dribbble/Instagram placeholders, and had no age/location icons at all) but follow the same visual pattern (white circle badge, `#141313` glyph) for consistency. `go`, `nodejs`, `python`, `java`, `php`, `postgresql`, `mongodb`, `docker`, `kafka`, `redis`, `datadog` and `grafana` are real technology logos (single-path marks from the MIT-licensed [Simple Icons](https://simpleicons.org/) set, recolored to `#141313` and put on the same circle badge) used for the Works project-detail tech stack — not from Figma either.

```html
<app-icon name="arrow-up-right" class="size-6" />
```

- `name` (required): one of `IconName`.
- `alt`: accessible alt text, empty by default (decorative icons).

## Button (`app-button`)

Black pill-free (square corner) button matching the template's CTA style, with a trailing arrow icon by default. Label is projected content.

```html
<app-button variant="primary">Let's talk with me</app-button>
<app-button variant="secondary" [showArrow]="false" type="submit">Submit</app-button>
<app-button routerLink="/contact">Let's talk with me</app-button>
<app-button href="documents/santiago-alvarez-cv.pdf" [download]="true">Download CV</app-button>
```

- `variant`: `'primary'` (solid ink background, white text) | `'secondary'` (outlined). Default `'primary'`.
- `type`: native button `type` attribute. Default `'button'`. Ignored when `routerLink` or `href` is set.
- `showArrow`: whether to render the trailing arrow icon. Default `true`.
- `routerLink`: when set, renders a routed `<a>` instead of a `<button>` (same visual style) — use for navigation CTAs.
- `href` / `download` / `target`: when `href` is set (and no `routerLink`), renders a plain `<a>` instead of a `<button>` — use for file downloads (e.g. a CV) or external links; `download` adds the native `download` attribute, and `target: '_blank'` (with `rel="noopener noreferrer"` added automatically) opens external links in a new tab so visitors keep this site open. Both default off/`'_self'`.

## Card (`app-card`)

Structural wrapper (flex column, consistent gap, no border/shadow/radius — the template's design is flat). Compose page-specific card content (image, title, text) inside it via projection.

```html
<app-card>
  <img src="..." alt="..." />
  <h3>Project title</h3>
</app-card>
```

## TextField (`app-text-field`)

Underlined form field (label + input or textarea) matching the contact form style on the gradient panel (white text on a dark/colored background).

```html
<app-text-field label="Name" [(value)]="name" />
<app-text-field label="Message" [multiline]="true" [(value)]="message" />
```

- `label` (required): field label, rendered uppercase above the field.
- `type`: `'text'` | `'email'`. Default `'text'`.
- `multiline`: renders a `<textarea>` instead of `<input>`. Default `false`.
- `placeholder`: optional placeholder text.
- `value`: two-way bindable (`[(value)]`) current field value.

## Design tokens

Defined in `src/styles.css` under `@theme`, extracted from the Figma file:

- Colors: `ink` (`#141313`, near-black — primary text/backgrounds) and the brand gradient stops `brand-purple` (`#b86adf`), `brand-coral` (`#ff6c63`), `brand-orange` (`#ffb147`) — used together as `bg-linear-to-r from-brand-purple via-brand-coral to-brand-orange` for decorative panels (hero, testimonials, contact form).
- Fonts: `font-sans` (IBM Plex Sans — body text, headings, UI) and `font-serif` (IBM Plex Serif Bold — logo mark only), loaded via Google Fonts in `src/index.html`.
- Corners are square everywhere (no border-radius) — this is a deliberate part of the template's flat, bold aesthetic, not an omission.
