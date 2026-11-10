'use client'

import styles from './StorySection.module.scss'

interface StorySectionProps {
    title?: string
    body?: string | string[] | { title: string; text: string }[]
}

export function StorySection({ title, body }: StorySectionProps) {
    const paragraphs = Array.isArray(body)
        ? body
        : typeof body === 'string'
            ? [body]
            : []
    const hasStructuredBody =
        paragraphs.length > 0 && typeof paragraphs[0] !== 'string'

    if (!title && paragraphs.length === 0) {
        return null
    }

    return (
        <section className={styles.story}>
            {title && <h2>{title}</h2>}
            {hasStructuredBody ? (
                <div className={styles.group}>
                    {(paragraphs as { title: string; text: string }[]).map(
                        (text, index) => (
                            <div key={`${text.title}-${index}`} className={styles.groupItem}>
                                <h3>{text.title}</h3>
                                <p>
                                    {text.text}
                                </p>
                            </div>
                        )
                    )}
                </div>
            ) : (
                <div className={styles.textColumns}>
                    {paragraphs.map((text, index) => (
                        <p key={`${text}-${index}`}>{text as string}</p>
                    ))}
                </div>
            )}
        </section>
    )
}
