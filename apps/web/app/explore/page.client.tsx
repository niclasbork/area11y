'use client'

import { useEffect } from 'react'
import { Explanation } from '../components/Explanation'
import { FooterSection } from '../components/FooterSection'
import { Navigation } from '../components/Navigation'
import { useLanguage } from '../components/LanguageProvider'
import heroStyles from '../components/Hero.module.scss'
import styles from '../page.module.scss'

export function ExplorePageClient() {
    const { t } = useLanguage()

    useEffect(() => {
        document.title = t.metadata.titleTemplate.replace('%s', 'Explore')
    }, [t.metadata.titleTemplate])

    return (
        <>
            <Navigation>
                <section className={`${styles.darkSection} ${styles.routeSection}`}>
                    <div className={styles.sectionIntro}>
                        <h1>{t.story.title}</h1>
                        <p>{t.story.body[0] as string}</p>
                    </div>
                    <div className={styles.storyGrid}>
                        {(t.story.body as string[]).slice(1).map((paragraph) => (
                            <p key={paragraph}>{paragraph}</p>
                        ))}
                    </div>
                    <div className={heroStyles.container}>
                        <Explanation
                            variant='three'
                            items={t.hero.overlay.sections.flatMap((section) =>
                                section.items.map((item) => ({
                                    explanation: [item.title, item.description],
                                }))
                            )}
                        />
                    </div>
                </section>
            </Navigation>
            <FooterSection />
        </>
    )
}
