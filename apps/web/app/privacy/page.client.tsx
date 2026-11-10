'use client'

import { useEffect } from 'react'
import { FooterSection } from '../components/FooterSection'
import { BackLink } from '../components/BackLink'
import { Navigation } from '../components/Navigation'
import styles from '../page.module.scss'
import { useLanguage } from '../components/LanguageProvider'

export function PrivacyPageClient() {
	const { t } = useLanguage()

	useEffect(() => {
		document.title = t.metadata.titleTemplate.replace(
			'%s',
			t.metadata.privacyTitle
		)
	}, [t.metadata.privacyTitle, t.metadata.titleTemplate])

	return (
		<>
			<Navigation>
				<div className={styles.backLinkRow}>
					<BackLink />
				</div>
				<div className={styles.legalPage}>
					<h1>{t.privacy.title}</h1>
					{t.privacy.sections.map((section) => (
						<section key={section.title}>
							<h2>{section.title}</h2>
							{section.lines.map((line) => (
								<p key={line}>{line}</p>
							))}
						</section>
					))}
				</div>
			</Navigation>
			<FooterSection />
		</>
	)
}
