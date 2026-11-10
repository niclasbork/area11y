'use client'

import { useEffect, useState } from 'react'
import styles from './CookieConsent.module.scss'
import { useLanguage } from '../LanguageProvider'

const STORAGE_KEY = 'area11y_cookie_consent'

export default function CookieConsent() {
	const [visible, setVisible] = useState(false)
	const { t } = useLanguage()

	useEffect(() => {
		const syncConsent = () => {
			const stored = window.localStorage.getItem(STORAGE_KEY)
			setVisible(stored == null)
		}

		syncConsent()
		window.addEventListener('area11y:cookie-consent-changed', syncConsent)
		return () =>
			window.removeEventListener(
				'area11y:cookie-consent-changed',
				syncConsent
			)
	}, [])

	const handleChoice = (value: 'accepted' | 'declined') => {
		window.localStorage.setItem(STORAGE_KEY, value)
		window.dispatchEvent(new Event('area11y:cookie-consent-changed'))
		setVisible(false)
	}

	if (!visible) return null

	return (
		<div
			role='dialog'
			aria-live='polite'
			aria-label='Cookie-Einwilligung'
			className={styles.banner}
		>
			<p className={styles.text}>{t.cookies.message}</p>
			<div className={styles.actions}>
				<button
					type='button'
					className={styles.primaryButton}
					onClick={() => handleChoice('accepted')}
				>
					{t.cookies.accept}
				</button>
				<button
					type='button'
					className={styles.secondaryButton}
					onClick={() => handleChoice('declined')}
				>
					{t.cookies.decline}
				</button>
			</div>
		</div>
	)
}
