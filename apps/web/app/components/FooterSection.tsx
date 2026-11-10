'use client'

import Link from 'next/link'
import styles from './FooterSection.module.scss'
import { useLanguage } from './LanguageProvider'

export function FooterSection() {
    const { t } = useLanguage()

    const handleCookieSettings = () => {
        window.localStorage.removeItem('area11y_cookie_consent')
        window.dispatchEvent(new Event('area11y:cookie-consent-changed'))
    }

    return (
        <footer className={styles.footer}>
            <div>
                <div className={styles.meta}>
                    <p>&copy; {new Date().getFullYear()} area11y</p>
                    <Link href='https://niclasbork.com/' target='_blank'>
                        {t.footer.brandLabel}
                    </Link>
                </div>
                <p>{t.footer.meta}</p>
            </div>
            <nav className={styles.nav}>
                <Link href='/imprint'>{t.footer.links.imprint}</Link>
                <Link href='/privacy'>{t.footer.links.privacy}</Link>
                <Link href='/accessibility'>{t.footer.links.accessibility}</Link>
                <a
                    href='#'
                    className={styles.linkButton}
                    onClick={(event) => {
                        event.preventDefault()
                        handleCookieSettings()
                    }}
                >
                    {t.footer.links.cookies}
                </a>
            </nav>
            <div className={styles.logos}>
                {t.footer.logos.map((logo) => (
                    <span key={logo}>{logo}</span>
                ))}
            </div>
        </footer>
    )
}
