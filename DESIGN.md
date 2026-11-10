# OpenAI Style Reference

Source: https://styles.refero.design/style/dc541737-8bf2-4b31-b729-0352f696e82f

## Principles

- Pure white canvas. No tinted section backgrounds or decorative gradients.
- UI colors are achromatic: black for primary, graphite for secondary text, fog border for separators.
- Color only appears through content imagery, not buttons or UI backgrounds.
- Cards and clipped surfaces use `6.08px`; buttons, chips, and inputs use `9999px`.
- Spacing carries hierarchy. Avoid card shadows.

## CSS Custom Properties

```css
:root {
  --color-void: #000000;
  --color-fog-border: #e5e7eb;
  --color-chalk: #f1f1f1;
  --color-graphite: #666666;
  --color-ash: #8f8f8f;
  --color-canvas: #ffffff;

  --font-openai-sans: var(--font-geist-sans), 'Geist', ui-sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  --text-caption: 13px;
  --leading-caption: 1.64;
  --text-heading: 22px;
  --leading-heading: 1.26;
  --text-heading-lg: 20px;
  --leading-heading-lg: 1.21;
  --text-display: 48px;
  --leading-display: 1.16;
  --tracking-display: -1.44px;

  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  --spacing-unit: 4px;
  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-120: 120px;

  --page-max-width: 1200px;
  --card-padding: 32px;

  --radius-md: 4px;
  --radius-cards: 6.08px;
  --radius-chips: 9999px;
  --radius-input: 9999px;
  --radius-links: 4px;
  --radius-buttons: 9999px;
  --radius-softbutton: 40px;

  --shadow-sm: rgba(0, 0, 0, 0.02) 0px 4px 6px 0px,
    rgba(0, 0, 0, 0.05) 0px 0px 2px 0px;
}
```

## Tailwind v4 Tokens

```css
@theme {
  --color-void: #000000;
  --color-fog-border: #e5e7eb;
  --color-chalk: #f1f1f1;
  --color-graphite: #666666;
  --color-ash: #8f8f8f;
  --color-canvas: #ffffff;

  --font-openai-sans: var(--font-geist-sans), 'Geist', ui-sans-serif, system-ui,
    -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;

  --text-caption: 13px;
  --leading-caption: 1.64;
  --text-heading: 22px;
  --leading-heading: 1.26;
  --text-heading-lg: 20px;
  --leading-heading-lg: 1.21;
  --text-display: 48px;
  --leading-display: 1.16;
  --tracking-display: -1.44px;

  --spacing-4: 4px;
  --spacing-8: 8px;
  --spacing-12: 12px;
  --spacing-16: 16px;
  --spacing-20: 20px;
  --spacing-24: 24px;
  --spacing-32: 32px;
  --spacing-40: 40px;
  --spacing-52: 52px;
  --spacing-64: 64px;
  --spacing-80: 80px;
  --spacing-112: 112px;
  --spacing-120: 120px;

  --radius-md: 4px;
  --radius-md-2: 6.08px;
  --radius-3xl-2: 40px;
  --radius-full: 9999px;

  --shadow-sm: rgba(0, 0, 0, 0.02) 0px 4px 6px 0px,
    rgba(0, 0, 0, 0.05) 0px 0px 2px 0px;
}
```
