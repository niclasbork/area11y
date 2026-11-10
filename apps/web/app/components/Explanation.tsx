'use client'

import styles from './Explanation.module.scss'

type ExplanationItem = {
	explanation?: string | string[]
}

interface ExplanationProps {
	variant: 'three' | 'four' | 'two' | 'one'
	items: ExplanationItem[]
}

export function Explanation({ variant, items }: ExplanationProps) {
	return (
		<section className={`${styles.explanation} ${styles[variant]}`}>
			{items.map((item, index) => {
				const paragraphs = Array.isArray(item.explanation)
					? item.explanation
					: item.explanation
					? [item.explanation]
					: []

				if (paragraphs.length === 0) return null

				return (
					<article key={`${variant}-${index}`} className={styles.card}>
						<div className={styles.text}>
							{paragraphs.map((text, paragraphIndex) => (
								<p key={`${variant}-${index}-${paragraphIndex}`}>{text}</p>
							))}
						</div>
					</article>
				)
			})}
		</section>
	)
}
