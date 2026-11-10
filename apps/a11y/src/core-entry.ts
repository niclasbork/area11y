import { initAccessibilityCore } from './AppEntry'

type CoreInitPayload = {
	hostname?: string
	config?: Record<string, unknown>
}

/** Entry point of the hosted core bundle; called by `loader.js`. */
export function init({ config = {} }: CoreInitPayload = {}) {
	const resolvedConfig = config || {}
	const accent =
		typeof resolvedConfig.accent === 'string'
			? resolvedConfig.accent
			: undefined
	const primaryColor =
		typeof resolvedConfig.primaryColor === 'string'
			? resolvedConfig.primaryColor
			: accent
	return initAccessibilityCore({
		...resolvedConfig,
		primaryColor,
	})
}
