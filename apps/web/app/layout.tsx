import Script from 'next/script'
import './globals.scss'
import type { ReactNode } from 'react'
import { GeistSans } from 'geist/font/sans'
import { ConsoleMessage } from './components/ConsoleMessage'
import { LanguageProvider } from './components/LanguageProvider'
import type { Metadata } from 'next'
import { getTranslations } from './seo'
import Ga4 from './components/Ga4'
import CookieConsent from './components/cookies/CookieConsent'
import ConsentGate from './components/cookies/ConsentGate'

const t = getTranslations()
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://area11y.com'
const engineUrl =
    process.env.NEXT_PUBLIC_ENGINE_URL ||
    (process.env.NODE_ENV === 'development'
        ? 'http://localhost:3001'
        : 'https://engine.area11y.com')

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
        default: t.metadata.siteTitle,
        template: t.metadata.titleTemplate,
    },
    description: t.metadata.siteDescription,
    openGraph: {
        type: 'website',
        title: t.metadata.siteTitle,
        description: t.metadata.siteDescription,
        url: siteUrl,
        siteName: t.metadata.siteName,
    },
    twitter: {
        card: 'summary_large_image',
    },
    icons: {
        icon: [
            { url: '/favicon.png', type: 'image/png' },
            { url: '/icon.png', type: 'image/png', sizes: '512x512' },
        ],
        shortcut: '/favicon.png',
        apple: '/icon.png',
    },
    verification: {
        google: 'nw9wilh2f89wcz7wdn7N9XLHha43YqagR0PScu4Fm5k',
    },
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html
            lang='en'
            className={`${GeistSans.variable} ${GeistSans.className}`}
        >
            <body>
                <ConsentGate>
                    <Ga4 />
                </ConsentGate>
                <LanguageProvider>
                    <Script
                        src={`${engineUrl}/loader.js`}
                        strategy='afterInteractive'
                        data-hotkey='Alt+A'
                        data-primary-color='#2563eb'
                        data-engine={engineUrl}
                    />
                    {children}
                    <CookieConsent />
                </LanguageProvider>
            </body>
            <ConsoleMessage />
        </html>
    )
}
