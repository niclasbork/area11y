'use client'

import styles from './FaqSection.module.scss'
import { useLanguage } from './LanguageProvider'

export function FaqSection() {
    const { t } = useLanguage()

    return (
        <section className={styles.faq}>
            <h2>{t.faq.title}</h2>
            <div className={styles.list}>
                {t.faq.items.map((item) => (
                    <div key={item.question} className={styles.item}>
                        <h3>{item.question}</h3>
                        <p>{item.answer}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}
