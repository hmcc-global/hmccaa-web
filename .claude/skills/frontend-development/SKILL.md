---
name: frontend-development
description: Conventions for pages and components in the hmccaa-web Gatsby + Tailwind frontend (frontend/src). Covers vertical spacing between sections, full-width colored bands, why negative margins are avoided, and how to build the site locally and measure spacing. Use when adding or editing a page, section or component under frontend/src, or when fixing spacing or layout.
---

# Frontend development (hmccaa-web)

The frontend is Gatsby 5 with Tailwind 3. Where things live:

- Theme tokens: `frontend/src/config/theme.js`. It replaces Tailwind's color palette, so only theme colors exist; `bg-green-500` silently does nothing.
- Global styles and shared classes: `frontend/src/css/global.css`.
- Per-component styles: CSS modules in `frontend/src/css/*.module.css`.
- Breakpoint: `lg` (1024px) is where layouts switch to desktop.

## Vertical spacing: parents space their children

All space between page sections comes from one token, `section`. It is `--section-gap` in `global.css`: 3rem, and 5rem from `lg`.

- **Who applies it:**
  - `<main>` (in `components/layout.js`) and `.content-padding-full` space their direct children with `gap-y-section`.
  - `<main>` ends with `pb-section` above the footer.
  - For any other stack of sections, use `flex flex-col gap-y-section`.
- **New pages:** put sections as direct children of `<main>`, or of a `.content-padding-full` wrapper (which adds the horizontal gutter).
- **A section never pads or margins its own outside.** No `pt-*`, `pb-*`, `my-*` or `mb-*` on a section's root. Inside a section, the container that holds the pieces sets their spacing with `gap`, rather than each piece padding itself.
- **Breadcrumb pages:** the breadcrumb, `h1` and first content share one column with `gap-y-9 lg:gap-y-15`.
- **The one exception: overflow.** A box may need outside padding to make room for content positioned outside it. The home Get Connected collage and the Ministry Teams circle do this. Size that padding to the overflow and add a comment saying why.

## Full-width bands

A full-width element with its own background has the `section-band` class (`w-full`). Examples: banners, the grey bars, the Feedback / Prayer / RightNow Media bands, the Instagram bar. Pad a band's contents with `py-section` unless it is a thin bar.

- **Bands that touch each other:** wrap them in one `<div className="section-band">`. A parent's gap only falls between its direct children, so the group gets the section gap around it and the bands inside meet. Examples: the events page (banner + Sunday bar, prayer band + Instagram bar) and the watch page (banner + live stream).
- **A band that ends the page:** `<main>` drops its bottom padding (`main:has(> .section-band:last-child)` gets `pb-0` in `global.css`), so the band meets the footer. Nothing is needed per page.

## No negative margins for layout

Don't use a negative margin to undo a parent's gap or padding, for example `-mt-*` to pull one band up against another, or `-mb-*` to cancel `<main>`'s bottom padding. It ties the child to the parent's spacing value, and it breaks when either changes, when the element moves, or when a utility like `mt-[3px]` overrides it. Change the structure instead:

- **Elements that should touch:** group them in one wrapper, so the parent's gap only applies around the group.
- **Parent padding that one child shouldn't get:** remove it on the parent (with a `:has()` rule or a different wrapper), not with a negative margin on the child.

## Hidden spacing to watch for

- **Paragraphs:** every `<p>` gets a 21px bottom margin (24px at `lg`) from `layout.css`. Use `mb-0` on the last paragraph of a block.
- **`.highlighted-paragraph`:** it has `pb-5` to space it from a button below. It drops to 0 when it is the last child.
- **CMS rich text** can end with blank paragraphs. `RichText` trims trailing empty ones.
- **`.content-image`** has no vertical padding. Images inside rich text add `lg:py-15` themselves.

## Tailwind and CSS gotchas

- **Precedence:** classes in `global.css` outside `@layer` (`.content-padding-full`, `.content-image`, …) are emitted after the utilities, so they override utility classes on the same element. If a shared class should be overridable by utilities, put it in `@layer components`.
- **CSS modules** start with `@config`, so they can `@apply` utilities and theme tokens. They cannot `@apply` classes defined in `global.css`. Add classes like `section-band` in JSX next to the module class: `` className={`section-band ${wrapper}`} ``.
- **Comments** explain why the current code does what it does. Change history goes in the commit message or PR, not in comments.

## Build and check a change

Pages need Strapi data, so build against the local Strapi in the `web` Docker container. To create the container, follow `docs/src/setup.md`.

```bash
docker start web
docker exec -d web sh -c 'cd /home/node/cms && npm run develop > /tmp/strapi.log 2>&1'
```

Wait until `http://127.0.0.1:1337/_health` returns 204, then build:

```bash
docker exec web sh -c 'cd /home/node/frontend && npx gatsby build'
```

The build writes to `frontend/public` on the host. If a CSS-module change doesn't show up in the output, clear the webpack cache inside the container and build again: `rm -rf /home/node/frontend/.cache/webpack`.

Serve the build with any static server, for example `python3 -m http.server 8102 --directory frontend/public`. Check pages at 390px, 820px and 1440px wide.

`measure-gaps.js`, next to this file, lists every vertical gap of 40px or more between visible content on the current page. Run it in the browser console or a page-evaluation tool. Expected readings:

- Section gaps: about 80–86px at desktop, and 40–53px on phone and tablet. The variation comes from text line-height.
- A gap well above that range usually means a section is padding its own outside, or something hidden from the list above.
