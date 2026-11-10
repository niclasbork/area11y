'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './LanguageSwitcher.module.scss'
import { useLanguage } from './LanguageProvider'

export function LanguageSwitcher() {
	const rootRef = useRef<HTMLDivElement>(null)
	const { language, setLanguage, t } = useLanguage()
	const [open, setOpen] = useState(false)

	const handleSelect = (code: typeof language) => {
		setLanguage(code)
		setOpen(false)
	}

	useEffect(() => {
		if (!open) return
		const handleClick = (event: MouseEvent) => {
			if (!rootRef.current) return
			if (!rootRef.current.contains(event.target as Node)) {
				setOpen(false)
			}
		}
		document.addEventListener('pointerdown', handleClick)
		return () => document.removeEventListener('pointerdown', handleClick)
	}, [open])

	return (
		<div className={styles.switcher} ref={rootRef}>
			<div className={styles.inner}>
				<button
					type='button'
					className={styles.toggle}
					onClick={() => setOpen((prev) => !prev)}
					aria-haspopup='true'
					aria-expanded={open}
				>
					<svg
						viewBox='0 0 24 24'
						aria-hidden='true'
						className={styles.icon}
					>
						<circle cx='12' cy='12' r='9' />
						<path d='M3 12h18' />
						<path d='M12 3a13.5 13.5 0 0 1 0 18a13.5 13.5 0 0 1 0-18z' />
					</svg>
					<span>{language.toUpperCase()}</span>
				</button>
				{open && (
					<div className={styles.dropdown} role='menu'>
						{Object.entries(t.languageSwitcher.languages).map(
							([code, label]) => (
								<button
									key={code}
									type='button'
									onClick={() => handleSelect(code as typeof language)}
									className={styles.dropdownItem}
									role='menuitem'
									aria-pressed={language === code}
								>
									{label}
								</button>
							)
						)}
					</div>
				)}
			</div>
		</div>
	)
}
