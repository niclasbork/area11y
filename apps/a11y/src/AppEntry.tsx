import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { A11yOptions, A11ySettings, Area11yInstance } from './types'
import {
	migrateLegacyStorage,
	STORAGE_KEY,
	STORAGE_KEY_HIDE_MEDIA,
} from './constants'
import { detectDocumentDirection, detectDocumentLanguage } from './i18n'
import tailwindAndFontsCss from './index.scss?inline'
import {
	A11yService,
	DARK_MODE_ACTIVE_CLASS,
	DARK_PALETTE,
	HIDE_MEDIA_ACTIVE_CLASS,
	HIDE_MEDIA_CSS,
	NIGHT_PALETTE,
	NIGHT_SHIFT_ACTIVE_CLASS,
} from './services/A11yService'

export function initAccessibilityCore(
	options: A11yOptions = {}
): Area11yInstance {
	migrateLegacyStorage()

	const { selector = 'body' } = options
	const target = document.querySelector(selector)

	if (!target) {
		console.warn(
			`Area11y: Target "${selector}" nicht gefunden. Nutze <body>.`
		)
	}

	const mountPoint = target || document.body
	const bodyChildHost =
		mountPoint === document.body
			? null
			: (mountPoint.closest('body > *') as HTMLElement | null)
	if (bodyChildHost) {
		bodyChildHost.dataset.area11yHost = 'true'
	}

	const container = document.createElement('div')
	container.id = 'area11y-root'

	Object.assign(container.style, {
		position: 'fixed',
		top: '0',
		left: '0',
		width: '100%',
		height: '100%',
		pointerEvents: 'none',
		zIndex: '2147483647',
		overflow: 'visible',
	})

	mountPoint.appendChild(container)

	const shadow = container.attachShadow({ mode: 'open' })

	try {
		const hideMedia =
			localStorage.getItem(STORAGE_KEY_HIDE_MEDIA) === 'true'
		if (hideMedia) {
			let preHideStyle = document.getElementById(
				'area11y-prehide-media'
			) as HTMLStyleElement | null
			if (!preHideStyle) {
				preHideStyle = document.createElement('style')
				preHideStyle.id = 'area11y-prehide-media'
				preHideStyle.textContent = HIDE_MEDIA_CSS
				document.head.appendChild(preHideStyle)
			}
			// Same class + rule applySettings() uses, so images never flash in
			// before React mounts. applySettings() removes this bridge style.
			document.documentElement.classList.add(HIDE_MEDIA_ACTIVE_CLASS)
		}
	} catch (error) {
		// ignore storage access failures
	}

	// Pre-paint dark/night: apply the html class + a minimal background/text
	// baseline from persisted settings BEFORE React mounts, so a saved dark
	// theme doesn't flash the page white on every load. applySettings() injects
	// the full baseline + per-element pass shortly after.
	try {
		const raw = localStorage.getItem(STORAGE_KEY)
		{
			// Same precedence as App: site defaults, then the visitor's saved
			// overrides (only values that differ from the defaults are stored).
			const saved: Partial<A11ySettings> = {
				...(options.theme ? { theme: options.theme } : {}),
				...options.defaultSettings,
				...(raw ? (JSON.parse(raw) as Partial<A11ySettings>) : {}),
			}
			const prefersDark =
				typeof window.matchMedia === 'function' &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			const isNight = saved.contrast === true
			const isDark =
				!isNight &&
				(saved.theme === 'dark' ||
					(saved.theme === 'auto' && prefersDark))
			if (isNight || isDark) {
				const cls = isNight
					? NIGHT_SHIFT_ACTIVE_CLASS
					: DARK_MODE_ACTIVE_CLASS
				const palette = isNight ? NIGHT_PALETTE : DARK_PALETTE
				document.documentElement.classList.add(cls)
				let preTheme = document.getElementById(
					'area11y-prepaint-theme'
				) as HTMLStyleElement | null
				if (!preTheme) {
					preTheme = document.createElement('style')
					preTheme.id = 'area11y-prepaint-theme'
					preTheme.innerHTML = `
						html.${cls} {
							color-scheme: ${isNight ? 'light' : 'dark'};
							background-color: ${palette.bg};
						}
						html.${cls} body {
							background-color: ${palette.bg} !important;
							color: ${palette.text} !important;
						}
					`
					document.head.appendChild(preTheme)
				}
			}
		}
	} catch (error) {
		// ignore storage / parse failures
	}

	const assetBase = options.assetBase?.replace(/\/$/, '')
	const resolvedCss = assetBase
		? tailwindAndFontsCss.replace(
				/url\((['"]?)\/(fonts|image)\//g,
				`url($1${assetBase}/$2/`
		  )
		: tailwindAndFontsCss

	if (assetBase) {
		A11yService.setAssetBase(assetBase)
	}

	const fontFaceCss = (resolvedCss.match(/@font-face[^}]+}/g) || []).join(
		'\n'
	)
	if (fontFaceCss) {
		let fontStyle = document.getElementById(
			'area11y-fonts'
		) as HTMLStyleElement | null
		if (!fontStyle) {
			fontStyle = document.createElement('style')
			fontStyle.id = 'area11y-fonts'
			document.head.appendChild(fontStyle)
		}
		fontStyle.innerHTML = fontFaceCss
	}

	const widgetFontFamily = (options.forceFontFamily || 'Geist').replace(
		/"/g,
		'\\"'
	)

	const tailwindStyle = document.createElement('style')
	tailwindStyle.innerHTML = resolvedCss
	shadow.appendChild(tailwindStyle)

	const rootElement = document.createElement('div')
	rootElement.id = 'app-root'
	rootElement.style.pointerEvents = 'auto'
	shadow.appendChild(rootElement)

	document.documentElement.style.setProperty(
		'--area11y-accent',
		options.primaryColor || '#2563eb'
	)

	const detectedLang = detectDocumentLanguage()
	const initialLang = (options.locale || detectedLang).trim()
	const pageDir = detectDocumentDirection(initialLang)
	rootElement.setAttribute('lang', initialLang || 'en')
	rootElement.setAttribute('dir', pageDir)

	const styleOverride = document.createElement('style')
	styleOverride.innerHTML = `
    :host {
      all: initial;
      display: block;
    }
    #app-root {
      /* Expliziter Reset gegen Host-Injektionen */
      font-family: "${widgetFontFamily}", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      font-size: 16px !important;
      line-height: 1.4 !important;
      letter-spacing: normal !important;
      filter: none !important;
      text-decoration: none !important;
      color: #1a1a1a;
      pointerEvents: auto;
    }
    #app-root * {
      box-sizing: border-box;
      /* Verhindert das Erben von Filtern wie Kontrast */
      filter: none !important;
    }
    #app-root pre, #app-root code, #app-root kbd, #app-root samp {
      font-family: ui-monospace, SFMono-Regular, SFMono, Menlo, Consolas, "Liberation Mono", monospace;
    }
    #app-root table, #app-root thead, #app-root tbody, #app-root tfoot, #app-root tr, #app-root th, #app-root td {
      font-family: ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif;
    }
    
    @keyframes slide-in-from-bottom-4 {
      from { transform: translateY(1rem) translateX(-50%); opacity: 0; }
      to { transform: translateY(0) translateX(-50%); opacity: 1; }
    }

    .animate-in { animation: slide-in-from-bottom-4 0.3s ease-out; }

    /* Custom Scrollbar Styles for the Settings Panel */
    #app-root .flex-1.overflow-y-scroll::-webkit-scrollbar-track {
      background-color: transparent; /* Make track transparent or subtle */
      border-radius: 10px; /* Rounded corners for track */
    }

    #app-root .flex-1.overflow-y-scroll::-webkit-scrollbar-thumb {
      background-color: ${options.primaryColor || '#2563eb'};
      border-radius: 9999px; /* Max rounded corners for thumb */
      border: 3px solid transparent; /* Keeps thumb smaller than track */
      background-clip: padding-box; /* Ensures border-radius applies to visible part */
    }

    /* For Firefox (less customization options) */
    #app-root .flex-1.overflow-y-scroll {
      scrollbar-width: thin;
      scrollbar-color: ${options.primaryColor || '#2563eb'} transparent;
    }
  `
	shadow.appendChild(styleOverride)

	const root = ReactDOM.createRoot(rootElement)

	let currentOptions: A11yOptions = {
		...options,
		locale: initialLang || undefined,
	}
	let manualLocale =
		typeof options.locale === 'string' && options.locale.trim().length > 0
	let lastObservedLocale = initialLang

	const applyOptions = (nextOptions: Partial<A11yOptions>) => {
		if (nextOptions.locale) {
			const nextDir = detectDocumentDirection(nextOptions.locale)
			rootElement.setAttribute('lang', nextOptions.locale)
			rootElement.setAttribute('dir', nextDir)
		}
		if (nextOptions.primaryColor) {
			document.documentElement.style.setProperty(
				'--area11y-accent',
				nextOptions.primaryColor
			)
		}
		currentOptions = { ...currentOptions, ...nextOptions }
		renderApp(currentOptions)
	}

	const renderApp = (opts: A11yOptions) => {
		root.render(
			<React.StrictMode>
				<App options={opts} />
			</React.StrictMode>
		)
	}

	renderApp(currentOptions)

	const documentLangObserver = (() => {
		if (manualLocale) return null
		const htmlElement = document.documentElement
		if (!htmlElement) return null

		const observer = new MutationObserver(() => {
			const nextLang = detectDocumentLanguage().trim()
			if (!nextLang || nextLang === lastObservedLocale || manualLocale) return
			lastObservedLocale = nextLang
			applyOptions({ locale: nextLang })
		})

		observer.observe(htmlElement, {
			attributes: true,
			attributeFilter: ['lang'],
		})

		return observer
	})()

	return {
		destroy: () => {
			documentLangObserver?.disconnect()
			root.unmount()
			container.remove()
			// Leave the host page exactly as we found it: undo every style,
			// class, observer and listener the widget applied. The user's saved
			// settings stay in localStorage and are re-applied on the next init().
			A11yService.clearSettings()
			document.getElementById('area11y-fonts')?.remove()
			document.documentElement.style.removeProperty('--area11y-accent')
			if (bodyChildHost) {
				delete bodyChildHost.dataset.area11yHost
			}
		},
		updateOptions: (nextOptions: Partial<A11yOptions>) => {
			if (nextOptions.locale) {
				manualLocale = true
			}
			applyOptions(nextOptions)
		},
	}
}
