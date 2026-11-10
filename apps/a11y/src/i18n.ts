import i18next from 'i18next'
import enWidget from './locales/en.json'
import deWidget from './locales/de.json'
import frWidget from './locales/fr.json'
import esWidget from './locales/es.json'
import itWidget from './locales/it.json'
import nlWidget from './locales/nl.json'
import ptWidget from './locales/pt.json'
import plWidget from './locales/pl.json'
import trWidget from './locales/tr.json'
import ruWidget from './locales/ru.json'
import arWidget from './locales/ar.json'
import zhWidget from './locales/zh.json'
import jaWidget from './locales/ja.json'

export type SupportedLocale =
	| 'de'
	| 'en'
	| 'fr'
	| 'es'
	| 'it'
	| 'nl'
	| 'pt'
	| 'pl'
	| 'tr'
	| 'ru'
	| 'ar'
	| 'zh'
	| 'ja'
export type WidgetTranslations = typeof enWidget

const resources = {
	en: { widget: enWidget },
	de: { widget: deWidget },
	fr: { widget: frWidget },
	es: { widget: esWidget },
	it: { widget: itWidget },
	nl: { widget: nlWidget },
	pt: { widget: ptWidget },
	pl: { widget: plWidget },
	tr: { widget: trWidget },
	ru: { widget: ruWidget },
	ar: { widget: arWidget },
	zh: { widget: zhWidget },
	ja: { widget: jaWidget },
}

const RTL_LANGS = new Set(['ar', 'fa', 'he', 'ur'])

const i18nInstance = i18next.createInstance()

i18nInstance.init({
	fallbackLng: 'en',
	resources,
	defaultNS: 'widget',
	interpolation: { escapeValue: false },
	initImmediate: false,
})

export function resolveLocale(lang?: string): SupportedLocale {
	const normalized = (lang || '').toLowerCase()
	if (normalized.startsWith('de')) {
		return 'de'
	}
	if (normalized.startsWith('fr')) {
		return 'fr'
	}
	if (normalized.startsWith('es')) {
		return 'es'
	}
	if (normalized.startsWith('it')) {
		return 'it'
	}
	if (normalized.startsWith('nl')) {
		return 'nl'
	}
	if (normalized.startsWith('pt')) {
		return 'pt'
	}
	if (normalized.startsWith('pl')) {
		return 'pl'
	}
	if (normalized.startsWith('tr')) {
		return 'tr'
	}
	if (normalized.startsWith('ru')) {
		return 'ru'
	}
	if (normalized.startsWith('ar')) {
		return 'ar'
	}
	if (normalized.startsWith('zh')) {
		return 'zh'
	}
	if (normalized.startsWith('ja')) {
		return 'ja'
	}
	return 'en'
}

export function detectDocumentLanguage(): string {
	if (typeof document === 'undefined') {
		if (typeof navigator !== 'undefined' && navigator.language) {
			return navigator.language
		}
		return 'en'
	}

	const htmlLang = document.documentElement.getAttribute('lang')
	if (htmlLang && htmlLang.trim()) return htmlLang

	const metaLang = document
		.querySelector('meta[name="language"]')
		?.getAttribute('content')
	if (metaLang && metaLang.trim()) return metaLang

	if (typeof navigator !== 'undefined' && navigator.language) {
		return navigator.language
	}

	return 'en'
}

export function detectDocumentDirection(lang?: string): 'ltr' | 'rtl' {
	if (typeof document !== 'undefined') {
		const attr =
			document.documentElement.getAttribute('dir') ||
			document.body?.getAttribute('dir')
		if (attr === 'ltr' || attr === 'rtl') {
			return attr
		}
	}

	if (!lang) return 'ltr'
	const normalized = lang.toLowerCase()
	const base = normalized.split('-')[0]
	return RTL_LANGS.has(base) ? 'rtl' : 'ltr'
}

export function getTranslations(lang?: string): {
	locale: SupportedLocale
	strings: WidgetTranslations
} {
	const locale = resolveLocale(lang)
	if (i18nInstance.language !== locale) {
		// changeLanguage can be sync with initImmediate=false, but we ignore the promise for safety
		const result = i18nInstance.changeLanguage(locale)
		if (result instanceof Promise) {
			result.catch(() => {
				/* ignore */
			})
		}
	}
	const strings = i18nInstance.getResourceBundle(
		locale,
		'widget'
	) as WidgetTranslations
	return {
		locale,
		strings,
	}
}
