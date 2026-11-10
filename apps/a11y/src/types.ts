export type Position = 'bottom-right' | 'bottom-left' | 'bottom-center'
export type Theme = 'light' | 'dark' | 'auto'

export interface A11yOptions {
	selector?: string
	position?: Position
	theme?: Theme
	primaryColor?: string
	hotkey?: string
	locale?: string
	defaultSettings?: Partial<A11ySettings>
	assetBase?: string
	forceFontFamily?: string
}

export interface A11ySettings {
	fontSize: number // 100 to 200 (percentage)
	/**
	 * "Night Shift" reading mode (warm cream palette, low blue light) — exposed
	 * to users as `toggles.contrast` / "Night Shift". This is NOT a WCAG
	 * high-contrast mode. Mutually exclusive with {@link A11ySettings.theme}
	 * `'dark'`. Field name kept for backwards compatibility with persisted
	 * settings (localStorage).
	 */
	contrast: boolean
	dyslexiaFont: boolean
	readableFont: boolean
	lineHeight: number // 1.0 to 3
	letterSpacing: number // 0 to 10
	reduceMotion: boolean
	highlightLinks: boolean
	theme: Theme
	bigCursor: boolean
	readAloud: boolean
	hideImages: boolean
	magnifier: boolean
}

export interface Area11yInstance {
	destroy: () => void
	updateOptions: (nextOptions: Partial<A11yOptions>) => void
}
