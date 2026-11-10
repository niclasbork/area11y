import { initAccessibilityCore } from './AppEntry'
import { loadA11Y } from './loaderClient'
import type { Area11yInstance, A11yOptions } from './types'

let instance: Area11yInstance | null = null

export function init(options: A11yOptions = {}) {
	destroy()
	instance = initAccessibilityCore(options)
	return instance
}

export function destroy() {
	if (instance) {
		instance.destroy()
		instance = null
	}
}

export function setLanguage(locale: string) {
	instance?.updateOptions({ locale })
}

export function updateOptions(next: Partial<A11yOptions>) {
	instance?.updateOptions(next)
}

export type { A11yOptions }
export { loadA11Y }

export default {
	init,
	destroy,
	setLanguage,
	updateOptions,
}
