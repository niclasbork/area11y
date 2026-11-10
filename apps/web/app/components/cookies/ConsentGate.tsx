'use client'

import { useEffect, useState } from 'react'

const STORAGE_KEY = 'area11y_cookie_consent'

type ConsentGateProps = {
	children: React.ReactNode
	require?: 'accepted' | 'any'
}

export default function ConsentGate({
	children,
	require = 'accepted',
}: ConsentGateProps) {
	const [consent, setConsent] = useState<string | null>(null)

	useEffect(() => {
		const readConsent = () => {
			setConsent(window.localStorage.getItem(STORAGE_KEY))
		}

		readConsent()
		window.addEventListener('area11y:cookie-consent-changed', readConsent)
		return () =>
			window.removeEventListener(
				'area11y:cookie-consent-changed',
				readConsent
			)
	}, [])

	if (require === 'accepted' && consent !== 'accepted') return null
	if (require === 'any' && consent == null) return null

	return <>{children}</>
}
