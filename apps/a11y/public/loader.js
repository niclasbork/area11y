(function () {
	const script =
		document.currentScript ||
		document.querySelector('script[src*="/loader.js"]')

	if (!script) {
		console.warn('Area11y loader: script tag not found')
		return
	}

	const {
		theme,
		accent,
		primaryColor,
		position,
		hotkey,
		hotKey,
		locale,
		engine,
		assetBase,
		forceFont,
		telemetry,
	} = script.dataset || {}

	const hostname = window.location.hostname
		.toLowerCase()
		.replace(/^www\./, '')
	const engineOrigin = (
		(engine && engine.trim()) ||
		new URL(script.src).origin
	).replace(/\/$/, '')

	const overrides = {
		theme,
		accent: accent || primaryColor,
		position,
		hotkey: hotkey || hotKey,
		locale,
		assetBase: assetBase || engineOrigin,
		forceFontFamily: forceFont || undefined,
	}

	const config = Object.fromEntries(
		Object.entries(overrides).filter(([, value]) => value != null && value !== '')
	)

	// Anonymous usage ping: tells area11y which domain uses the widget, nothing
	// else. The server reads the domain from the request's Origin header; the
	// body only carries the widget version. No cookies, no page URL, no visitor
	// data. Never blocks the widget.
	//
	// Sent for a random sample of page views (about 1 in PING_SAMPLE) instead
	// of "once per day": that needs no marker stored on the visitor's device.
	// Storing something there purely for statistics would require consent
	// under ePrivacy rules (in Germany § 25 TDDDG). Every site still shows up;
	// low-traffic sites just take a few more page views.
	// Opt out with data-telemetry="off" on the script tag.
	const PING_SAMPLE = 20
	const telemetryOff = ['off', 'false', '0', 'no'].includes(
		String(telemetry || '')
			.trim()
			.toLowerCase()
	)

	function ping(version) {
		if (telemetryOff) return
		try {
			// Earlier loaders kept a daily marker; remove it where it exists.
			window.localStorage.removeItem('area11y:ping')
		} catch (error) {
			/* storage blocked — nothing to clean up */
		}
		if (Math.random() >= 1 / PING_SAMPLE) return
		try {
			// text/plain keeps this a "simple" request (no CORS preflight).
			fetch(`${engineOrigin}/api/ping`, {
				method: 'POST',
				headers: { 'Content-Type': 'text/plain' },
				body: JSON.stringify({ version }),
				credentials: 'omit',
				keepalive: true,
			}).catch(function () {})
		} catch (error) {
			/* best effort */
		}
	}

	fetch(`${engineOrigin}/core/latest.json`, { credentials: 'omit' })
		.then((res) => {
			if (!res.ok) throw new Error('could not resolve core version')
			return res.json()
		})
		.then(async ({ version }) => {
			if (!version) throw new Error('core version missing')
			const url = new URL(`/core/core.v${version}.js`, engineOrigin)
			const core = await import(url.toString())
			if (typeof core.init !== 'function') {
				console.warn('Area11y loader: core init() not found')
				return
			}
			const instance = core.init({ hostname, config })
			window.Area11y = core
			window.Area11yInstance = instance
			const pendingLocale = window.__area11yPendingLocale
			if (pendingLocale && instance && instance.updateOptions) {
				instance.updateOptions({ locale: pendingLocale })
				delete window.__area11yPendingLocale
			}
			ping(String(version))
		})
		.catch((error) => {
			console.warn('Area11y loader:', error)
		})
})()
