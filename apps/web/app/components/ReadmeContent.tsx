'use client'

import { useState } from 'react'
import styles from './ReadmeContent.module.scss'
import { useLanguage } from './LanguageProvider'

function CopyButton({
	text,
	labelCopy,
	labelCopied,
	ariaLabel,
}: {
	text: string
	labelCopy: string
	labelCopied: string
	ariaLabel: string
}) {
	const [copied, setCopied] = useState(false)

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(text)
			setCopied(true)
			setTimeout(() => setCopied(false), 1800)
		} catch (error) {
			console.error('Copy failed', error)
		}
	}

	return (
		<button
			type='button'
			className={styles.copyButton}
			onClick={handleCopy}
			aria-label={ariaLabel}
		>
			<svg width='14' height='14' viewBox='0 0 24 24' aria-hidden='true'>
				<path
					d='M16 1H4a2 2 0 0 0-2 2v12h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z'
					fill='currentColor'
				/>
			</svg>
			<span>{copied ? labelCopied : labelCopy}</span>
		</button>
	)
}

function CodeBlock({
	code,
	labelCopy,
	labelCopied,
	ariaLabel,
}: {
	code: string
	labelCopy: string
	labelCopied: string
	ariaLabel: string
}) {
	return (
		<div className={styles.codeBlock}>
			<CopyButton
				text={code}
				labelCopy={labelCopy}
				labelCopied={labelCopied}
				ariaLabel={ariaLabel}
			/>
			<pre>
				<code>{code}</code>
			</pre>
		</div>
	)
}

export function ReadmeContent() {
	const { t } = useLanguage()
	const { script, npm, api } = t.readme.sections

	return (
		<section className={styles.readme}>
			<div className={styles.header}>
				<h1>{t.readme.title}</h1>
				<p>{t.readme.intro}</p>
			</div>

			<div className={styles.cardGrid}>
				<article className={styles.card}>
					<h2>{script.title}</h2>
					<p>{script.description}</p>
					<CodeBlock
						code={script.code}
						labelCopy={t.buttons.copy}
						labelCopied={t.buttons.copied}
						ariaLabel={t.buttons.copyAria}
					/>
				</article>

				<article className={styles.card}>
					<div className={styles.cardHeader}>
						<h2>{npm.title}</h2>
						<button
							type='button'
							className={styles.externalLink}
							onClick={() => {
								window.open(
									'https://www.npmjs.com/package/area11y',
									'_blank',
									'noopener,noreferrer'
								)
							}}
						>
							<svg
								aria-hidden='true'
								focusable='false'
								data-prefix='fas'
								data-icon='link'
								role='img'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 512 512'
								width='12'
								height='12'
							>
								<path
									fill='currentColor'
									opacity='0.8'
									d='M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z'
								/>
							</svg>
							<span>{npm.linkLabel}</span>
						</button>
					</div>
					<p>{npm.description}</p>
					<CodeBlock
						code={npm.codeInstall}
						labelCopy={t.buttons.copy}
						labelCopied={t.buttons.copied}
						ariaLabel={t.buttons.copyAria}
					/>
					<CodeBlock
						code={npm.codeUsage}
						labelCopy={t.buttons.copy}
						labelCopied={t.buttons.copied}
						ariaLabel={t.buttons.copyAria}
					/>
				</article>

				<article className={styles.card}>
					<h2>{api.title}</h2>
					<div className={styles.tableWrapper}>
						<table className={styles.table}>
							<thead>
								<tr>
									<th>{api.headers.option}</th>
									<th>{api.headers.type}</th>
									<th>{api.headers.default}</th>
									<th>{api.headers.description}</th>
								</tr>
							</thead>
							<tbody>
								{api.rows.map((row) => (
									<tr key={row.option}>
										<td>
											<code>{row.option}</code>
										</td>
										<td>
											<code>{row.type}</code>
										</td>
										<td>
											<code>{row.defaultValue}</code>
										</td>
										<td>{row.description}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</article>
			</div>
		</section>
	)
}
