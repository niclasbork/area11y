# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

area11y is a free, open-source (MIT) accessibility widget (dark mode, night shift, font scaling, read-aloud, reading mask, …) that sites embed with one script tag. There is no licensing, payment or account system. The repo is an npm-workspaces monorepo with two apps that are **deployed as two separate Vercel projects and share no code**:

- `apps/a11y` — the widget itself, published to npm as `area11y`, and also deployed as the "engine" at `engine.area11y.com` (serves `loader.js`, the versioned core bundle, fonts, and the `/api/ping` function).
- `apps/web` — the Next.js marketing/docs site at `area11y.com`.
- `supabase/migrations` — SQL for the one table still in use, `installations` (see Telemetry). Migrations are applied manually (Supabase SQL editor); don't use `supabase db push`.

## Commands

Run from the repo root.

```bash
npm run dev:all      # web (Next, :3000) + engine (vercel dev, :3001) in parallel
npm run dev:web      # only the Next.js site
npm run dev:a11y     # only the engine, via `vercel dev --listen 3001`

npm run build        # build:a11y then build:web
npm run build:a11y   # engine build: writes public/core/latest.json + public/core/core.v<version>.js, then dist/
npm run build:core   # npm package build (lib + loader + iife script) into apps/a11y/dist
npm run pack:core:dry
npm run release:core # bumps the patch version, builds, publishes to npm — see warning below
```

Type checking is the only automated check; there are no unit tests.

```bash
npm run lint --workspace apps/a11y     # tsc --noEmit
(cd apps/web && npx tsc --noEmit)      # `next lint` is NOT configured and prompts interactively — don't use `npm run lint` for web
```

`npm run test:visual --workspace apps/a11y` (`scripts/visual-test.mjs`) screenshots real third-party pages in light/dark/night using the locally built core. It needs Playwright installed separately and a fresh `vite build --config vite.core.config.ts`.

`release:core` runs `npm version patch` *before* publishing. If the publish fails (e.g. expired npm login shows up as a misleading `E404`), the version bump stays in `apps/a11y/package.json` and `package-lock.json`; re-running bumps it again. After a failed publish, either reset the version or run only `npm --workspace apps/a11y publish --access public`.

## Architecture

### Two ways the widget gets onto a page

1. **Loader path (what the README documents, and what almost everyone uses).** A `<script src="https://engine.area11y.com/loader.js">` tag, or `loadA11Y()` from `area11y/loader` which just injects that tag.
   `apps/a11y/public/loader.js` (hand-written, not bundled) fetches `/core/latest.json`, `import()`s `/core/core.v<version>.js`, calls `init({ hostname, config })` (`src/core-entry.ts`) and then sends the usage ping.
2. **Direct path.** `init()` from the npm package (`src/index.ts`) or the IIFE build (`src/script.ts`). No network calls, no ping.

Both paths end in `initAccessibilityCore` (`src/AppEntry.tsx`).

### Telemetry (the only server-side state)

`loader.js` → `POST engine/api/ping` (`apps/a11y/api/ping.ts`) → `record_installation_ping()` → one row per domain in `public.installations` (hostname, first/last seen, core version, counter). The purpose is to know which sites use the widget.

Constraints to keep when touching this:

- Domain only. Never store or log IP addresses, user agents, paths, query strings or anything about the visitor. The privacy page, FAQ and README promise exactly this.
- The hostname comes from the `Origin` / `Referer` header, never from the request body. Local, single-label and IP hosts are not recorded.
- The ping is best-effort: sent for a random ~1-in-20 sample of page views — deliberately without any marker stored on the visitor's device (that would need consent under ePrivacy / § 25 TDDDG) —, sent as `text/plain` to avoid a CORS preflight, always answered with 204, and it must never delay or break the widget.
- Opt-out stays available: `data-telemetry="off"` / `telemetry: false`.
- The table is RLS-deny-all and written only through the service role; the function is revoked from `anon` / `authenticated`.

Engine env vars: `SUPABASE_URL`, `SUPABASE_SERVICE_ROLE_KEY`. The web app needs no secrets (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_ENGINE_URL` are optional).

### Widget internals (`apps/a11y/src`)

- `AppEntry.tsx` mounts a fixed, full-viewport `#area11y-root` with an open **shadow root**; the React UI (`App.tsx`, `components/`) and its Tailwind CSS live inside it. `@font-face` rules are extracted and injected into the host document, because fonts declared inside a shadow root don't apply outside it. `destroy()` must leave the host page exactly as it was (`A11yService.clearSettings()`).
- `services/A11yService.tsx` is the part that changes the **host page**. `applySettings(settings)` is re-run on every settings change and rebuilds one `<style id="area11y-host-overrides">` plus `html` classes. Dark mode / night shift are "hybrid": a baseline stylesheet plus a per-element pass that reads computed styles and writes inline `!important` overrides, kept up to date by `MutationObserver`s and walking open shadow roots and same-origin iframes.
  - Every inline write goes through `setInline`, which records the page's original value so `restoreInline` can undo it. Dark/night and link highlighting can stack on the same property; `setInline` deliberately looks up the original in the other layers' stores.
  - Colours are parsed from computed styles; anything that is not `rgb()`/hex (e.g. `oklch()` from Tailwind v4) is resolved through a 1×1 canvas.
  - Never move, wrap or insert elements in the host DOM (it breaks React/Vue-managed pages). "Hide images" is pure CSS for this reason.
  - Host elements can opt out with `data-area11y-ignore`.
- Settings live in `localStorage` (`area11y:settings`, `area11y:hide-media`). Only values that differ from the site's defaults are stored, and saved values win over `defaultSettings` / the `theme` option. `AppEntry` reads them before React mounts to pre-paint dark mode and hidden media without a flash. localStorage can throw (blocked storage) — every access is guarded.
- `A11ySettings.contrast` is the historical name for the **Night Shift** mode, not a high-contrast mode. It is part of the persisted settings — don't rename it.
- i18n: 13 locale JSON files in `src/locales`; `WidgetTranslations` is `typeof en.json`, so a new key must be added to every locale. Without an explicit `locale` the widget follows `<html lang>` and updates when it changes.

### Build outputs of `apps/a11y`

Several Vite configs produce different artefacts from the same source:

| Config | Entry | Output |
| --- | --- | --- |
| `vite.core.config.ts` | `src/core-entry.ts` | `public/core/core.v<version>.js` — the bundle the loader imports. Versioned by `package.json`; committed. |
| `vite.lib.config.ts` | `src/index.ts` | `dist/area11y-core.{es,cjs}.js` (npm main) |
| `vite.loader.config.ts` | `src/loaderClient.ts` | `dist/area11y-loader.{es,cjs}.js` (`area11y/loader`) |
| `vite.script.config.ts` | `src/script.ts` | `dist/area11y-core.iife.js` (`area11y/script`, unpkg) |

`scripts/write-core-version.mjs` writes `public/core/latest.json`, which the loader reads to decide which core version to import. A widget change therefore reaches loader users with the next engine build/deploy, and npm users only after a release. Only the version named in `latest.json` is loaded; delete superseded `core.v*.js` files when bumping the version.

### Marketing site (`apps/web`)

Next.js App Router with SCSS modules. Each route is a thin server `page.tsx` (metadata) plus a `page.client.tsx`. Copy lives in `app/locales/{de,en}.json` (both must have identical keys); German is the default (`app/seo.ts`), and `LanguageProvider` switches language client-side. The site embeds the widget itself via the loader, pointing at `http://localhost:3001` in development — so the engine must be running (`dev:all`) and built (`build:a11y`) for the widget to appear locally.

Visual direction for the site is specified in `DESIGN.md`: white canvas, achromatic UI (colour only through imagery), no card shadows, `6.08px` radius for cards and `9999px` for buttons/chips/inputs.
