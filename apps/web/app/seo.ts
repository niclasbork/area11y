import de from './locales/de.json'
import en from './locales/en.json'

const translations = { de, en } as const

export type Locale = keyof typeof translations

export const getTranslations = (locale: Locale = 'de') => translations[locale]
