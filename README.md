# area11y

area11y is a powerful, embeddable accessibility widget built with React, TypeScript, and Tailwind CSS. It enables comprehensive text and readability controls including text scaling, line height, letter spacing, dyslexia-friendly fonts, large cursor support, reading mask, link highlighting with focus rings, reduce-motion preferences, and read-aloud functionality with screen reader support. It also offers dark mode and a warm night-shift reading mode, media hiding with accessible placeholders, keyboard navigation enhancements, and persistent user settings.

The widget menu is available in German, English, French, Spanish, Italian, Dutch, Portuguese, Polish, Turkish, Russian, Arabic, Simplified Chinese, and Japanese.

All features can be integrated into any website with a single line of code — in under five minutes.

area11y is free and open source under the MIT license. No license key, no subscription, no domain limit.

🌐 Official Website & Demo: [area11y.com](https://area11y.com)

<img
    src="https://area11y.com/readme/area11y-en.jpg"
    alt="area11y Accessibility Widget Preview"
    width="720"
/>

## Installation

### Script Tag

```html
<script
  src="https://engine.area11y.com/loader.js"
  data-primary-color="#2563eb"
  data-position="bottom-right"
  data-hotkey="Alt+A"
  data-locale="de"
  defer
></script>
```

All attributes are optional. Also available: `data-theme="dark"` (or `"auto"`) to start in dark mode for new visitors.

Locale behavior:
- If `data-locale` is set, the widget uses that locale and ignores document language changes.
- If `data-locale` is omitted, the widget follows the website language (`<html lang>`) and updates automatically on language switches.

### npm

```bash
npm install area11y
```

Works in React, Vue, Svelte, vanilla JS, and any bundler environment. The `/loader` subpath is a lightweight script-injector — it adds `loader.js` to the document, which then loads the current core from the engine. No framework dependencies are bundled.

```ts
import { loadA11Y } from 'area11y/loader'

loadA11Y({
  position: 'bottom-right',
  primaryColor: '#2563eb',
  hotkey: 'Alt+A',
  locale: 'de',
})
```

To bundle the widget into your own app instead of loading it from the engine, use `init()`:

```ts
import { init, destroy, updateOptions } from 'area11y'

init({ position: 'bottom-left', hotkey: 'Alt+A' })

updateOptions({ locale: 'en' }) // change options later
destroy()                       // remove the widget and undo all page changes
```

## Options

| Option         | Type                                                 | Default          | Description                                                        |
| -------------- | ---------------------------------------------------- | ---------------- | ------------------------------------------------------------------ |
| `position`     | `'bottom-right' \| 'bottom-left' \| 'bottom-center'` | `'bottom-right'` | Placement of the floating action button.                           |
| `primaryColor` | `string`                                             | `'#2563eb'`      | Background color for button and accents.                           |
| `hotkey`       | `string`                                             | `undefined`      | Keyboard shortcut to toggle the panel (e.g. `Alt+A`, `Ctrl+Shift+1`). |
| `locale`       | `string`                                             | `undefined`      | Fixed locale; omit to follow `<html lang>`.                        |
| `theme`        | `'light' \| 'dark' \| 'auto'`                        | `'light'`        | Page theme for visitors who have not chosen one themselves.        |
| `selector`     | `string`                                             | `'body'`         | `init()` only. DOM selector where the widget container mounts.     |

With the script tag, the same options are set as `data-*` attributes (`data-primary-color`, `data-position`, …).

## Features

- Text scaling from 100% to 200%.
- Controls for line height and letter spacing.
- Dark mode and a warm, low-blue-light Night Shift mode.
- Dyslexia-friendly fonts.
- Reduce Motion to soften heavy animations and transitions.
- Link highlighting with focus rings.
- Shadow DOM isolation with persisted preferences.
- Hide images and videos with subtle placeholders.
- Reading mask for calmer focus.
- Oversized cursor for better visibility.
- Read-aloud in the active language.
- One-click reset returns to defaults.
- Persistence: all settings stored in localStorage under `area11y:*` (legacy `a11y-core:*` keys are auto-migrated on first load).

## Engine URLs

- Loader: `https://engine.area11y.com/loader.js`
- Current version: `https://engine.area11y.com/core/latest.json`
- Core: `https://engine.area11y.com/core/core.v<version>.js`
- Usage ping: `https://engine.area11y.com/api/ping`

## Telemetry

To see which websites use area11y, the hosted loader sends an anonymous ping for a random sample of page views (about one in twenty). Nothing is stored in the visitor's browser for this. The server stores a single row per **domain**: the hostname, the widget version, the time of the first and latest ping, and a counter.

Not collected or stored: IP addresses, user agents, page paths or query strings, cookies, or anything about the visitor. The ping never delays or blocks the widget.

Using the npm package's `init()` directly sends no ping at all.

## Privacy note for site operators

The hosted loader, the widget and its fonts are served from `engine.area11y.com`, so your visitors' browsers connect to that server and transmit their IP address to it — the same situation as with any third-party script or font. If you embed area11y, mention it in your own privacy policy; you can refer to the section “Use of the Widget on Other Websites” in the [area11y privacy policy](https://area11y.com/privacy).

## CSP Requirements

If your site sends a Content-Security-Policy, allow the engine for:

- `script-src https://engine.area11y.com`
- `connect-src https://engine.area11y.com`
- `font-src https://engine.area11y.com` (dyslexia-friendly and readable fonts)
- `img-src https://engine.area11y.com` (large cursor)

The widget applies its settings through injected `<style>` elements and inline styles, so `style-src` must allow inline styles.

## Development

This repository is an npm-workspaces monorepo: `apps/a11y` is the widget and the engine, `apps/web` is the area11y.com site.

```bash
npm install
npm run build:a11y                                  # build the core once
npm run dev --workspace apps/a11y -- --port 3001    # serves loader.js and the core
npm run dev:web                                     # site on :3000, loads the widget from :3001
```

The plain Vite server above is enough to work on the widget; only the usage ping is missing there. `npm run dev:a11y` / `npm run dev:all` run the engine through `vercel dev` instead and need access to the maintainer's Vercel project.

## License

[MIT](./LICENSE)
