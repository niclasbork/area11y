import { destroy, init, setLanguage, updateOptions } from './index'
import type { Position } from './types'

declare global {
	interface Window {
		Area11y?: {
			init: typeof init
			destroy: typeof destroy
			setLanguage: typeof setLanguage
			updateOptions: typeof updateOptions
		}
	}
}

if (typeof window !== 'undefined') {
	window.Area11y = { init, destroy, setLanguage, updateOptions }
}

if (typeof document !== 'undefined') {
	const currentScript = document.currentScript as HTMLScriptElement | null

	if (currentScript) {
		const dataset = currentScript.dataset

		init({
			position: dataset.position as Position | undefined,
			locale: dataset.locale,
			primaryColor: dataset.primaryColor,
			hotkey: dataset.hotkey,
			theme:
				dataset.theme === 'dark' ||
				dataset.theme === 'light' ||
				dataset.theme === 'auto'
					? dataset.theme
					: undefined,
		})
	} else {
		console.warn('Area11y script: could not find current <script> element')
	}
}
