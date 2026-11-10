'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Explanation } from './Explanation'
import styles from './Hero.module.scss'
import { useLanguage } from './LanguageProvider'

type OverlayState = 'hidden' | 'enter' | 'leave'

export function Hero() {
    const { t } = useLanguage()
    const [overlayState, setOverlayState] = useState<OverlayState>('hidden')

    const openPanel = () => {
        setOverlayState('enter')
    }

    const scrollToBuy = () => {
        document.getElementById('buy-section')?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        })
    }

    const closePanel = () => {
        setOverlayState('leave')
    }

    const overlayRef = useRef<HTMLDivElement | null>(null)

    const isFromWidget = useCallback((event: Event) => {
        const path = event.composedPath ? event.composedPath() : []
        return path.some(
            (node) => node instanceof HTMLElement && node.id === 'area11y-root'
        )
    }, [])

    const handleOutsideClick = useCallback(
        (event: MouseEvent) => {
            if (overlayState === 'hidden') {
                return
            }

            if (isFromWidget(event)) {
                return
            }

            const target = event.target as Node
            const content = overlayRef.current

            if (content && !content.contains(target)) {
                closePanel()
            }
        },
        [overlayState]
    )

    const handleKeyDown = useCallback(
        (event: KeyboardEvent) => {
            if (event.key === 'Escape' && overlayState !== 'hidden') {
                if (isFromWidget(event)) {
                    return
                }
                event.preventDefault()
                closePanel()
            }
        },
        [overlayState, isFromWidget]
    )

    useEffect(() => {
        if (overlayState === 'hidden') {
            return
        }

        document.addEventListener('mousedown', handleOutsideClick)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [overlayState, handleOutsideClick, handleKeyDown])

    useEffect(() => {
        const html = document.documentElement

        if (overlayState !== 'hidden') {
            html.style.overflow = 'hidden'
        } else {
            html.style.overflow = ''
        }

        return () => {
            html.style.overflow = ''
        }
    }, [overlayState])

    useEffect(() => {
        if (overlayState === 'leave') {
            const timer = window.setTimeout(() => {
                setOverlayState('hidden')
            }, 450)

            return () => window.clearTimeout(timer)
        }
    }, [overlayState])

    return (
        <section className={styles.hero}>
            <h2 className={styles.heading}>{t.hero.heading}</h2>
            <div className={styles.media}>
                <div className={styles.mockCard}>
                    <div className={styles.imageContainer}>
                        <Image
                            src='/matrix_ghibli.png'
                            alt=''
                            fill
                            priority
                            sizes='(max-width: 1024px) 100vw, 1024px'
                            className={styles.heroImage}
                        />
                    </div>
                    <button
                        type='button'
                        className={styles.cta}
                        onClick={openPanel}
                        aria-label={t.hero.ctaPrimary}
                    >
                        {t.hero.ctaPrimary}
                        <span aria-hidden='true'>👋</span>
                    </button>
                    <button
                        type='button'
                        className={styles.cta}
                        onClick={scrollToBuy}
                        aria-label={t.hero.ctaSecondary}
                    >
                        {t.hero.ctaSecondary}
                        <span aria-hidden='true'>🚀</span>
                    </button>
                </div>
            </div>

            {overlayState !== 'hidden' && (
                <div
                    className={`${styles.overlay} ${overlayState === 'enter'
                        ? styles.overlayEnter
                        : styles.overlayLeave
                        }`}
                    role='dialog'
                    aria-modal='true'
                >
                    <div className={styles.overlayContent} ref={overlayRef}>
                        <button
                            type='button'
                            className={styles.closeButton}
                            aria-label={t.hero.overlay.closeLabel}
                            onClick={closePanel}
                        >
                            <span>×</span>
                        </button>
                        <p className={styles.overlayEyebrow}>
                            {t.hero.overlay.eyebrow}
                        </p>
                        <h3>{t.hero.overlay.title}</h3>
                        <p>{t.hero.overlay.body}</p>

                        <div className={styles.container}>
                            <Explanation
                                variant='three'
                                items={t.hero.overlay.sections.flatMap((section) =>
                                    section.items.map((item) => ({
                                        explanation: [item.title, item.description],
                                    }))
                                )}
                            />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
