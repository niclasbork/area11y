'use client'

import { useEffect } from 'react'
import { FooterSection } from '../components/FooterSection'
import { Navigation } from '../components/Navigation'
import { ReadmeContent } from '../components/ReadmeContent'
import { useLanguage } from '../components/LanguageProvider'
import styles from '../page.module.scss'

export function DocsPageClient() {
    const { t } = useLanguage()

    useEffect(() => {
        document.title = t.metadata.titleTemplate.replace('%s', t.readme.title)
    }, [t.metadata.titleTemplate, t.readme.title])

    return (
        <>
            <Navigation>
                <section className={`${styles.docSection} ${styles.routeSection}`}>
                    <ReadmeContent />
                </section>
            </Navigation>
            <FooterSection />
        </>
    )
}
