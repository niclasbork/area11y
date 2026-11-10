// Hosted area11y engine. Fixed — consumers don't configure this.
const ENGINE_URL = 'https://engine.area11y.com'

export type LoaderOptions = {
	position?: 'bottom-right' | 'bottom-left' | 'bottom-center'
	primaryColor?: string
	hotkey?: string
	locale?: string
	/** Page theme for visitors who have not chosen one themselves. */
	theme?: 'light' | 'dark' | 'auto'
	/**
	 * The hosted loader sends an anonymous ping (the site's domain and the
	 * widget version, for a random sample of page views) so the project can see
	 * where area11y is used. Set to `false` to turn it off.
	 */
	telemetry?: boolean
}

export function loadA11Y(options: LoaderOptions = {}) {
	const script = document.createElement('script')
	script.src = `${ENGINE_URL}/loader.js`
	script.defer = true
	if (options.primaryColor) script.dataset.primaryColor = options.primaryColor
	if (options.position) script.dataset.position = options.position
	if (options.hotkey) script.dataset.hotkey = options.hotkey
	if (options.locale) script.dataset.locale = options.locale
	if (options.theme) script.dataset.theme = options.theme
	if (options.telemetry === false) script.dataset.telemetry = 'off'
	document.head.appendChild(script)
}
