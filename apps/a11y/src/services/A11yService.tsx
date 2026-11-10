import { A11ySettings } from '../types'
import { DEFAULT_SETTINGS } from '../constants'
const STYLE_ID = 'area11y-host-overrides'
const THEMED_BUTTON_CLASS = 'area11y-themed-button'
export const DARK_MODE_ACTIVE_CLASS = 'area11y-dark-mode-active'
export const NIGHT_SHIFT_ACTIVE_CLASS = 'area11y-night-shift-active'
const NIGHT_SOLARIZE_CLASS = 'area11y-night-solarize'
const BIG_CURSOR_ACTIVE_CLASS = 'area11y-big-cursor-active'
export const HIDE_MEDIA_ACTIVE_CLASS = 'area11y-hide-media-active'
// "Hide images" is pure CSS on purpose. The image content is pushed out of its
// own box (object-position) and the box is filled with a neutral placeholder
// colour, so layout, size and the element's alt text / accessible name all stay
// intact. Nothing is moved or inserted in the host DOM: re-parenting nodes that
// React / Vue own makes their next re-render throw (removeChild on a node that
// is no longer a child), and wrapper elements distort the host layout.
export const HIDE_MEDIA_CSS = `
    html.${HIDE_MEDIA_ACTIVE_CLASS} :where(img, video):not(#area11y-root *):not([data-area11y-ignore]):not([data-area11y-ignore] *) {
        object-fit: none !important;
        object-position: -99999px -99999px !important;
        background-color: #f4f4f5 !important;
        background-image: none !important;
    }
`
const WIDGET_ROOT_ID = 'area11y-root'
const MAGNIFIER_ACTIVE_CLASS = 'area11y-magnifier-active'
const MAGNIFIER_OVERLAY_ID = 'area11y-magnifier-overlay'
const HIGHLIGHT_LINKS_ACTIVE_CLASS = 'area11y-highlight-links-active'
const HIGHLIGHT_TEXT_COLOR = '#0f172a'
const HIGHLIGHT_BG_COLOR = '#ffff00'
const HIGHLIGHT_OUTLINE_COLOR = '#ff0000'
const TEXT_SELECTOR =
    'p, span, a, li, dt, dd, label, blockquote, h1, h2, h3, h4, h5, h6, small, strong, em, pre, code, kbd, samp, td, th, caption, figcaption, summary, cite, time, address'
const SKIP_TAGS = new Set(['IMG', 'VIDEO', 'PICTURE', 'CANVAS', 'IFRAME'])
const INTERACTIVE_SELECTOR = 'button, input, textarea, select, [role="button"]'
const CONTAINER_SELECTOR =
    'div, section, article, main, header, footer, nav, aside'

type StyleValue = {
    value: string
    priority: string
}

type OriginalStyles = Partial<
    Record<
        | 'color'
        | 'background-color'
        | 'background-image'
        | 'filter'
        | 'fill'
        | 'stroke'
        | 'border-color'
        | 'border-radius'
        | 'font-size'
        | 'mix-blend-mode'
        | 'text-decoration-color'
        | 'text-decoration-line'
        | 'outline'
        | 'outline-color'
        | 'outline-offset'
        | 'outline-width'
        | 'outline-style',
        StyleValue
    >
>

type Palette = {
    bg: string
    text: string
    link: string
    border: string
    focus: string
    surface: string
    // Uniform look applied to every button / button-like link so they share one
    // consistent design in dark / night mode regardless of the site's styling.
    button: { bg: string; text: string; border: string }
}

export const DARK_PALETTE: Palette = {
    bg: '#111113',
    text: '#f5f5f5',
    link: '#f5f5f5',
    border: '#3a3a42',
    focus: '#60a5fa',
    // Clear elevation hierarchy so cards/sections are obviously visible against
    // the page: bg (#111113) < surface (cards) < button. The gaps are large
    // enough to read on screen, not the near-invisible dark-on-dark we had.
    surface: '#26262c',
    button: { bg: '#34343c', text: '#f5f5f5', border: '#45454d' },
}

export const NIGHT_PALETTE: Palette = {
    bg: '#fff6e1',
    text: '#5b2b1e',
    link: '#8c1d18',
    border: '#d48a5a',
    focus: '#9c2a1a',
    // Clear elevation against the cream page: bg (#fff6e1) > surface (cards) >
    // button, each progressively deeper/warmer so they stay visibly separated.
    surface: '#f3e6c4',
    button: { bg: '#e9d09c', text: '#5b2b1e', border: '#cf8a52' },
}

const baselineDarkCss = `
    html.${DARK_MODE_ACTIVE_CLASS} {
        color-scheme: dark;
        background-color: ${DARK_PALETTE.bg} !important;
    }
    html.${DARK_MODE_ACTIVE_CLASS} body {
        background-color: ${DARK_PALETTE.bg} !important;
        color: ${DARK_PALETTE.text} !important;
    }
    html.${DARK_MODE_ACTIVE_CLASS} ${TEXT_SELECTOR} {
        color: ${DARK_PALETTE.text} !important;
    }
    html.${DARK_MODE_ACTIVE_CLASS} body > *:not(#${WIDGET_ROOT_ID}):not(#${MAGNIFIER_OVERLAY_ID}) {
        background-color: ${DARK_PALETTE.bg} !important;
        color: ${DARK_PALETTE.text} !important;
    }
    html.${DARK_MODE_ACTIVE_CLASS} body :where(a):not(#${WIDGET_ROOT_ID} *):not(#${MAGNIFIER_OVERLAY_ID} *) {
        color: ${DARK_PALETTE.link} !important;
    }
    html.${DARK_MODE_ACTIVE_CLASS} body :where(*:focus-visible):not(#${WIDGET_ROOT_ID} *):not(#${MAGNIFIER_OVERLAY_ID} *) {
        outline: 3px solid ${DARK_PALETTE.focus} !important;
        outline-offset: 2px !important;
    }
    html.${DARK_MODE_ACTIVE_CLASS} body :where(svg, svg *):not(#${WIDGET_ROOT_ID} *):not(#${MAGNIFIER_OVERLAY_ID} *) {
        stroke: ${DARK_PALETTE.text} !important;
        color: ${DARK_PALETTE.text} !important;
    }
    html.${DARK_MODE_ACTIVE_CLASS} body :where(img, video, picture):not(#${WIDGET_ROOT_ID} *):not(#${MAGNIFIER_OVERLAY_ID} *) {
        filter: brightness(0.88) contrast(1.04);
    }
    html.${DARK_MODE_ACTIVE_CLASS} body .${THEMED_BUTTON_CLASS}:hover:not(#${WIDGET_ROOT_ID} *):not(#${MAGNIFIER_OVERLAY_ID} *) {
        filter: brightness(1.3) !important;
    }
    html.${DARK_MODE_ACTIVE_CLASS} {
        scrollbar-color: ${DARK_PALETTE.border} ${DARK_PALETTE.bg};
    }
    html.${DARK_MODE_ACTIVE_CLASS} ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    html.${DARK_MODE_ACTIVE_CLASS} ::-webkit-scrollbar-track {
        background: ${DARK_PALETTE.bg};
    }
    html.${DARK_MODE_ACTIVE_CLASS} ::-webkit-scrollbar-thumb {
        background-color: ${DARK_PALETTE.border};
        border-radius: 999px;
        border: 3px solid ${DARK_PALETTE.bg};
    }
`

const baselineNightCss = `
    html.${NIGHT_SHIFT_ACTIVE_CLASS} {
        color-scheme: light;
        background-color: ${NIGHT_PALETTE.bg} !important;
    }
    html.${NIGHT_SHIFT_ACTIVE_CLASS} body {
        background-color: ${NIGHT_PALETTE.bg} !important;
        color: ${NIGHT_PALETTE.text} !important;
    }
    html.${NIGHT_SHIFT_ACTIVE_CLASS} body > *:not(#${WIDGET_ROOT_ID}):not(#${MAGNIFIER_OVERLAY_ID}) {
        background-color: ${NIGHT_PALETTE.bg} !important;
        color: ${NIGHT_PALETTE.text} !important;
    }
    html.${NIGHT_SHIFT_ACTIVE_CLASS} body :where(a):not(#${WIDGET_ROOT_ID} *):not(#${MAGNIFIER_OVERLAY_ID} *) {
        color: ${NIGHT_PALETTE.link} !important;
    }
    html.${NIGHT_SHIFT_ACTIVE_CLASS} body :where(*:focus-visible):not(#${WIDGET_ROOT_ID} *):not(#${MAGNIFIER_OVERLAY_ID} *) {
        outline: 3px solid ${NIGHT_PALETTE.focus} !important;
        outline-offset: 2px !important;
    }
    html.${NIGHT_SHIFT_ACTIVE_CLASS} body :where(svg, svg *):not(#${WIDGET_ROOT_ID} *):not(#${MAGNIFIER_OVERLAY_ID} *) {
        stroke: ${NIGHT_PALETTE.text} !important;
        color: ${NIGHT_PALETTE.text} !important;
    }
    html.${NIGHT_SHIFT_ACTIVE_CLASS} {
        scrollbar-color: ${NIGHT_PALETTE.border} ${NIGHT_PALETTE.bg};
    }
    html.${NIGHT_SHIFT_ACTIVE_CLASS} ::-webkit-scrollbar {
        width: 12px;
        height: 12px;
    }
    html.${NIGHT_SHIFT_ACTIVE_CLASS} ::-webkit-scrollbar-track {
        background: ${NIGHT_PALETTE.bg};
    }
    html.${NIGHT_SHIFT_ACTIVE_CLASS} ::-webkit-scrollbar-thumb {
        background-color: ${NIGHT_PALETTE.border};
        border-radius: 999px;
        border: 3px solid ${NIGHT_PALETTE.bg};
    }
    html.${NIGHT_SHIFT_ACTIVE_CLASS} .${NIGHT_SOLARIZE_CLASS} {
        filter: sepia(0.5) saturate(0.7) hue-rotate(-12deg) brightness(1.04) contrast(1.1) !important;
    }
    html.${NIGHT_SHIFT_ACTIVE_CLASS} body .${THEMED_BUTTON_CLASS}:hover:not(#${WIDGET_ROOT_ID} *):not(#${MAGNIFIER_OVERLAY_ID} *) {
        filter: brightness(0.95) !important;
    }
`

let darkProcessed = new WeakSet<Element>()
let nightProcessed = new WeakSet<Element>()
// Buttons we themed, marked with THEMED_BUTTON_CLASS so baseline CSS can give
// them a hover state (our inline !important colours override the site's hover).
const themedButtonEls = new Set<Element>()
const darkOriginals = new WeakMap<HTMLElement, OriginalStyles>()
const nightOriginals = new WeakMap<HTMLElement, OriginalStyles>()
const darkTouched = new Set<HTMLElement>()
const nightTouched = new Set<HTMLElement>()
const highlightOriginals = new WeakMap<HTMLElement, OriginalStyles>()
const highlightTouched = new Set<HTMLElement>()
const fontSizeOriginals = new WeakMap<HTMLElement, OriginalStyles>()
const fontSizeTouched = new Set<HTMLElement>()
let fontSizeBase = new WeakMap<Element, number>()
// Current font-size scale, kept in a module variable (not captured in the
// observer's closure) so newly added nodes — e.g. content swapped in on an
// SPA page navigation — are always scaled with the *current* setting instead
// of whatever value the observer happened to start with.
let fontSizeScale = 1
let darkObserver: MutationObserver | null = null
let nightObserver: MutationObserver | null = null
let fontSizeObserver: MutationObserver | null = null
// Whether the per-element pass of a mode is currently applied. Dark and night
// share some bookkeeping (themed buttons, SVG fills), so disabling the mode
// that is NOT active must be a no-op — otherwise every settings change in dark
// mode would strip the hover class / SVG fixes the dark pass just applied.
let darkActive = false
let nightActive = false
let darkBaselineInjected = false
let nightBaselineInjected = false
const nightSolarized = new Set<Element>()
let nightSolarizeObserver: MutationObserver | null = null
let highlightLinksActive = false

const CANDIDATE_SELECTOR = `${TEXT_SELECTOR}, ${INTERACTIVE_SELECTOR}, ${CONTAINER_SELECTOR}`
const FONT_SIZE_SELECTOR = `${TEXT_SELECTOR}, ${INTERACTIVE_SELECTOR}`

// Safety ceiling so a pathological DOM can't lock the main thread, but high
// enough that realistic large pages (news, docs, dashboards) are fully themed
// instead of leaving un-themed "light islands" past an old low cap.
const MAX_PROCESS_ELEMENTS = 15000

const isIgnored = (el: Element) => Boolean(el.closest('[data-area11y-ignore]'))

const isInWidget = (el: Element) =>
    Boolean(el.closest(`#${WIDGET_ROOT_ID}, #${MAGNIFIER_OVERLAY_ID}`)) ||
    isIgnored(el)

const isCandidate = (el: Element) => {
    if (SKIP_TAGS.has(el.tagName)) return false
    if (el instanceof SVGElement) return false
    if (isInWidget(el)) return false
    return (
        el.matches(TEXT_SELECTOR) ||
        el.matches(INTERACTIVE_SELECTOR) ||
        el.matches(CONTAINER_SELECTOR)
    )
}

// True when the element directly renders non-whitespace text (not just wrapping
// other elements). Lets the contrast check reach text in tags outside
// TEXT_SELECTOR (e.g. a bare <div> line in a terminal) without recolouring pure
// layout wrappers.
const ownsText = (el: Element) => {
    for (const node of Array.from(el.childNodes)) {
        if (
            node.nodeType === Node.TEXT_NODE &&
            node.textContent &&
            node.textContent.trim().length > 0
        ) {
            return true
        }
    }
    return false
}

type Rgba = { r: number; g: number; b: number; a: number }

// Computed styles are not always rgb(): colours authored as oklch() / lab() /
// color() (the default in Tailwind v4) are reported in that same notation. For
// anything the fast regex paths below don't understand, let the browser resolve
// the colour by painting it onto a 1x1 canvas and reading the pixel back.
const canvasColorCache = new Map<string, Rgba | null>()
let colorCtx: CanvasRenderingContext2D | null | undefined
const CANVAS_SENTINEL = '#010203'

const parseColorViaCanvas = (value: string): Rgba | null => {
    if (!value.includes('(') && !value.startsWith('#')) return null
    if (canvasColorCache.has(value)) return canvasColorCache.get(value) || null
    if (colorCtx === undefined) {
        try {
            const canvas = document.createElement('canvas')
            canvas.width = 1
            canvas.height = 1
            colorCtx = canvas.getContext('2d', { willReadFrequently: true })
        } catch {
            colorCtx = null
        }
    }
    let result: Rgba | null = null
    if (colorCtx) {
        try {
            colorCtx.fillStyle = CANVAS_SENTINEL
            colorCtx.fillStyle = value
            // An unparseable value leaves fillStyle untouched (the sentinel).
            if (colorCtx.fillStyle !== CANVAS_SENTINEL) {
                colorCtx.clearRect(0, 0, 1, 1)
                colorCtx.fillRect(0, 0, 1, 1)
                const [r, g, b, a] = colorCtx.getImageData(0, 0, 1, 1).data
                result = { r, g, b, a: a / 255 }
            }
        } catch {
            result = null
        }
    }
    if (canvasColorCache.size > 2000) canvasColorCache.clear()
    canvasColorCache.set(value, result)
    return result
}

const parseColorToRgba = (value: string): Rgba | null => {
    if (!value || value === 'transparent') return null
    const rgbMatch =
        value.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([0-9.]+))?\)/) || []
    if (rgbMatch.length) {
        return {
            r: Number(rgbMatch[1]),
            g: Number(rgbMatch[2]),
            b: Number(rgbMatch[3]),
            a: rgbMatch[4] == null ? 1 : Number(rgbMatch[4]),
        }
    }
    const rgbSpaceMatch =
        value.match(
            /rgba?\((\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)(?:\s*\/\s*([0-9.]+))?\)/
        ) || []
    if (rgbSpaceMatch.length) {
        return {
            r: Number(rgbSpaceMatch[1]),
            g: Number(rgbSpaceMatch[2]),
            b: Number(rgbSpaceMatch[3]),
            a: rgbSpaceMatch[4] == null ? 1 : Number(rgbSpaceMatch[4]),
        }
    }
    if (value.startsWith('#')) {
        const hex = value.replace('#', '')
        if (hex.length === 3) {
            const r = parseInt(hex[0] + hex[0], 16)
            const g = parseInt(hex[1] + hex[1], 16)
            const b = parseInt(hex[2] + hex[2], 16)
            return { r, g, b, a: 1 }
        }
        if (hex.length === 6) {
            const r = parseInt(hex.slice(0, 2), 16)
            const g = parseInt(hex.slice(2, 4), 16)
            const b = parseInt(hex.slice(4, 6), 16)
            return { r, g, b, a: 1 }
        }
    }
    return parseColorViaCanvas(value)
}

const luminance = (r: number, g: number, b: number) => {
    const srgb = [r, g, b].map((v) => v / 255)
    const lin = srgb.map((v) =>
        v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4)
    )
    return 0.2126 * lin[0] + 0.7152 * lin[1] + 0.0722 * lin[2]
}

const isVisibleBackground = (bg: { a: number } | null) =>
    bg != null && bg.a > 0.12

const rgbToHsl = (r: number, g: number, b: number) => {
    const rNorm = r / 255
    const gNorm = g / 255
    const bNorm = b / 255
    const max = Math.max(rNorm, gNorm, bNorm)
    const min = Math.min(rNorm, gNorm, bNorm)
    const delta = max - min
    let h = 0
    let s = 0
    const l = (max + min) / 2

    if (delta !== 0) {
        s = delta / (1 - Math.abs(2 * l - 1))
        switch (max) {
            case rNorm:
                h = ((gNorm - bNorm) / delta) % 6
                break
            case gNorm:
                h = (bNorm - rNorm) / delta + 2
                break
            default:
                h = (rNorm - gNorm) / delta + 4
        }
        h *= 60
        if (h < 0) h += 360
    }

    return { h, s, l }
}

const contrastRatio = (l1: number, l2: number) => {
    const [hi, lo] = l1 > l2 ? [l1, l2] : [l2, l1]
    return (hi + 0.05) / (lo + 0.05)
}

const isTransparent = (rgba: { a: number } | null) => !rgba || rgba.a <= 0.05

const isHighlySaturated = (rgba: {
    r: number
    g: number
    b: number
    a: number
}) => {
    if (rgba.a <= 0.05) return false
    const { s } = rgbToHsl(rgba.r, rgba.g, rgba.b)
    return s >= 0.45
}

const isSolarizeSaturated = (
    rgba: { r: number; g: number; b: number; a: number } | null
) => {
    if (!rgba || rgba.a <= 0.05) return false
    const { s, l } = rgbToHsl(rgba.r, rgba.g, rgba.b)
    return s >= 0.35 && l >= 0.12 && l <= 0.85
}

const extractRgbColors = (value: string) => {
    // Any colour function, not just rgb(): gradients authored in oklch() etc.
    // keep that notation in the computed value.
    const matches = value.match(
        /(?:rgba?|hsla?|hwb|lab|lch|oklab|oklch|color)\([^()]*\)/gi
    )
    const results: Rgba[] = []
    for (const match of matches || []) {
        const parsed = parseColorToRgba(match)
        if (parsed) results.push(parsed)
    }
    return results
}

const extractHexColors = (value: string) => {
    const matches = value.matchAll(/#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})/g)
    const results: { r: number; g: number; b: number; a: number }[] = []
    for (const match of matches) {
        const hex = match[1]
        if (hex.length === 3) {
            const r = parseInt(hex[0] + hex[0], 16)
            const g = parseInt(hex[1] + hex[1], 16)
            const b = parseInt(hex[2] + hex[2], 16)
            results.push({ r, g, b, a: 1 })
        } else {
            const r = parseInt(hex.slice(0, 2), 16)
            const g = parseInt(hex.slice(2, 4), 16)
            const b = parseInt(hex.slice(4, 6), 16)
            results.push({ r, g, b, a: 1 })
        }
    }
    return results
}

const hasColorfulGradient = (backgroundImage: string) => {
    if (!backgroundImage || !backgroundImage.includes('gradient(')) return false
    const colors = [
        ...extractRgbColors(backgroundImage),
        ...extractHexColors(backgroundImage),
    ]
    return colors.some((color) => isSolarizeSaturated(color))
}

const isSolarizeCandidate = (el: Element) => {
    if (SKIP_TAGS.has(el.tagName)) return false
    if (el instanceof SVGElement) return false
    if (isInWidget(el)) return false
    return el.matches(CONTAINER_SELECTOR) || el.matches(INTERACTIVE_SELECTOR)
}

const applyNightSolarize = (root: ParentNode, limit = MAX_PROCESS_ELEMENTS) => {
    let count = 0
    const rootElement = root instanceof Element ? root : null
    if (rootElement && isSolarizeCandidate(rootElement)) {
        const styles = getComputedStyle(rootElement)
        const bg = parseColorToRgba(styles.backgroundColor)
        const hasBg = !isTransparent(bg) && bg !== null
        const hasGradient = hasColorfulGradient(styles.backgroundImage)
        if ((hasBg && isSolarizeSaturated(bg)) || hasGradient) {
            rootElement.classList.add(NIGHT_SOLARIZE_CLASS)
            nightSolarized.add(rootElement)
        }
        count += 1
    }

    const elements = (root as Element | Document).querySelectorAll(
        `${CONTAINER_SELECTOR}, ${INTERACTIVE_SELECTOR}`
    )
    for (const el of Array.from(elements)) {
        if (count >= limit) break
        if (!isSolarizeCandidate(el)) continue
        const styles = getComputedStyle(el)
        const bg = parseColorToRgba(styles.backgroundColor)
        const hasBg = !isTransparent(bg) && bg !== null
        const hasGradient = hasColorfulGradient(styles.backgroundImage)
        if (!hasGradient && (!hasBg || !isSolarizeSaturated(bg))) continue
        el.classList.add(NIGHT_SOLARIZE_CLASS)
        nightSolarized.add(el)
        count += 1
    }
}

const startNightSolarizeObserver = () => {
    if (nightSolarizeObserver) return
    nightSolarizeObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of Array.from(mutation.addedNodes)) {
                if (!(node instanceof Element)) continue
                if (isInWidget(node)) continue
                applyNightSolarize(node, MAX_PROCESS_ELEMENTS)
            }
        }
    })
    nightSolarizeObserver.observe(document.body, {
        childList: true,
        subtree: true,
    })
}

const stopNightSolarize = () => {
    if (nightSolarizeObserver) {
        nightSolarizeObserver.disconnect()
        nightSolarizeObserver = null
    }
    nightSolarized.forEach((el) => {
        el.classList.remove(NIGHT_SOLARIZE_CLASS)
    })
    nightSolarized.clear()
}

const isProblemHue = (h: number) =>
    (h >= 200 && h <= 260) ||
    (h >= 70 && h <= 160) ||
    (h >= 260 && h <= 320) ||
    h >= 330 ||
    h <= 20

const isSaturatedProblemColor = (
    rgba: { r: number; g: number; b: number; a: number } | null
) => {
    if (!rgba || rgba.a <= 0.05) return false
    const { s } = rgbToHsl(rgba.r, rgba.g, rgba.b)
    return s >= 0.45
}

const getEffectiveBackground = (el: Element) => {
    let current: Element | null = el
    let depth = 6
    while (current && depth > 0) {
        const styles = getComputedStyle(current)
        const bg = parseColorToRgba(styles.backgroundColor)
        if (!isTransparent(bg)) {
            return bg
        }
        current = current.parentElement
        depth -= 1
    }
    return null
}

type StyledElement = HTMLElement | SVGElement

const setInline = <T extends StyledElement>(
    el: T,
    prop: keyof OriginalStyles,
    value: string,
    store: WeakMap<T, OriginalStyles>,
    touched: Set<T>
) => {
    const existing = store.get(el) || {}
    if (!existing[prop]) {
        // Dark / night theming and link highlighting can stack on the same
        // property of the same element. The "original" must then be the page's
        // own value, not the inline value another of our layers already wrote —
        // otherwise switching the layers off in a different order than they
        // were switched on leaves that other layer's colour behind for good.
        const underlying =
            el instanceof HTMLElement
                ? [darkOriginals, nightOriginals, highlightOriginals]
                      .filter((other) => other !== (store as unknown))
                      .map((other) => other.get(el)?.[prop])
                      .find(Boolean)
                : undefined
        existing[prop] = underlying
            ? { ...underlying }
            : {
                  value: el.style.getPropertyValue(prop) || '',
                  priority: el.style.getPropertyPriority(prop) || '',
              }
        store.set(el, existing)
    }
    touched.add(el)
    el.style.setProperty(prop, value, 'important')
}

const restoreInline = <T extends StyledElement>(
    store: WeakMap<T, OriginalStyles>,
    touched: Set<T>
) => {
    touched.forEach((el) => {
        const styles = store.get(el)
        if (!styles) return
        Object.entries(styles).forEach(([prop, value]) => {
            if (!value) return
            if (value.value) {
                el.style.setProperty(prop, value.value, value.priority || '')
            } else {
                el.style.removeProperty(prop)
            }
        })
        store.delete(el)
    })
    touched.clear()
}

const svgColorOriginals = new WeakMap<SVGElement, OriginalStyles>()
const svgColorTouched = new Set<SVGElement>()
const SVG_SHAPE_SELECTOR = 'path, circle, rect, ellipse, polygon, polyline, line'

// Solid SVG icons whose fill is a hard colour (not currentColor, not none) don't
// follow the color/stroke baseline. Read the COMPUTED fill so we know the real
// colour: lighten dark solid fills in dark mode, darken light solid fills in
// night. fill:none / transparent outline icons (computed alpha ~0) are left
// untouched, so this never re-introduces the "filled blob" bug.
const applySvgColors = (
    root: ParentNode,
    palette: Palette,
    mode: 'dark' | 'night'
) => {
    const svgs = (root as Element | Document).querySelectorAll('svg')
    for (const svg of Array.from(svgs)) {
        if (isInWidget(svg)) continue
        const shapes = svg.querySelectorAll(SVG_SHAPE_SELECTOR)
        const targets: SVGElement[] = shapes.length
            ? (Array.from(shapes) as SVGElement[])
            : [svg]
        for (const shape of targets) {
            const fill = parseColorToRgba(getComputedStyle(shape).fill)
            if (!fill || fill.a < 0.05) continue
            const lum = luminance(fill.r, fill.g, fill.b)
            const needsLighten = mode === 'dark' && lum < 0.25
            const needsDarken = mode === 'night' && lum > 0.7
            if (needsLighten || needsDarken) {
                setInline(
                    shape,
                    'fill',
                    palette.text,
                    svgColorOriginals,
                    svgColorTouched
                )
            }
        }
    }
}

const applyFontSizeToElement = (el: Element, scale: number) => {
    if (!(el instanceof HTMLElement)) return
    if (SKIP_TAGS.has(el.tagName)) return
    if (el instanceof SVGElement) return
    if (isInWidget(el)) return
    const base = fontSizeBase.get(el)
    let nextBase = base
    if (!nextBase) {
        const computed = parseFloat(getComputedStyle(el).fontSize || '')
        if (!Number.isFinite(computed) || computed <= 0) return
        nextBase = computed
        fontSizeBase.set(el, computed)
    }
    const nextSize = Math.max(1, nextBase * scale)
    setInline(
        el,
        'font-size',
        `${nextSize.toFixed(3)}px`,
        fontSizeOriginals,
        fontSizeTouched
    )
}

const applyFontSizeInSubtree = (
    root: ParentNode,
    scale: number,
    limit = MAX_PROCESS_ELEMENTS
) => {
    let count = 0
    if (root instanceof Element && root.matches(FONT_SIZE_SELECTOR)) {
        applyFontSizeToElement(root, scale)
        count += 1
    }
    const elements = (root as Element | Document).querySelectorAll(
        FONT_SIZE_SELECTOR
    )
    for (const el of Array.from(elements)) {
        if (count >= limit) break
        applyFontSizeToElement(el, scale)
        count += 1
    }
}

const startFontSizeObserver = () => {
    if (fontSizeObserver) return
    fontSizeObserver = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            for (const node of Array.from(mutation.addedNodes)) {
                if (!(node instanceof Element)) continue
                applyFontSizeInSubtree(node, fontSizeScale, MAX_PROCESS_ELEMENTS)
            }
        }
    })
    fontSizeObserver.observe(document.body, {
        childList: true,
        subtree: true,
    })
}

const stopFontSizeObserver = () => {
    if (!fontSizeObserver) return
    fontSizeObserver.disconnect()
    fontSizeObserver = null
}

const hasVisibleBorder = (styles: CSSStyleDeclaration) =>
    [
        'borderTopWidth',
        'borderRightWidth',
        'borderBottomWidth',
        'borderLeftWidth',
    ]
        .map((prop) =>
            parseFloat(String(styles[prop as keyof CSSStyleDeclaration] || '0'))
        )
        .some((value) => value > 0)

// KNOWN LIMITATIONS (by design — not bugs):
// - ::before / ::after pseudo-elements cannot be read or styled via inline JS,
//   and a blanket pseudo-element CSS rule would wreck icon fonts / decorative
//   glyphs. Decorative pseudo backgrounds may therefore keep their light colour.
// - Cross-origin iframes are inaccessible to script and cannot be themed.
// - Solid background-images that sit behind text are not inverted (only dimmed
//   when purely decorative); readability is instead protected by the contrast
//   pass that recolours the text on top.
const applyPaletteToElement = (
    el: Element,
    palette: Palette,
    mode: 'dark' | 'night',
    processed: WeakSet<Element>,
    originals: WeakMap<HTMLElement, OriginalStyles>,
    touched: Set<HTMLElement>
) => {
    if (processed.has(el)) return
    processed.add(el)
    if (!(el instanceof HTMLElement)) return
    // Highlighted links keep their highlight look. Without this the yellow
    // highlight background makes every link count as a "button-like link" and
    // the theme repaints it as a button. They are re-themed once highlighting
    // is switched off (applySettings marks them unprocessed again).
    if (highlightLinksActive && el.matches('a')) return

    const styles = getComputedStyle(el)
    const bg = parseColorToRgba(styles.backgroundColor)
    const text = parseColorToRgba(styles.color)
    const border = parseColorToRgba(styles.borderColor)
    const bgImage = styles.backgroundImage
    const hasBlendMode =
        styles.mixBlendMode != null && styles.mixBlendMode !== 'normal'
    const effectiveBg =
        bg && !isTransparent(bg) ? bg : getEffectiveBackground(el)

    const bgLum = effectiveBg
        ? luminance(effectiveBg.r, effectiveBg.g, effectiveBg.b)
        : null
    const textLum = text ? luminance(text.r, text.g, text.b) : null

    const hasVisibleBg = isVisibleBackground(bg) || bgImage !== 'none'
    const isNight = mode === 'night'
    const hasColorfulSurface =
        hasVisibleBg &&
        (bgImage !== 'none' ||
            isSaturatedProblemColor(bg) ||
            isSaturatedProblemColor(effectiveBg))
    const shouldNormalizeBg =
        hasVisibleBg &&
        !(!isNight && hasColorfulSurface) &&
        ((bgLum !== null && (bgLum > 0.45 || bgLum < 0.12)) ||
            (!isNight &&
                (bgImage !== 'none' ||
                    isSaturatedProblemColor(bg) ||
                    isSaturatedProblemColor(effectiveBg))))
    // Text contrast must be judged against the background the element will
    // ACTUALLY end up on (the dark/night palette), not its original light bg.
    // Otherwise mid-grey text that was fine on white stays untouched and turns
    // invisible on the new dark background.
    const paletteBg = parseColorToRgba(palette.bg)
    const paletteBgLum = paletteBg
        ? luminance(paletteBg.r, paletteBg.g, paletteBg.b)
        : null
    const keepsColorfulSurface = isNight && hasColorfulSurface
    const resultingBgLum =
        keepsColorfulSurface && bgLum !== null ? bgLum : paletteBgLum
    const resultingRatio =
        resultingBgLum !== null && textLum !== null
            ? contrastRatio(resultingBgLum, textLum)
            : null
    const hasToggleState = el.matches(
        '[aria-pressed], [aria-checked], [aria-selected]'
    )
    const isLink = el.matches('a')
    // Anchors styled as buttons (checkout CTAs, "Manage subscription", etc.) are
    // not in INTERACTIVE_SELECTOR. Detect them by their button-like box so they
    // get the uniform button design too — even with a near-transparent fill
    // (e.g. a 4%-alpha background). Plain inline text links (no padding, border
    // or fill) are deliberately excluded.
    const padX =
        parseFloat(styles.paddingLeft || '0') +
        parseFloat(styles.paddingRight || '0')
    const padY =
        parseFloat(styles.paddingTop || '0') +
        parseFloat(styles.paddingBottom || '0')
    const cornerRadius = parseFloat(styles.borderTopLeftRadius || '0')
    const hasButtonBox = padX >= 8 || padY >= 4
    const isButtonLikeLink =
        isLink &&
        ((bg !== null && bg.a > 0.12) ||
            hasVisibleBorder(styles) ||
            (hasButtonBox &&
                (cornerRadius > 0 ||
                    (bg !== null && bg.a > 0.01) ||
                    bgImage !== 'none')))

    // Every real button and button-like link gets ONE uniform design (bg, text,
    // border) so they look consistent across the page in dark / night mode,
    // instead of each keeping its own site styling. This deliberately overrides
    // the generic surface/text normalization below, so we apply it and stop.
    const isButton =
        el.matches(
            'button, [role="button"], input[type="button"], input[type="submit"], input[type="reset"]'
        ) || isButtonLikeLink
    if (isButton && !hasBlendMode) {
        setInline(el, 'background-color', palette.button.bg, originals, touched)
        setInline(el, 'color', palette.button.text, originals, touched)
        setInline(el, 'border-color', palette.button.border, originals, touched)
        el.classList.add(THEMED_BUTTON_CLASS)
        themedButtonEls.add(el)
        return
    }

    if (
        el.matches(CONTAINER_SELECTOR) &&
        shouldNormalizeBg &&
        !(isNight && hasColorfulSurface) &&
        !hasBlendMode
    ) {
        // Rounded corners or a shadow are the reliable "this is a card" signal,
        // regardless of width (a wide CTA box can still be a card). Structural
        // wrappers (main, full-bleed sections) have neither, so they fall back
        // to the page `bg` and don't create mismatched colour bands. The
        // html/body baseline (below) shares the same `bg`, so structural layers
        // line up with the page background.
        const hasShadow = styles.boxShadow != null && styles.boxShadow !== 'none'
        const isCardLike = cornerRadius >= 4 || hasShadow
        setInline(
            el,
            'background-color',
            isCardLike ? palette.surface : palette.bg,
            originals,
            touched
        )
        setInline(el, 'color', palette.text, originals, touched)
        if (hasVisibleBorder(styles)) {
            setInline(el, 'border-color', palette.border, originals, touched)
        }
    }

    if (el.matches(INTERACTIVE_SELECTOR) || isButtonLikeLink) {
        const shouldForceSurface =
            (shouldNormalizeBg && !(isNight && hasColorfulSurface)) ||
            hasToggleState ||
            // Text-labelled buttons whose background is effectively transparent
            // (e.g. a 4%-alpha "ghost" button) otherwise keep their original
            // text colour and look unthemed/black. Give them a real palette
            // surface so they read as proper buttons. Icon-only buttons (no
            // direct text) and intentionally colourful buttons are left alone.
            (ownsText(el) && !hasColorfulSurface && !hasBlendMode)
        if (shouldForceSurface && !hasBlendMode) {
            setInline(
                el,
                'background-color',
                palette.surface,
                originals,
                touched
            )
            setInline(el, 'color', palette.text, originals, touched)
            if (hasVisibleBorder(styles)) {
                setInline(
                    el,
                    'border-color',
                    palette.border,
                    originals,
                    touched
                )
            }
        }
        if (hasVisibleBorder(styles) && !(isNight && hasColorfulSurface)) {
            if (
                border &&
                !isTransparent(border) &&
                isSaturatedProblemColor(border)
            ) {
                setInline(
                    el,
                    'border-color',
                    palette.border,
                    originals,
                    touched
                )
            }
        }
    }

    if (isLink && !highlightLinksActive && !hasBlendMode) {
        setInline(el, 'color', palette.link, originals, touched)
    }

    if (
        (el.matches(TEXT_SELECTOR) || ownsText(el)) &&
        (!isLink || !highlightLinksActive) &&
        resultingRatio !== null &&
        resultingRatio < 4.5 &&
        textLum !== null &&
        !hasBlendMode
    ) {
        setInline(el, 'color', palette.text, originals, touched)
    }

    if (
        (el.matches(TEXT_SELECTOR) || ownsText(el)) &&
        (!isLink || !highlightLinksActive) &&
        text &&
        !isTransparent(text) &&
        !hasBlendMode
    ) {
        if (isSaturatedProblemColor(text)) {
            setInline(el, 'color', palette.text, originals, touched)
        }
    }

    if (
        border &&
        border.a > 0 &&
        hasVisibleBorder(styles) &&
        !(isNight && hasColorfulSurface) &&
        !hasBlendMode
    ) {
        if (isSaturatedProblemColor(border)) {
            setInline(el, 'border-color', palette.border, originals, touched)
        }
    }

    // Light decorative gradients keep painting over the normalized dark
    // background; strip them so text stays readable. Real url() images are
    // left untouched (they may be meaningful content).
    if (
        mode === 'dark' &&
        bgImage !== 'none' &&
        bgImage.includes('gradient(') &&
        !bgImage.includes('url(') &&
        shouldNormalizeBg &&
        !hasBlendMode
    ) {
        setInline(el, 'background-image', 'none', originals, touched)
    }

    // Decorative leaf elements with a raster background image: gently dim in
    // dark mode so bright photos don't glare. Skipped when the element has text
    // or element children (a filter would dim those too).
    if (
        mode === 'dark' &&
        bgImage.includes('url(') &&
        hasVisibleBg &&
        el.children.length === 0 &&
        !ownsText(el) &&
        !hasBlendMode
    ) {
        setInline(el, 'filter', 'brightness(0.82)', originals, touched)
    }

    if (hasBlendMode && mode === 'dark' && styles.mixBlendMode === 'multiply') {
        setInline(el, 'mix-blend-mode', 'normal', originals, touched)
    } else if (mode === 'dark') {
        const stored = originals.get(el)
        const storedBlend = stored?.['mix-blend-mode']
        if (storedBlend) {
            if (storedBlend.value) {
                el.style.setProperty(
                    'mix-blend-mode',
                    storedBlend.value,
                    storedBlend.priority || ''
                )
            } else {
                el.style.removeProperty('mix-blend-mode')
            }
            delete stored['mix-blend-mode']
            if (Object.keys(stored).length === 0) {
                originals.delete(el)
            } else {
                originals.set(el, stored)
            }
        }
    }
}

const applyHighlightLinksInline = () => {
    const links = document.querySelectorAll('a')
    for (const link of Array.from(links)) {
        if (!(link instanceof HTMLElement)) continue
        if (isInWidget(link)) continue
        setInline(
            link,
            'color',
            HIGHLIGHT_TEXT_COLOR,
            highlightOriginals,
            highlightTouched
        )
        setInline(
            link,
            'text-decoration-color',
            HIGHLIGHT_TEXT_COLOR,
            highlightOriginals,
            highlightTouched
        )
        setInline(
            link,
            'text-decoration-line',
            'underline',
            highlightOriginals,
            highlightTouched
        )
        setInline(
            link,
            'background-color',
            HIGHLIGHT_BG_COLOR,
            highlightOriginals,
            highlightTouched
        )
        setInline(
            link,
            'outline',
            `3px solid ${HIGHLIGHT_OUTLINE_COLOR}`,
            highlightOriginals,
            highlightTouched
        )
        setInline(
            link,
            'outline-offset',
            '2px',
            highlightOriginals,
            highlightTouched
        )
        setInline(
            link,
            'border-radius',
            '2px',
            highlightOriginals,
            highlightTouched
        )
    }
}

// Same-origin iframe documents we have themed, tracked for cleanup. Cross-origin
// iframes are inaccessible by design and silently skipped.
const themedIframeDocs = new Set<Document>()
const IFRAME_BASELINE_STYLE_ID = 'area11y-iframe-baseline'
// Set while a mode is active so iframe documents can be given the same html
// class + baseline stylesheet as the top document.
let activeIframeChrome: { activeClass: string; baselineCss: string } | null =
    null

const getSameOriginDoc = (iframe: HTMLIFrameElement): Document | null => {
    try {
        const doc = iframe.contentDocument
        if (!doc) return null
        // Touching location.href throws a SecurityError for cross-origin.
        void doc.location.href
        return doc
    } catch {
        return null
    }
}

const cleanupThemedIframes = (activeClass: string) => {
    themedIframeDocs.forEach((doc) => {
        try {
            const root = doc.documentElement
            root.classList.remove(activeClass)
            const stillThemed =
                root.classList.contains(DARK_MODE_ACTIVE_CLASS) ||
                root.classList.contains(NIGHT_SHIFT_ACTIVE_CLASS)
            if (!stillThemed) {
                doc.getElementById(IFRAME_BASELINE_STYLE_ID)?.remove()
                themedIframeDocs.delete(doc)
            }
        } catch {
            themedIframeDocs.delete(doc)
        }
    })
}

type PassContext = { count: number; limit: number }

const injectIframeChrome = (iframe: HTMLIFrameElement): Document | null => {
    const doc = getSameOriginDoc(iframe)
    if (!doc || !doc.documentElement) return null
    if (activeIframeChrome) {
        doc.documentElement.classList.add(activeIframeChrome.activeClass)
        let style = doc.getElementById(
            IFRAME_BASELINE_STYLE_ID
        ) as HTMLStyleElement | null
        if (!style) {
            style = doc.createElement('style')
            style.id = IFRAME_BASELINE_STYLE_ID
            ;(doc.head || doc.documentElement).appendChild(style)
        }
        style.textContent = activeIframeChrome.baselineCss
        themedIframeDocs.add(doc)
    }
    return doc
}

const themeIframe = (
    iframe: HTMLIFrameElement,
    handler: (el: Element) => void,
    ctx: PassContext
) => {
    const doc = injectIframeChrome(iframe)
    if (doc?.body) runEnhancedPassInScope(doc.body, handler, ctx)
}

// Walks a scope ('*' so custom-element shadow hosts are found too), applying the
// handler to candidates and recursing into open shadow roots and same-origin
// iframes so theming reaches every reachable corner of the page.
const runEnhancedPassInScope = (
    root: ParentNode,
    handler: (el: Element) => void,
    ctx: PassContext
) => {
    const rootElement = root instanceof Element ? root : null
    if (rootElement) {
        if (isCandidate(rootElement)) {
            handler(rootElement)
            ctx.count += 1
        }
        if (rootElement.shadowRoot && !isInWidget(rootElement)) {
            runEnhancedPassInScope(rootElement.shadowRoot, handler, ctx)
        }
        if (rootElement instanceof HTMLIFrameElement) {
            themeIframe(rootElement, handler, ctx)
        }
    }
    const scope = root as Element | Document | ShadowRoot
    const elements = scope.querySelectorAll('*')
    for (const el of Array.from(elements)) {
        if (ctx.count >= ctx.limit) break
        if (isInWidget(el)) continue
        if (el.shadowRoot) runEnhancedPassInScope(el.shadowRoot, handler, ctx)
        if (el instanceof HTMLIFrameElement) themeIframe(el, handler, ctx)
        if (isCandidate(el)) {
            handler(el)
            ctx.count += 1
        }
    }
}

const runEnhancedPass = (
    root: ParentNode,
    handler: (el: Element) => void,
    limit = MAX_PROCESS_ELEMENTS
) => {
    runEnhancedPassInScope(root, handler, { count: 0, limit })
}

// Read-only collection pass: gathers candidates across shadow roots and
// same-origin iframes (injecting iframe chrome along the way) WITHOUT touching
// styles. The expensive getComputedStyle + write work is then spread across
// idle slices so a large DOM doesn't lock the main thread on toggle.
const collectCandidates = (
    root: ParentNode,
    ctx: PassContext,
    out: Element[]
) => {
    const rootElement = root instanceof Element ? root : null
    if (rootElement) {
        if (isCandidate(rootElement)) {
            out.push(rootElement)
            ctx.count += 1
        }
        if (rootElement.shadowRoot && !isInWidget(rootElement)) {
            collectCandidates(rootElement.shadowRoot, ctx, out)
        }
        if (rootElement instanceof HTMLIFrameElement) {
            const doc = injectIframeChrome(rootElement)
            if (doc?.body) collectCandidates(doc.body, ctx, out)
        }
    }
    const scope = root as Element | Document | ShadowRoot
    const elements = scope.querySelectorAll('*')
    for (const el of Array.from(elements)) {
        if (ctx.count >= ctx.limit) break
        if (isInWidget(el)) continue
        if (el.shadowRoot) collectCandidates(el.shadowRoot, ctx, out)
        if (el instanceof HTMLIFrameElement) {
            const doc = injectIframeChrome(el)
            if (doc?.body) collectCandidates(doc.body, ctx, out)
        }
        if (isCandidate(el)) {
            out.push(el)
            ctx.count += 1
        }
    }
}

type IdleHandle = number
const requestIdle = (cb: (deadline: IdleDeadline) => void): IdleHandle =>
    typeof requestIdleCallback === 'function'
        ? requestIdleCallback(cb, { timeout: 500 })
        : window.setTimeout(
              () =>
                  cb({
                      timeRemaining: () => 16,
                      didTimeout: true,
                  } as IdleDeadline),
              16
          )
const cancelIdle = (handle: IdleHandle | null) => {
    if (handle == null) return
    if (typeof cancelIdleCallback === 'function') cancelIdleCallback(handle)
    else window.clearTimeout(handle)
}

const processInChunks = (
    elements: Element[],
    handler: (el: Element) => void,
    onHandle: (handle: IdleHandle | null) => void
) => {
    let index = 0
    const step = (deadline: IdleDeadline) => {
        while (
            index < elements.length &&
            (deadline.didTimeout || deadline.timeRemaining() > 4)
        ) {
            const el = elements[index++]
            if (el.isConnected) handler(el)
        }
        onHandle(index < elements.length ? requestIdle(step) : null)
    }
    onHandle(requestIdle(step))
}

let darkPassHandle: IdleHandle | null = null
let nightPassHandle: IdleHandle | null = null

// Briefly disables transitions/animations so applying thousands of inline
// overrides doesn't trigger a visible repaint cascade on toggle.
const suppressTransitionsBriefly = () => {
    if (typeof document === 'undefined') return
    const id = 'area11y-no-transitions'
    if (document.getElementById(id)) return
    const style = document.createElement('style')
    style.id = id
    style.textContent = `*, *::before, *::after {
        transition: none !important;
        animation-duration: 0s !important;
        animation-delay: 0s !important;
    }`
    document.head.appendChild(style)
    requestAnimationFrame(() =>
        requestAnimationFrame(() => style.remove())
    )
}

const observe = (
    observerRef: 'dark' | 'night',
    handler: (el: Element) => void,
    processed: WeakSet<Element>
) => {
    // Class / state changes (tab activation, theme toggles, JS-driven hover,
    // lazily coloured widgets) alter computed styles after the first pass. We
    // re-evaluate the changed element + its subtree so they don't stay stuck on
    // their pre-theme colours. Batched per frame to avoid thrashing on
    // class-churning sites. 'style' is intentionally NOT observed: our own
    // inline writes would feed back into the observer in an endless loop.
    let pending: Set<Element> | null = null
    let scheduled = false
    const flush = () => {
        scheduled = false
        const targets = pending
        pending = null
        if (!targets) return
        // Bail if the mode was switched off after this flush was queued — disable
        // removes the html class synchronously, so a stale flush must not re-apply
        // theming after restoreInline already reverted everything.
        const activeClass =
            observerRef === 'dark'
                ? DARK_MODE_ACTIVE_CLASS
                : NIGHT_SHIFT_ACTIVE_CLASS
        if (!document.documentElement.classList.contains(activeClass)) return
        for (const target of targets) {
            if (!target.isConnected || isInWidget(target)) continue
            processed.delete(target)
            const descendants = target.querySelectorAll(CANDIDATE_SELECTOR)
            for (const d of Array.from(descendants)) processed.delete(d)
            runEnhancedPass(target, handler)
        }
    }
    const schedule = (el: Element) => {
        if (!pending) pending = new Set()
        pending.add(el)
        if (!scheduled) {
            scheduled = true
            requestAnimationFrame(flush)
        }
    }
    const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type === 'childList') {
                for (const node of Array.from(mutation.addedNodes)) {
                    if (!(node instanceof Element)) continue
                    if (isInWidget(node)) continue
                    runEnhancedPass(node, handler, MAX_PROCESS_ELEMENTS)
                }
            } else if (mutation.type === 'attributes') {
                const target = mutation.target
                if (!(target instanceof Element)) continue
                if (isInWidget(target)) continue
                schedule(target)
            }
        }
    })
    observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
        attributeFilter: [
            'class',
            'data-theme',
            'aria-pressed',
            'aria-checked',
            'aria-selected',
        ],
    })
    if (observerRef === 'dark') darkObserver = observer
    else nightObserver = observer
}

const injectBaselineOnce = (
    id: string,
    cssText: string,
    alreadyInjected: boolean,
    setInjected: (value: boolean) => void,
    cssRules: string[]
) => {
    cssRules.push(cssText)
    if (!alreadyInjected) {
        setInjected(true)
    }
}

export class A11yService {
    private static assetBase = ''
    static setAssetBase(base: string) {
        this.assetBase = base.replace(/\/$/, '')
    }
    private static magnifierState = {
        bandHeight: 140,
        overlay: undefined as HTMLDivElement | undefined,
        mouseMoveHandler: undefined as
            | ((event: MouseEvent) => void)
            | undefined,
        touchMoveHandler: undefined as
            | ((event: TouchEvent) => void)
            | undefined,
        touchStartHandler: undefined as
            | ((event: TouchEvent) => void)
            | undefined,
        resizeHandler: undefined as (() => void) | undefined,
        lastBandCenterY: undefined as number | undefined,
    }

    static enableDarkModeHybrid(cssRules: string[]) {
        darkActive = true
        document.documentElement.classList.add(DARK_MODE_ACTIVE_CLASS)
        activeIframeChrome = {
            activeClass: DARK_MODE_ACTIVE_CLASS,
            baselineCss: baselineDarkCss,
        }
        injectBaselineOnce(
            'area11y-dark-baseline',
            baselineDarkCss,
            darkBaselineInjected,
            (value) => {
                darkBaselineInjected = value
            },
            cssRules
        )
        const darkHandler = (el: Element) =>
            applyPaletteToElement(
                el,
                DARK_PALETTE,
                'dark',
                darkProcessed,
                darkOriginals,
                darkTouched
            )
        // Observer first so nodes added while the chunked pass runs are caught.
        if (!darkObserver) {
            observe('dark', darkHandler, darkProcessed)
        }
        cancelIdle(darkPassHandle)
        darkPassHandle = null
        const darkElements: Element[] = []
        collectCandidates(
            document.body,
            { count: 0, limit: MAX_PROCESS_ELEMENTS },
            darkElements
        )
        processInChunks(darkElements, darkHandler, (handle) => {
            darkPassHandle = handle
        })
        applySvgColors(document.body, DARK_PALETTE, 'dark')
    }

    static disableDarkModeHybrid() {
        document.documentElement.classList.remove(DARK_MODE_ACTIVE_CLASS)
        if (!darkActive) return
        darkActive = false
        if (activeIframeChrome?.activeClass === DARK_MODE_ACTIVE_CLASS) {
            activeIframeChrome = null
        }
        cleanupThemedIframes(DARK_MODE_ACTIVE_CLASS)
        cancelIdle(darkPassHandle)
        darkPassHandle = null
        if (darkObserver) {
            darkObserver.disconnect()
            darkObserver = null
        }
        restoreInline(darkOriginals, darkTouched)
        restoreInline(svgColorOriginals, svgColorTouched)
        darkProcessed = new WeakSet<Element>()
        themedButtonEls.forEach((b) => b.classList.remove(THEMED_BUTTON_CLASS))
        themedButtonEls.clear()
    }

    static enableNightShiftHybrid(cssRules: string[]) {
        nightActive = true
        document.documentElement.classList.add(NIGHT_SHIFT_ACTIVE_CLASS)
        activeIframeChrome = {
            activeClass: NIGHT_SHIFT_ACTIVE_CLASS,
            baselineCss: baselineNightCss,
        }
        injectBaselineOnce(
            'area11y-night-baseline',
            baselineNightCss,
            nightBaselineInjected,
            (value) => {
                nightBaselineInjected = value
            },
            cssRules
        )
        const nightHandler = (el: Element) =>
            applyPaletteToElement(
                el,
                NIGHT_PALETTE,
                'night',
                nightProcessed,
                nightOriginals,
                nightTouched
            )
        // Observer first so nodes added while the chunked pass runs are caught.
        if (!nightObserver) {
            observe('night', nightHandler, nightProcessed)
        }
        cancelIdle(nightPassHandle)
        nightPassHandle = null
        const nightElements: Element[] = []
        collectCandidates(
            document.body,
            { count: 0, limit: MAX_PROCESS_ELEMENTS },
            nightElements
        )
        processInChunks(nightElements, nightHandler, (handle) => {
            nightPassHandle = handle
        })
        applyNightSolarize(document.body, MAX_PROCESS_ELEMENTS)
        startNightSolarizeObserver()
        applySvgColors(document.body, NIGHT_PALETTE, 'night')
    }

    static disableNightShiftHybrid() {
        document.documentElement.classList.remove(NIGHT_SHIFT_ACTIVE_CLASS)
        if (!nightActive) return
        nightActive = false
        if (activeIframeChrome?.activeClass === NIGHT_SHIFT_ACTIVE_CLASS) {
            activeIframeChrome = null
        }
        cleanupThemedIframes(NIGHT_SHIFT_ACTIVE_CLASS)
        cancelIdle(nightPassHandle)
        nightPassHandle = null
        if (nightObserver) {
            nightObserver.disconnect()
            nightObserver = null
        }
        restoreInline(nightOriginals, nightTouched)
        restoreInline(svgColorOriginals, svgColorTouched)
        nightProcessed = new WeakSet<Element>()
        stopNightSolarize()
        themedButtonEls.forEach((b) => b.classList.remove(THEMED_BUTTON_CLASS))
        themedButtonEls.clear()
    }

    static applySettings(settings: A11ySettings) {
        suppressTransitionsBriefly()
        let styleEl = document.getElementById(STYLE_ID) as HTMLStyleElement
        if (!styleEl) {
            styleEl = document.createElement('style')
            styleEl.id = STYLE_ID
            document.head.appendChild(styleEl)
        }

        const effective: A11ySettings = { ...settings }
        if (effective.theme === 'dark') {
            effective.contrast = false
        } else if (effective.contrast) {
            effective.theme = 'light'
        }
        // Resolve 'auto' against the OS preference at apply time so it actually
        // takes effect (and re-resolves whenever applySettings is re-run from
        // the prefers-color-scheme listener).
        const prefersDark =
            typeof window !== 'undefined' &&
            typeof window.matchMedia === 'function' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches
        const resolvedTheme: 'light' | 'dark' =
            effective.theme === 'auto'
                ? prefersDark
                    ? 'dark'
                    : 'light'
                : effective.theme === 'dark'
                  ? 'dark'
                  : 'light'
        if (effective.magnifier) {
            effective.bigCursor = false
        } else if (effective.bigCursor) {
            effective.magnifier = false
        }
        if (effective.dyslexiaFont) {
            effective.readableFont = false
        } else if (effective.readableFont) {
            effective.dyslexiaFont = false
        }

        const coreRoot = document.getElementById('area11y-root') as
            | (HTMLElement & { shadowRoot?: ShadowRoot })
            | null
        const widgetRoot = coreRoot?.shadowRoot?.getElementById(
            'app-root'
        ) as HTMLElement | null

        const cssRules: string[] = []
        highlightLinksActive = Boolean(effective.highlightLinks)
        document.documentElement.classList.toggle(
            HIGHLIGHT_LINKS_ACTIVE_CLASS,
            Boolean(effective.highlightLinks)
        )
        if (effective.highlightLinks) {
            applyHighlightLinksInline()
        } else if (highlightTouched.size > 0) {
            // Restoring puts the links back to the page's own styles, which also
            // drops any dark / night colours on them. Mark them unprocessed so
            // the theming pass below re-themes them if a mode is active.
            const links = Array.from(highlightTouched)
            restoreInline(highlightOriginals, highlightTouched)
            for (const link of links) {
                darkProcessed.delete(link)
                nightProcessed.delete(link)
            }
        }
        const isNightShift = effective.contrast
        const isDarkMode = !effective.contrast && resolvedTheme === 'dark'

        if (isNightShift) {
            this.disableDarkModeHybrid()
            this.enableNightShiftHybrid(cssRules)
        } else if (isDarkMode) {
            this.disableNightShiftHybrid()
            this.enableDarkModeHybrid(cssRules)
        } else {
            this.disableDarkModeHybrid()
            this.disableNightShiftHybrid()
        }

        // Big Cursor
        if (effective.bigCursor) {
            document.documentElement.classList.add(BIG_CURSOR_ACTIVE_CLASS)
            coreRoot?.classList.add(BIG_CURSOR_ACTIVE_CLASS)
            widgetRoot?.classList.add(BIG_CURSOR_ACTIVE_CLASS)

            cssRules.push(`
                html.${BIG_CURSOR_ACTIVE_CLASS} :not(#area11y-root):not(#area11y-root *):not(#area11y-magnifier-overlay):not(#area11y-magnifier-overlay *):not(:is(a[href], button, [role="button"], input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled]), summary, label[for])) {
                  cursor: url('${this.assetBase
                    ? `${this.assetBase}/image/cursor_big.svg`
                    : '/image/cursor_big.svg'
                }') 8 8, auto;
                }
              
                html.${BIG_CURSOR_ACTIVE_CLASS} :is(
                  a[href],
                  button,
                  [role="button"],
                  input:not([type="hidden"]):not([disabled]),
                  select:not([disabled]),
                  textarea:not([disabled]),
                  summary,
                  label[for]
                ):not(#area11y-root):not(#area11y-magnifier-overlay):not(#area11y-root *):not(#area11y-magnifier-overlay *),
                html.${BIG_CURSOR_ACTIVE_CLASS} :is(
                  a[href],
                  button,
                  [role="button"],
                  input:not([type="hidden"]):not([disabled]),
                  select:not([disabled]),
                  textarea:not([disabled]),
                  summary,
                  label[for]
                ):not(#area11y-root):not(#area11y-magnifier-overlay):not(#area11y-root *):not(#area11y-magnifier-overlay *):hover,
                html.${BIG_CURSOR_ACTIVE_CLASS} :is(
                  a[href],
                  button,
                  [role="button"],
                  input:not([type="hidden"]):not([disabled]),
                  select:not([disabled]),
                  textarea:not([disabled]),
                  summary,
                  label[for]
                ):not(#area11y-root):not(#area11y-magnifier-overlay):not(#area11y-root *):not(#area11y-magnifier-overlay *):active,
                html.${BIG_CURSOR_ACTIVE_CLASS} :is(
                  a[href],
                  button,
                  [role="button"],
                  input:not([type="hidden"]):not([disabled]),
                  select:not([disabled]),
                  textarea:not([disabled]),
                  summary,
                  label[for]
                ):not(#area11y-root):not(#area11y-magnifier-overlay):not(#area11y-root *):not(#area11y-magnifier-overlay *):focus,
                html.${BIG_CURSOR_ACTIVE_CLASS} :is(
                  a[href],
                  button,
                  [role="button"],
                  input:not([type="hidden"]):not([disabled]),
                  select:not([disabled]),
                  textarea:not([disabled]),
                  summary,
                  label[for]
                ):not(#area11y-root):not(#area11y-magnifier-overlay):not(#area11y-root *):not(#area11y-magnifier-overlay *):focus-visible {
                  cursor: url('${this.assetBase
                    ? `${this.assetBase}/image/pointinghand.svg`
                    : '/image/pointinghand.svg'
                }') 8 8, auto !important;
                }
            `)
        } else {
            document.documentElement.classList.remove(BIG_CURSOR_ACTIVE_CLASS)
            coreRoot?.classList.remove(BIG_CURSOR_ACTIVE_CLASS)
            widgetRoot?.classList.remove(BIG_CURSOR_ACTIVE_CLASS)
        }

        // Night Shift handled above

        // Font overrides apply to every element under <body> (including its
        // direct children) except icon-font glyphs: replacing their font-family
        // turns icons into stray letters / empty boxes.
        const iconFontExclusions = [
            '[class*="icon" i]',
            '[class*="fa-"]',
            '.fa',
            '.fas',
            '.far',
            '.fal',
            '.fab',
            '.glyphicon',
            '[class*="material-symbols"]',
            '[class*="bi-"]',
            '[class*="ri-"]',
            '[data-icon]',
        ]
            .map((selector) => `:not(${selector})`)
            .join('')
        const fontTargetSelector = `
            body > *:not(#area11y-root):not(#area11y-magnifier-overlay)${iconFontExclusions},
            body > *:not(#area11y-root):not(#area11y-magnifier-overlay) *${iconFontExclusions}`

        // Dyslexia Friendly Font
        if (effective.dyslexiaFont) {
            cssRules.push(`
            ${fontTargetSelector} {
                font-family: "OpenDyslexic", "Comic Sans MS", "Arial", sans-serif !important;
            }
        `)
        }

        // Readable Font
        if (effective.readableFont) {
            cssRules.push(`
            ${fontTargetSelector} {
                font-family: "Atkinson Hyperlegible", sans-serif !important;
            }
        `)
        }
        if (effective.dyslexiaFont || effective.readableFont) {
            cssRules.push(`
              :where(pre, code, kbd, samp):not(#area11y-root *):not(#area11y-magnifier-overlay *) {
                font-family: ui-monospace, SFMono-Regular, SFMono, Menlo, Consolas, "Liberation Mono", monospace !important;
              }
            `)
        }

        // Line Height & Letter Spacing (Aggressiver auf Textelemente)
        const textSelector =
            'p, li, span, h1, h2, h3, h4, h5, h6, a, div:not(:has(*))'
        if (effective.lineHeight !== DEFAULT_SETTINGS.lineHeight) {
            cssRules.push(`
            ${textSelector} { 
                line-height: ${effective.lineHeight} !important;
            } 
        `)
        }
        if (effective.letterSpacing !== DEFAULT_SETTINGS.letterSpacing) {
            cssRules.push(`
            ${textSelector} { 
                letter-spacing: ${effective.letterSpacing}px !important;
            } 
        `)
        }

        // Link Highlighting
        if (effective.highlightLinks) {
            cssRules.push(`
                html.${HIGHLIGHT_LINKS_ACTIVE_CLASS} body a:not(#area11y-root *):not(#area11y-magnifier-overlay *) {
                outline: 3px solid ${HIGHLIGHT_OUTLINE_COLOR} !important;
                outline-offset: 2px !important;
                background-color: ${HIGHLIGHT_BG_COLOR} !important;
                color: ${HIGHLIGHT_TEXT_COLOR} !important;
                padding: 1px 2px !important;
                border-radius: 2px !important;
                text-decoration: underline !important;
                width: fit-content;
            } 
        `)
        }

        cssRules.push(`
            .area11y-read-aloud-hover {
                outline: 2px solid var(--area11y-accent) !important;
                outline-offset: 2px !important;
                cursor: pointer !important;
            }
        `)

        // Reduce Motion
        if (effective.reduceMotion) {
            cssRules.push(`
            *, *:before, *:after {
                animation-delay: -1ms !important;
                animation-duration: 1ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0s !important;
                scroll-behavior: auto !important;
            }
        `)
        }

        document.documentElement.classList.toggle(
            HIDE_MEDIA_ACTIVE_CLASS,
            Boolean(effective.hideImages)
        )
        if (effective.hideImages) {
            cssRules.push(HIDE_MEDIA_CSS)
        }

        if (effective.magnifier) {
            document.documentElement.classList.add(MAGNIFIER_ACTIVE_CLASS)
            cssRules.push(`
                html.${MAGNIFIER_ACTIVE_CLASS} #${MAGNIFIER_OVERLAY_ID} {
                    position: fixed;
                    inset: 0;
                    pointer-events: none;
                    z-index: 2147483646;
                }
                html.${MAGNIFIER_ACTIVE_CLASS} #${MAGNIFIER_OVERLAY_ID} .area11y-readingmask-top,
                html.${MAGNIFIER_ACTIVE_CLASS} #${MAGNIFIER_OVERLAY_ID} .area11y-readingmask-bottom {
                    position: absolute;
                    left: 0;
                    right: 0;
                    background: rgba(0, 0, 0, 0.45);
                }
                html.${MAGNIFIER_ACTIVE_CLASS} #${MAGNIFIER_OVERLAY_ID} .area11y-readingmask-top {
                    top: 0;
                    height: var(--area11y-readingmask-top, 0px);
                }
                html.${MAGNIFIER_ACTIVE_CLASS} #${MAGNIFIER_OVERLAY_ID} .area11y-readingmask-band {
                    position: absolute;
                    left: 0;
                    right: 0;
                    top: var(--area11y-readingmask-band-y, 0px);
                    height: var(--area11y-readingmask-band-h, 110px);
                    background: transparent;
                    border-top: 5px solid var(--area11y-accent);
                    border-bottom: 5px solid var(--area11y-accent);
                }
                html.${MAGNIFIER_ACTIVE_CLASS} #${MAGNIFIER_OVERLAY_ID} .area11y-readingmask-bottom {
                    bottom: 0;
                    height: var(--area11y-readingmask-bottom, 0px);
                }
            `)
            this.enableMagnifier()
        } else {
            document.documentElement.classList.remove(MAGNIFIER_ACTIVE_CLASS)
            this.disableMagnifier()
        }

        if (effective.fontSize !== 100) {
            fontSizeScale = effective.fontSize / 100
            applyFontSizeInSubtree(document.body, fontSizeScale)
            startFontSizeObserver()
        } else {
            stopFontSizeObserver()
            restoreInline(fontSizeOriginals, fontSizeTouched)
            fontSizeBase = new WeakMap<Element, number>()
            fontSizeScale = 1
        }

        styleEl.innerHTML = cssRules.join('\n')
        // The pre-paint rule from AppEntry only bridges the gap until this
        // stylesheet is in place.
        document.getElementById('area11y-prehide-media')?.remove()
    }

    static clearSettings() {
        const styleEl = document.getElementById(STYLE_ID)
        if (styleEl) {
            styleEl.remove()
        }
        document.getElementById('area11y-prepaint-theme')?.remove()
        this.disableDarkModeHybrid()
        this.disableNightShiftHybrid()
        stopFontSizeObserver()
        restoreInline(fontSizeOriginals, fontSizeTouched)
        fontSizeBase = new WeakMap<Element, number>()
        fontSizeScale = 1
        document.documentElement.classList.remove(BIG_CURSOR_ACTIVE_CLASS)
        document.documentElement.classList.remove(MAGNIFIER_ACTIVE_CLASS)
        const coreRoot = document.getElementById('area11y-root') as
            | (HTMLElement & { shadowRoot?: ShadowRoot })
            | null
        const widgetRoot = coreRoot?.shadowRoot?.getElementById(
            'app-root'
        ) as HTMLElement | null
        coreRoot?.classList.remove(BIG_CURSOR_ACTIVE_CLASS)
        widgetRoot?.classList.remove(BIG_CURSOR_ACTIVE_CLASS)
        document.documentElement.classList.remove(HIDE_MEDIA_ACTIVE_CLASS)
        document.getElementById('area11y-prehide-media')?.remove()
        highlightLinksActive = false
        document.documentElement.classList.remove(HIGHLIGHT_LINKS_ACTIVE_CLASS)
        restoreInline(highlightOriginals, highlightTouched)
        this.disableMagnifier()
    }

    private static enableMagnifier() {
        if (this.magnifierState.overlay) return

        const overlay = document.createElement('div')
        overlay.id = MAGNIFIER_OVERLAY_ID
        overlay.style.position = 'fixed'
        overlay.style.inset = '0'
        overlay.style.pointerEvents = 'none'
        overlay.style.zIndex = '2147483646'

        const topLayer = document.createElement('div')
        topLayer.className = 'area11y-readingmask-top'
        const band = document.createElement('div')
        band.className = 'area11y-readingmask-band'
        const bottomLayer = document.createElement('div')
        bottomLayer.className = 'area11y-readingmask-bottom'

        overlay.appendChild(topLayer)
        overlay.appendChild(band)
        overlay.appendChild(bottomLayer)
        document.body.appendChild(overlay)

        const updateMask = (clientY?: number) => {
            const bandHeight = this.magnifierState.bandHeight
            const viewportHeight = window.innerHeight || 0
            const fallbackY = viewportHeight / 2
            const centerY =
                typeof clientY === 'number'
                    ? clientY
                    : this.magnifierState.lastBandCenterY ?? fallbackY
            const maxTop = Math.max(0, viewportHeight - bandHeight)
            const bandTop = Math.min(
                maxTop,
                Math.max(0, centerY - bandHeight / 2)
            )
            const bandBottom = Math.max(
                0,
                viewportHeight - bandTop - bandHeight
            )
            overlay.style.setProperty(
                '--area11y-readingmask-band-h',
                `${bandHeight}px`
            )
            overlay.style.setProperty(
                '--area11y-readingmask-band-y',
                `${bandTop}px`
            )
            overlay.style.setProperty('--area11y-readingmask-top', `${bandTop}px`)
            overlay.style.setProperty(
                '--area11y-readingmask-bottom',
                `${bandBottom}px`
            )
            this.magnifierState.lastBandCenterY = bandTop + bandHeight / 2
        }

        const handleMouseMove = (event: MouseEvent) => {
            updateMask(event.clientY)
        }
        const handleTouchMove = (event: TouchEvent) => {
            if (event.touches.length === 0) return
            updateMask(event.touches[0].clientY)
        }
        const handleTouchStart = (event: TouchEvent) => {
            if (event.touches.length === 0) return
            updateMask(event.touches[0].clientY)
        }
        const handleResize = () => {
            updateMask()
        }

        window.addEventListener('mousemove', handleMouseMove, true)
        window.addEventListener('touchmove', handleTouchMove, { passive: true })
        window.addEventListener('touchstart', handleTouchStart, {
            passive: true,
        })
        window.addEventListener('resize', handleResize)

        updateMask()

        this.magnifierState.overlay = overlay
        this.magnifierState.mouseMoveHandler = handleMouseMove
        this.magnifierState.touchMoveHandler = handleTouchMove
        this.magnifierState.touchStartHandler = handleTouchStart
        this.magnifierState.resizeHandler = handleResize
    }

    private static disableMagnifier() {
        if (!this.magnifierState.overlay) return
        if (this.magnifierState.mouseMoveHandler) {
            window.removeEventListener(
                'mousemove',
                this.magnifierState.mouseMoveHandler,
                true
            )
        }
        if (this.magnifierState.touchMoveHandler) {
            window.removeEventListener(
                'touchmove',
                this.magnifierState.touchMoveHandler
            )
        }
        if (this.magnifierState.touchStartHandler) {
            window.removeEventListener(
                'touchstart',
                this.magnifierState.touchStartHandler
            )
        }
        if (this.magnifierState.resizeHandler) {
            window.removeEventListener(
                'resize',
                this.magnifierState.resizeHandler
            )
        }
        this.magnifierState.mouseMoveHandler = undefined
        this.magnifierState.touchMoveHandler = undefined
        this.magnifierState.touchStartHandler = undefined
        this.magnifierState.resizeHandler = undefined
        this.magnifierState.lastBandCenterY = undefined
        this.magnifierState.overlay?.remove()
        this.magnifierState.overlay = undefined
    }
}
