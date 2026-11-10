'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { FooterSection } from './components/FooterSection'
import { Navigation } from './components/Navigation'
import { useLanguage } from './components/LanguageProvider'
import styles from './page.module.scss'

export function HomePageClient() {
    const { t } = useLanguage()
    const [copied, setCopied] = useState(false)

    const copyInstallCommand = async () => {
        try {
            await navigator.clipboard.writeText(t.readme.sections.npm.codeInstall)
            setCopied(true)
            window.setTimeout(() => setCopied(false), 1800)
        } catch (error) {
            console.error('Copy failed', error)
        }
    }

    useEffect(() => {
        document.title = t.metadata.titleTemplate.replace(
            '%s',
            t.metadata.homeTitle
        )
    }, [t.metadata.homeTitle, t.metadata.titleTemplate])

    return (
        <>
            <Navigation>
                <section className={styles.hero}>
                    <Image
                        className={styles.heroImage}
                        src='/hero-ghibli-water-reflection.webp'
                        alt=''
                        fill
                        priority
                        sizes='(max-width: 1200px) 100vw, 1200px'
                    />

                    <div className={styles.heroCard}>
                        <h1>{t.hero.heading}</h1>
                        <p className={styles.lead}>{t.header.subtitle}</p>

                        <div className={styles.terminal} aria-label='npm install command'>
                            <div className={styles.promptLine}>
                                <span className={styles.prompt}>$</span>
                                <code>{t.readme.sections.npm.codeInstall}</code>
                                <button
                                    type='button'
                                    className={styles.terminalCopy}
                                    aria-label={t.buttons.copyAria}
                                    onClick={() => void copyInstallCommand()}
                                >
                                    <svg width='12' height='12' viewBox='0 0 24 24' aria-hidden='true'>
                                        <path
                                            d='M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z'
                                            fill='currentColor'
                                        />
                                    </svg>
                                    <span>{copied ? t.buttons.copied : t.buttons.copy}</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </Navigation>
            <FooterSection />
        </>
    )
}
