'use client'

import { useEffect } from 'react'
import { FooterSection } from '../components/FooterSection'
import { BackLink } from '../components/BackLink'
import { Navigation } from '../components/Navigation'
import styles from '../page.module.scss'
import { useLanguage } from '../components/LanguageProvider'

export function ImprintPageClient() {
	const { t } = useLanguage()

	useEffect(() => {
		document.title = t.metadata.titleTemplate.replace(
			'%s',
			t.metadata.imprintTitle
		)
	}, [t.metadata.imprintTitle, t.metadata.titleTemplate])

	return (
		<>
			<Navigation>
				<div className={styles.backLinkRow}>
					<BackLink />
				</div>
				<div className={styles.legalPage}>
					<h1>{t.imprint.title}</h1>
					{t.imprint.sections.map((section) => (
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
