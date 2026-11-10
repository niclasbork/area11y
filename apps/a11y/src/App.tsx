import { useState, useEffect, useCallback, useMemo, useRef } from 'react'
import { A11yOptions, A11ySettings } from './types'
import { DEFAULT_SETTINGS, STORAGE_KEY, STORAGE_KEY_HIDE_MEDIA } from './constants'
import { A11yService } from './services/A11yService'
import { FloatingButton } from './components/FloatingButton'
import { SettingsPanel } from './components/SettingsPanel'
import { useReadAloud } from './hooks/useReadAloud'
import { getTranslations } from './i18n'

interface AppProps {
	options: A11yOptions
}

const App = ({ options }: AppProps) => {
	const { strings: translations } = useMemo(
		() => getTranslations(options.locale),
		[options.locale]
	)
	const speechLang = useMemo(() => {
		const locale = options.locale?.trim()
		return locale && locale.length > 0 ? locale : translations.speechLang
	}, [options.locale, translations.speechLang])

	const readAloudAnnouncements = translations.readAloudAnnouncements
	// The site's defaults: built-in defaults, then the `theme` option
	// (`data-theme` on the script tag), then explicit `defaultSettings`.
	// Whatever the visitor changed themselves is layered on top (see below).
	const createBaseSettings = useCallback(
		(): A11ySettings => ({
			...DEFAULT_SETTINGS,
			...(options.theme ? { theme: options.theme } : {}),
			...options.defaultSettings,
		}),
		[options.defaultSettings, options.theme]
	)
	const [isOpen, setIsOpen] = useState(false)
	const [settings, setSettings] = useState<A11ySettings>(() => {
		// The visitor's own saved choices win over the site's defaults —
		// otherwise `defaultSettings` would reset them on every page load.
		const baseSettings = createBaseSettings()
		try {
			const saved = localStorage.getItem(STORAGE_KEY)
			if (!saved) return baseSettings
			const parsed = JSON.parse(saved)
			return parsed && typeof parsed === 'object'
				? { ...baseSettings, ...parsed }
				: baseSettings
		} catch (e) {
			// Storage blocked (privacy settings) or corrupt JSON: run on defaults.
			return baseSettings
		}
	})

	// Apply `defaultSettings` that the host changes at runtime (updateOptions).
	// Compared by value so the initial mount doesn't overwrite saved settings.
	const defaultSettingsKey = JSON.stringify(options.defaultSettings ?? null)
	const appliedDefaultsRef = useRef(defaultSettingsKey)
	useEffect(() => {
		if (appliedDefaultsRef.current === defaultSettingsKey) return
		appliedDefaultsRef.current = defaultSettingsKey
		if (!options.defaultSettings) return
		setSettings((prev) => ({ ...prev, ...options.defaultSettings! }))
	}, [defaultSettingsKey, options.defaultSettings])

	useReadAloud({
		enabled: settings.readAloud,
		lang: speechLang,
		announcements: readAloudAnnouncements,
	})

	useEffect(() => {
		try {
			// Persist only what differs from the site's defaults, so a value the
			// visitor never touched keeps following those defaults instead of
			// being frozen as if they had chosen it.
			const base = createBaseSettings()
			const overrides: Partial<Record<keyof A11ySettings, unknown>> = {}
			for (const key of Object.keys(settings) as Array<keyof A11ySettings>) {
				if (settings[key] !== base[key]) overrides[key] = settings[key]
			}
			localStorage.setItem(STORAGE_KEY, JSON.stringify(overrides))
			localStorage.setItem(
				STORAGE_KEY_HIDE_MEDIA,
				String(settings.hideImages)
			)
		} catch {
			// localStorage can throw when storage is blocked or full. Settings
			// then just don't persist — they must still be applied below.
		}
		A11yService.applySettings(settings)
	}, [settings, createBaseSettings])

	// When the theme follows the OS ('auto'), re-apply on live system changes so
	// dark/light switches without a reload.
	useEffect(() => {
		if (settings.theme !== 'auto') return
		if (typeof window.matchMedia !== 'function') return
		const mql = window.matchMedia('(prefers-color-scheme: dark)')
		const onChange = () => A11yService.applySettings(settings)
		mql.addEventListener('change', onChange)
		return () => mql.removeEventListener('change', onChange)
	}, [settings])

	useEffect(() => {
		if (!options.hotkey) return
		const handleKeyDown = (e: KeyboardEvent) => {
			const parts = options
				.hotkey!.split('+')
				.map((part) => part.trim())
				.filter(Boolean)
			if (parts.length === 0) return
			const keyPart = parts[parts.length - 1] // e.g. 'A', '1', 'F2', '/'
			const modifiers = parts.slice(0, -1).map((part) => part.toLowerCase())
			const wanted = keyPart.toLowerCase()

			const needsAlt = modifiers.includes('alt') || modifiers.includes('option')
			const needsCtrl = modifiers.includes('ctrl') || modifiers.includes('control')
			const needsShift = modifiers.includes('shift')
			const needsMeta = modifiers.includes('meta') || modifiers.includes('cmd') // Cmd/Windows key

			// `code` is layout-independent and unaffected by modifiers (Alt+A
			// yields a special character as `key` on macOS); `key` covers
			// everything that is not a plain letter or digit (F-keys, '/', …).
			const matchesKey =
				e.code === `Key${keyPart.toUpperCase()}` ||
				e.code === `Digit${keyPart}` ||
				e.code.toLowerCase() === wanted ||
				e.key.toLowerCase() === wanted

			if (
				matchesKey &&
				e.altKey === needsAlt &&
				e.ctrlKey === needsCtrl &&
				e.shiftKey === needsShift &&
				e.metaKey === needsMeta
			) {
				setIsOpen((prev) => !prev)
				e.preventDefault()
			}
		}
		window.addEventListener('keydown', handleKeyDown)
		return () => window.removeEventListener('keydown', handleKeyDown)
	}, [options.hotkey])

	const updateSettings = useCallback(
		(updates: Partial<A11ySettings>) => {
			setSettings((prev) => {
				const next = { ...prev, ...updates }
				if ('theme' in updates && next.theme === 'dark') {
					next.contrast = false
				}
				if ('contrast' in updates && next.contrast) {
					next.theme = 'light'
				}
				if ('magnifier' in updates && next.magnifier) {
					next.bigCursor = false
				}
				if ('bigCursor' in updates && next.bigCursor) {
					next.magnifier = false
				}
				if ('dyslexiaFont' in updates && next.dyslexiaFont) {
					next.readableFont = false
				}
				if ('readableFont' in updates && next.readableFont) {
					next.dyslexiaFont = false
				}
				return next
			})
		},
		[]
	)
	const handleResetSettings = useCallback(() => {
		const resetSettings = createBaseSettings()
		setSettings(resetSettings)
	}, [createBaseSettings])

	const primaryColor = options.primaryColor || '#2563eb'
	const position = options.position || 'bottom-right'

	return (
		<div className='area11y-wrapper'>
			<FloatingButton
				onClick={() => setIsOpen(!isOpen)}
				isOpen={isOpen}
				position={position}
				primaryColor={primaryColor}
				ariaLabel={translations.floatingButtonLabel}
			/>

			{isOpen && (
				<SettingsPanel
					settings={settings}
					onUpdate={updateSettings}
					onClose={() => setIsOpen(false)}
					position={position}
					primaryColor={primaryColor}
					translations={translations}
					hotkey={options.hotkey}
					onReset={handleResetSettings}
				/>
			)}
		</div>
	)
}

export default App
