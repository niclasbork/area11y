'use client'

import { useEffect } from 'react'
import { FooterSection } from '../components/FooterSection'
import { Navigation } from '../components/Navigation'
import { useLanguage } from '../components/LanguageProvider'
import styles from '../page.module.scss'

export function FaqPageClient() {
    const { t } = useLanguage()

    useEffect(() => {
        document.title = t.metadata.titleTemplate.replace('%s', t.faq.title)
    }, [t.metadata.titleTemplate, t.faq.title])

    return (
        <>
            <Navigation>
                <section className={`${styles.faqSection} ${styles.routeSection}`}>
                    <div className={styles.sectionIntro}>
                        <h1>{t.faq.title}</h1>
                    </div>
                    <div className={styles.faqList}>
                        {t.faq.items.map((item) => (
                            <details key={item.question} className={styles.faqItem}>
                                <summary>
                                    <span>{item.question}</span>
                                    <svg
                                        className={styles.faqChevron}
                                        width='16'
                                        height='16'
                                        viewBox='0 0 16 16'
                                        aria-hidden='true'
                                    >
                                        <path
                                            d='M4 6l4 4 4-4'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeWidth='1.5'
                                            strokeLinecap='round'
                                            strokeLinejoin='round'
                                        />
                                    </svg>
                                </summary>
                                <p>{item.answer}</p>
                            </details>
                        ))}
                    </div>
                </section>
            </Navigation>
            <FooterSection />
        </>
    )
}
