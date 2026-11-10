import { useCallback, useEffect, useMemo, useRef } from 'react'

type UseReadAloudOptions = {
	enabled: boolean
	widgetRootIds?: string[]
	hoverDelay?: number
	lang?: string
	announcements?: {
		enabled: string
		disabled: string
	}
}

const TEXTUAL_TAGS = new Set([
	'A',
	'P',
	'SPAN',
	'LI',
	'DT',
	'DD',
	'BLOCKQUOTE',
	'LABEL',
	'BUTTON',
	'H1',
	'H2',
	'H3',
	'H4',
	'H5',
	'H6',
])

const CONTROL_TAGS = new Set(['BUTTON', 'INPUT', 'TEXTAREA', 'SELECT'])
const SKIP_TAGS = new Set([
	'BODY',
	'HTML',
	'DIV',
	'SECTION',
	'ARTICLE',
	'NAV',
	'HEADER',
	'FOOTER',
	'ASIDE',
	'MAIN',
])

/**
 * Hook that wires the Vorlesen/Read-Aloud behaviour into the host page.
 */
export function useReadAloud({
	enabled,
	widgetRootIds = ['area11y-root', 'area11y-mount'],
	hoverDelay = 200,
	lang = 'de-DE',
	announcements,
}: UseReadAloudOptions) {
	const speechSupportedRef = useRef(false)
	const synthesisRef = useRef<SpeechSynthesis | null>(null)
	const lastElementRef = useRef<HTMLElement | null>(null)
	const highlightedRef = useRef<HTMLElement | null>(null)
	const voicesRef = useRef<SpeechSynthesisVoice[]>([])
	const debounceTimerRef = useRef<number | null>(null)
	const prevEnabledRef = useRef<boolean | null>(null)

	useEffect(() => {
		const supported =
			typeof window !== 'undefined' &&
			typeof window.speechSynthesis !== 'undefined'
		speechSupportedRef.current = supported
		if (!supported) return

		synthesisRef.current = window.speechSynthesis
		const handleVoicesChanged = () => {
			voicesRef.current = synthesisRef.current?.getVoices() || []
		}
		handleVoicesChanged()
		synthesisRef.current.addEventListener(
			'voiceschanged',
			handleVoicesChanged
		)
		return () => {
			synthesisRef.current?.removeEventListener(
				'voiceschanged',
				handleVoicesChanged
			)
		}
	}, [])

	const widgetRoots = useMemo(() => {
		if (typeof document === 'undefined') return []
		return widgetRootIds
			.map((id) => document.getElementById(id))
			.filter((el): el is HTMLElement => Boolean(el))
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [widgetRootIds.join('|')])

	const cancelDebounce = () => {
		if (debounceTimerRef.current !== null) {
			window.clearTimeout(debounceTimerRef.current)
			debounceTimerRef.current = null
		}
	}

	const resumeSynth = useCallback(() => {
		if (!speechSupportedRef.current) return
		try {
			// Chrome often keeps speech paused until resume() runs within a user gesture.
			synthesisRef.current?.resume()
		} catch {
			/* noop */
		}
	}, [])

	const stopSpeaking = () => {
		cancelDebounce()
		lastElementRef.current = null
		if (!speechSupportedRef.current) return
		try {
			synthesisRef.current?.cancel()
		} catch {
			/* noop */
		}
	}

	const speak = useCallback(
		(text: string) => {
			if (!speechSupportedRef.current || !text.trim()) return
			const synth = synthesisRef.current
			if (!synth) return

			resumeSynth()

			try {
				synth.cancel()
			} catch {
				/* noop */
			}
			const utterance = new SpeechSynthesisUtterance(text.trim())
			const normalizedLang = lang?.toLowerCase?.() || 'de-de'
			const langBase = normalizedLang.split('-')[0]
			utterance.lang = normalizedLang
			const preferred = pickVoice(
				voicesRef.current,
				normalizedLang,
				langBase
			)
			if (preferred) {
				utterance.voice = preferred
			}
			synth.speak(utterance)
		},
		[lang, resumeSynth]
	)

	const setHighlightedElement = (element: HTMLElement | null) => {
		if (highlightedRef.current === element) {
			return
		}

		if (highlightedRef.current) {
			highlightedRef.current.classList.remove('area11y-read-aloud-hover')
		}

		highlightedRef.current = element

		if (element) {
			element.classList.add('area11y-read-aloud-hover')
		}
	}

	useEffect(() => {
		if (!speechSupportedRef.current || typeof document === 'undefined')
			return
		const unlock = () => {
			resumeSynth()
		}
		document.addEventListener('pointerdown', unlock, true)
		document.addEventListener('keydown', unlock, true)
		return () => {
			document.removeEventListener('pointerdown', unlock, true)
			document.removeEventListener('keydown', unlock, true)
		}
	}, [resumeSynth])

	const enabledAnnouncement =
		announcements?.enabled ?? 'Vorlesen aktiviert'
	const disabledAnnouncement =
		announcements?.disabled ?? 'Vorlesen deaktiviert'

	useEffect(() => {
		if (!speechSupportedRef.current) return
		const previous = prevEnabledRef.current
		prevEnabledRef.current = enabled
		if (previous === null || previous === enabled) {
			return
		}
		const announcement = enabled
			? enabledAnnouncement
			: disabledAnnouncement
		const timer = window.setTimeout(() => speak(announcement), 50)
		return () => {
			window.clearTimeout(timer)
		}
	}, [disabledAnnouncement, enabled, enabledAnnouncement, speak])

	useEffect(() => {
		if (!speechSupportedRef.current) {
			return
		}

		if (!enabled) {
			stopSpeaking()
			return
		}

		const handlePointerOver = (event: PointerEvent) => {
			if (event.pointerType === 'touch') return
			resumeSynth()
			queueSpeechFor(event.target as Element | null)
		}

		const handleMouseOver = (event: MouseEvent) => {
			resumeSynth()
			queueSpeechFor(event.target as Element | null)
		}

		const handleFocusIn = (event: FocusEvent) => {
			resumeSynth()
			queueSpeechFor(event.target as Element | null)
		}

		const queueSpeechFor = (rawTarget: Element | null) => {
			if (!(rawTarget instanceof HTMLElement)) return
			if (SKIP_TAGS.has(rawTarget.tagName.toUpperCase())) {
				setHighlightedElement(null)
				return
			}
			if (rawTarget.getAttribute('aria-hidden') === 'true') {
				setHighlightedElement(null)
				return
			}
			if (isInsideWidget(rawTarget, widgetRoots)) {
				setHighlightedElement(null)
				return
			}
			const candidate = findReadableElement(rawTarget)
			if (!candidate || !isVisible(candidate)) {
				setHighlightedElement(null)
				return
			}
			if (lastElementRef.current === candidate) {
				setHighlightedElement(candidate)
				return
			}
			setHighlightedElement(candidate)
			cancelDebounce()
			debounceTimerRef.current = window.setTimeout(() => {
				const text = getReadableText(candidate)
				if (!text) {
					setHighlightedElement(null)
					lastElementRef.current = null
					return
				}
				lastElementRef.current = candidate
				speak(text)
			}, hoverDelay)
		}

		document.addEventListener('pointerover', handlePointerOver, true)
		document.addEventListener('mouseover', handleMouseOver, true)
		document.addEventListener('focusin', handleFocusIn, true)

		return () => {
			document.removeEventListener('pointerover', handlePointerOver, true)
			document.removeEventListener('mouseover', handleMouseOver, true)
			document.removeEventListener('focusin', handleFocusIn, true)
			stopSpeaking()
			setHighlightedElement(null)
		}
	}, [enabled, hoverDelay, resumeSynth, speak, widgetRoots])

	return { speak, supported: speechSupportedRef.current }
}

// Low-quality / "novelty" system voices that sound robotic, whispered or
// distorted (mostly macOS, but harmless to match elsewhere). These should
// never be auto-selected for read-aloud.
const NOVELTY_VOICE_PATTERN =
	/\b(albert|bad news|bahh|bells|boing|bubbles|cellos|deranged|good news|hysterical|jester|junior|kathy|organ|pipe organ|princess|ralph|superstar|trinoids|whisper|wobble|zarvox|fred|grandma|grandpa|rocko|sandy|shelley|eddy|flo|reed)\b/i

// Generic markers of higher-quality voices across platforms
// (macOS "Siri", Windows "Microsoft", Chrome/Android "Google", and the
// newer neural/natural/premium engines on all of them).
const HIGH_QUALITY_VOICE_PATTERN =
	/(natural|neural|premium|enhanced|google|microsoft|siri)/i

/**
 * Picks the best available speech-synthesis voice for the requested language
 * in a platform-agnostic way: prefer the requested locale, skip novelty/
 * low-quality voices, and favour higher-quality engines. Returns `null` when
 * no voice matches the language so the caller can fall back to the browser's
 * own default for `utterance.lang`.
 */
function pickVoice(
	voices: SpeechSynthesisVoice[],
	normalizedLang: string,
	langBase: string
): SpeechSynthesisVoice | null {
	if (!voices.length) return null

	const exact = voices.filter(
		(voice) => voice.lang?.toLowerCase() === normalizedLang
	)
	const base = voices.filter((voice) =>
		voice.lang?.toLowerCase().startsWith(langBase)
	)
	const pool = exact.length ? exact : base
	if (!pool.length) return null

	const usable = pool.filter(
		(voice) => !NOVELTY_VOICE_PATTERN.test(voice.name)
	)
	const candidates = usable.length ? usable : pool

	const score = (voice: SpeechSynthesisVoice) => {
		let value = 0
		if (HIGH_QUALITY_VOICE_PATTERN.test(voice.name)) value += 100
		if (voice.default) value += 10
		if (voice.localService) value += 1
		return value
	}

	return candidates
		.map((voice, index) => ({ voice, index }))
		.sort((a, b) => score(b.voice) - score(a.voice) || a.index - b.index)[0]
		.voice
}

function isInsideWidget(target: HTMLElement, roots: HTMLElement[]) {
	return roots.some((root) => root.contains(target))
}

function findReadableElement(element: HTMLElement): HTMLElement | null {
	let current: HTMLElement | null = element
	while (current && current !== document.body) {
		const tag = current.tagName.toUpperCase()
		if (TEXTUAL_TAGS.has(tag) || CONTROL_TAGS.has(tag)) {
			return current
		}
		current = current.parentElement
	}
	return null
}

function isVisible(element: HTMLElement) {
	if (!element.isConnected) return false
	const style = window.getComputedStyle(element)
	if (
		style.display === 'none' ||
		style.visibility === 'hidden' ||
		parseFloat(style.opacity || '1') === 0
	) {
		return false
	}
	const rect = element.getBoundingClientRect()
	return rect.width > 0 && rect.height > 0
}

function getReadableText(element: HTMLElement): string | null {
	const tag = element.tagName.toUpperCase()
	if (CONTROL_TAGS.has(tag)) {
		return getControlLabel(element)
	}
	const text = element.innerText.trim()
	return text || null
}

function getControlLabel(element: HTMLElement): string | null {
	const aria = element.getAttribute('aria-label')
	if (aria?.trim()) return aria.trim()

	const labelledBy = element.getAttribute('aria-labelledby')
	if (labelledBy) {
		const text = labelledBy
			.split(/\s+/)
			.map((id) => document.getElementById(id)?.innerText.trim())
			.filter(Boolean)
		if (text.length) return text.join(' ')
	}

	if (
		'value' in element &&
		typeof element.value === 'string' &&
		element.value.trim()
	) {
		return element.value.trim()
	}

	const placeholder = element.getAttribute('placeholder')
	if (placeholder?.trim()) return placeholder.trim()

	if (element.id && typeof document !== 'undefined') {
		const directLabel = document.querySelector<HTMLLabelElement>(
			`label[for="${element.id}"]`
		)
		if (directLabel?.innerText.trim()) {
			return directLabel.innerText.trim()
		}
	}

	const wrappingLabel = element.closest<HTMLLabelElement>('label')
	if (wrappingLabel?.innerText.trim()) {
		return wrappingLabel.innerText.trim()
	}

	return element.innerText.trim() || null
}
