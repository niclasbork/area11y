'use client'

import Link from 'next/link'
import styles from './BackLink.module.scss'
import { useLanguage } from './LanguageProvider'

export function BackLink() {
	const { t } = useLanguage()

	return (
		<Link href='/' className={styles.backLink}>
			<span className={styles.arrow} aria-hidden='true'>←</span>
			<span className={styles.label}>{t.common.backToHome}</span>
		</Link>
	)
}
