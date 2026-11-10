import { A11ySettings } from './types'

export const STORAGE_KEY = 'area11y:settings'
export const STORAGE_KEY_HIDE_MEDIA = 'area11y:hide-media'

const LEGACY_STORAGE_KEY = 'a11y-core:settings'
const LEGACY_STORAGE_KEY_HIDE_MEDIA = 'a11y-core:hide-media'

export function migrateLegacyStorage(): void {
	if (typeof window === 'undefined' || !window.localStorage) return
	try {
		const pairs: Array<[string, string]> = [
			[LEGACY_STORAGE_KEY, STORAGE_KEY],
			[LEGACY_STORAGE_KEY_HIDE_MEDIA, STORAGE_KEY_HIDE_MEDIA],
		]
		for (const [legacy, next] of pairs) {
			const oldValue = window.localStorage.getItem(legacy)
			if (oldValue !== null) {
				if (window.localStorage.getItem(next) === null) {
					window.localStorage.setItem(next, oldValue)
				}
				window.localStorage.removeItem(legacy)
			}
		}
	} catch {
		// localStorage may be unavailable (e.g. SSR, blocked) — ignore
	}
}

export const DEFAULT_SETTINGS: A11ySettings = {
	fontSize: 100,
	contrast: false,
	dyslexiaFont: false,
	readableFont: false,
	lineHeight: 1.4,
	letterSpacing: 0,
	reduceMotion: false,
	highlightLinks: false,
	theme: 'light',
	bigCursor: false,
	readAloud: false,
	hideImages: false,
	magnifier: false,
}
