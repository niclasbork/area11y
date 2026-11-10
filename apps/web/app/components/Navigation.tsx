'use client'

import type { ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Area11yLogo } from './Area11yLogo'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useLanguage } from './LanguageProvider'
import styles from '../page.module.scss'

const navItems = [
    { href: '/', label: 'Home' },
    { href: '/explore', label: 'Explore' },
    { href: '/docs', label: 'Docs' },
    { href: '/faq', label: 'FAQ' },
]

export function Navigation({ children }: { children: ReactNode }) {
    const { t } = useLanguage()
    const pathname = usePathname()

    return (
        <main className={styles.page}>
            <div className={styles.shell}>
                <header className={styles.navbar} aria-label='Primary navigation'>
                    <Link href='/' className={styles.brand} aria-label={t.header.title}>
                        <Area11yLogo className={styles.brandLogo} />
                    </Link>
                    <nav className={styles.navLinks}>
                        {navItems.map((item) => {
                            const isActive =
                                item.href === '/'
                                    ? pathname === '/'
                                    : pathname.startsWith(item.href)

                            return (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className={isActive ? styles.activeNavLink : undefined}
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    {item.label}
                                </Link>
                            )
                        })}
                    </nav>
                    <div className={styles.navActions}>
                        <LanguageSwitcher />
                        <Link className={styles.signUp} href='/docs'>
                            {t.hero.ctaSecondary}
                        </Link>
                    </div>
                </header>
                {children}
            </div>
        </main>
    )
}
