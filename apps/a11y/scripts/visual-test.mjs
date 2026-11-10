#!/usr/bin/env node
/**
 * Visual regression harness for the area11y dark mode / night shift theming.
 *
 * For each target URL it loads the page, injects the locally built widget core,
 * activates light / dark / night and saves a full-page screenshot. Compare the
 * dark/night shots against the light one (and across runs) to catch theming
 * regressions on real, diverse third-party pages — the cases unit builds can't.
 *
 * Usage:
 *   node ./scripts/visual-test.mjs                      # default URL list
 *   node ./scripts/visual-test.mjs https://a.com https://b.com
 *
 * Requires Playwright:  npx playwright install chromium
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const appDir = path.resolve(__dirname, '..')

const pkg = JSON.parse(
	fs.readFileSync(path.join(appDir, 'package.json'), 'utf8')
)
const coreVersion = pkg.version || '1.1.1'
const corePath = path.join(appDir, 'public', 'core', `core.v${coreVersion}.js`)

if (!fs.existsSync(corePath)) {
	console.error(
		`Core build not found at ${corePath}.\nRun: npx vite build --config vite.core.config.ts`
	)
	process.exit(1)
}
const coreSource = fs.readFileSync(corePath, 'utf8')

const DEFAULT_URLS = [
	'https://example.com',
	'https://en.wikipedia.org/wiki/Accessibility',
	'https://developer.mozilla.org/en-US/',
]
const urls = process.argv.slice(2).length
	? process.argv.slice(2)
	: DEFAULT_URLS

const MODES = {
	light: {},
	dark: { theme: 'dark' },
	night: { contrast: true },
}

// Any truthy token makes the licence valid instantly; the policy unlocks every
// feature so dark mode / night shift aren't gated during the test.
const INIT_CALL = `
init({
  token: 'visual-test',
  policy: { features: { highContrast: true, darkMode: true, bigCursor: true, readAloud: true } },
  config: {},
});
`

const outDir = path.join(appDir, 'visual-test-output')
fs.mkdirSync(outDir, { recursive: true })

let chromium
try {
	;({ chromium } = await import('playwright'))
} catch {
	console.error(
		'Playwright is not installed.\nInstall it with:\n  npm i -D playwright\n  npx playwright install chromium'
	)
	process.exit(1)
}

const slug = (url) =>
	url
		.replace(/^https?:\/\//, '')
		.replace(/[^a-z0-9]+/gi, '-')
		.replace(/-+$/g, '')
		.slice(0, 60)

const browser = await chromium.launch()
try {
	for (const url of urls) {
		for (const [mode, settings] of Object.entries(MODES)) {
			const context = await browser.newContext({
				viewport: { width: 1280, height: 900 },
			})
			const page = await context.newPage()
			// Persist settings before any page script runs so the widget picks
			// them up on init.
			await page.addInitScript((s) => {
				try {
					localStorage.setItem('area11y:settings', JSON.stringify(s))
				} catch {
					/* storage blocked */
				}
			}, settings)

			try {
				await page.goto(url, {
					waitUntil: 'networkidle',
					timeout: 30000,
				})
				// Inject the bundled core (ES module) and call its exported init
				// from within the same module scope.
				await page.addScriptTag({
					type: 'module',
					content: `${coreSource}\n${INIT_CALL}`,
				})
				// Allow the chunked pass + idle callbacks to finish.
				await page.waitForTimeout(2000)
				const file = path.join(outDir, `${slug(url)}-${mode}.png`)
				await page.screenshot({ path: file, fullPage: true })
				console.log(`✓ ${mode.padEnd(5)} ${url} -> ${path.relative(appDir, file)}`)
			} catch (error) {
				console.warn(`✗ ${mode.padEnd(5)} ${url}: ${error.message}`)
			} finally {
				await context.close()
			}
		}
	}
} finally {
	await browser.close()
}

console.log(`\nScreenshots written to ${path.relative(appDir, outDir)}/`)
