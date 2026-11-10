'use client'

import {
	createContext,
	useContext,
	useEffect,
	useMemo,
	useState,
	type ReactNode,
} from 'react'
import de from '../locales/de.json'
import en from '../locales/en.json'

const translations = { de, en } as const
type Language = keyof typeof translations
type Translations = (typeof translations)[Language]

type LanguageContextValue = {
	language: Language
	setLanguage: (language: Language) => void
	t: Translations
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
	const [language, setLanguageState] = useState<Language>('de')

	useEffect(() => {
		const stored = window.localStorage.getItem('area11y-language')
		if (stored === 'de' || stored === 'en') {
			setLanguageState(stored)
		}
	}, [])

	const setLanguage = (next: Language) => {
		setLanguageState(next)
		window.localStorage.setItem('area11y-language', next)
	}
	useEffect(() => {
		// Drive the host page's <html lang>. The embedded widget reads this
		// attribute itself (detectDocumentLanguage + MutationObserver) and
		// translates its menu accordingly. We intentionally do NOT push the
		// locale into the widget via updateOptions(), because that would set
		// the widget's manualLocale flag and disable its own <html lang>
		// detection.
		document.documentElement.lang = language === 'de' ? 'de' : 'en-US'
	}, [language])

	const value = useMemo(
		() => ({
			language,
			setLanguage,
			t: translations[language],
		}),
		[language]
	)

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	)
}

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (!context) {
		throw new Error('useLanguage must be used within LanguageProvider')
	}
	return context
}
