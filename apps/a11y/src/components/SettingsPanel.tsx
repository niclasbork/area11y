import React, { useMemo, useRef, useEffect, useState } from 'react'
import {
    X,
    Type,
    Sun,
    AlignLeft,
    Activity,
    Link2,
    MousePointer2,
    Volume2,
    ImageOff,
    Search,
    Moon,
    Eye,
    RotateCcw,
} from 'lucide-react'
import { A11ySettings, Position } from '../types'
import { Toggle } from './Toggle'
import { Slider } from './Slider'
import { WidgetTranslations } from '../i18n'
import { AccessibilityIcon } from './AccessibilityIcon'

interface SettingsPanelProps {
    settings: A11ySettings
    onUpdate: (updates: Partial<A11ySettings>) => void
    onClose: () => void
    position: Position
    primaryColor: string
    translations: WidgetTranslations
    hotkey?: string
    onReset: () => void
}

export const SettingsPanel = ({
    settings,
    onUpdate,
    onClose,
    position,
    primaryColor,
    translations,
    hotkey,
    onReset,
}: SettingsPanelProps) => {
    const panelRef = useRef<HTMLDivElement>(null)
    const scrollAreaRef = useRef<HTMLDivElement>(null)
    const [isScrolling, setIsScrolling] = useState(false)
    const [isWideViewport, setIsWideViewport] = useState(false)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose()
        }
        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [onClose])

    // Dialog focus management: move focus into the panel when it opens, keep
    // Tab / Shift+Tab inside it, and hand focus back to whatever opened it
    // (the floating button or the page element focused before the hotkey).
    // The panel lives in a shadow root, so the focused element is read from
    // that root rather than from `document.activeElement` (which is the host).
    useEffect(() => {
        const panel = panelRef.current
        if (!panel) return
        const root = panel.getRootNode() as Document | ShadowRoot
        const previouslyFocused =
            (root.activeElement as HTMLElement | null) ||
            (document.activeElement as HTMLElement | null)

        const getFocusable = () =>
            Array.from(
                panel.querySelectorAll<HTMLElement>(
                    'button:not([disabled]), a[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
                )
            ).filter((el) => el.getClientRects().length > 0)

        panel.focus({ preventScroll: true })

        const handleTab = (e: KeyboardEvent) => {
            if (e.key !== 'Tab') return
            const focusable = getFocusable()
            if (focusable.length === 0) {
                e.preventDefault()
                panel.focus({ preventScroll: true })
                return
            }
            const first = focusable[0]
            const last = focusable[focusable.length - 1]
            const active = root.activeElement as HTMLElement | null
            const inside = active ? panel.contains(active) : false
            if (e.shiftKey) {
                if (!inside || active === first || active === panel) {
                    e.preventDefault()
                    last.focus()
                }
            } else if (!inside || active === last) {
                e.preventDefault()
                first.focus()
            }
        }
        // Capture on window: also catches Tab when focus has slipped out to the
        // host page, and pulls it back into the dialog.
        window.addEventListener('keydown', handleTab, true)

        return () => {
            window.removeEventListener('keydown', handleTab, true)
            if (previouslyFocused?.isConnected) {
                previouslyFocused.focus({ preventScroll: true })
            }
        }
    }, [])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(min-width: 640px)')
        const update = () => setIsWideViewport(mediaQuery.matches)
        update()
        if (mediaQuery.addEventListener) {
            mediaQuery.addEventListener('change', update)
            return () => mediaQuery.removeEventListener('change', update)
        }
        mediaQuery.addListener(update)
        return () => mediaQuery.removeListener(update)
    }, [])

    const panelStyle = useMemo((): React.CSSProperties => {
        const style: React.CSSProperties = {
            position: 'fixed',
            bottom: '90px',
            zIndex: 1000000,
            width: isWideViewport ? '100%' : '90%',
            maxWidth: '520px',
            maxHeight: '76svh',
            fontSize: '16px',
        }

        if (position === 'bottom-left') style.left = '15px'
        else if (position === 'bottom-center') {
            style.left = '50%'
            style.transform = 'translateX(-50%)'
        } else style.right = '15px'

        return style
    }, [isWideViewport, position])

    const scrollStyle = useMemo(
        () =>
        ({
            '--scroll-thumb-color': primaryColor,
        } as React.CSSProperties & { [key: string]: string }),
        [primaryColor]
    )

    useEffect(() => {
        const node = scrollAreaRef.current
        if (!node) return

        let timeout: number | null = null

        const handleScroll = () => {
            setIsScrolling(true)
            if (timeout) {
                window.clearTimeout(timeout)
            }
            timeout = window.setTimeout(() => {
                setIsScrolling(false)
            }, 600)
        }

        node.addEventListener('scroll', handleScroll)
        return () => {
            node.removeEventListener('scroll', handleScroll)
            if (timeout) {
                window.clearTimeout(timeout)
            }
        }
    }, [])

    return (
        <div
            ref={panelRef}
            style={panelStyle}
            className='setting-panel bg-white shadow-2xl rounded-3xl border border-gray-100 flex flex-col overflow-hidden'
            role='dialog'
            aria-modal='true'
            aria-label={translations.panelTitle}
            tabIndex={-1}
        >
            <div className='p-5 border-b border-gray-50 flex justify-between items-center bg-white'>
                <div
                    className='p-2 rounded-full'
                    style={{ backgroundColor: `${primaryColor}50` }}
                >
                    <AccessibilityIcon background={primaryColor} size={25} />
                </div>
                <div className='flex items-center gap-3'>
                    <h2 className='text-lg font-black text-gray-900 tracking-tight flex items-center gap-3 max-[460px]:flex-col'>
                        {translations.panelTitle}
                        {hotkey && isWideViewport && (
                            <span className='text-xs font-medium text-gray-900 border border-gray-200 rounded-full px-2 py-1'>
                                {hotkey}
                            </span>
                        )}
                    </h2>
                </div>
                <button
                    type='button'
                    onClick={onClose}
                    aria-label={translations.closeLabel}
                    className='p-2 hover:bg-gray-100 rounded-full transition-colors border-none bg-transparent cursor-pointer text-gray-400 hover:text-gray-600'
                >
                    <X size={20} />
                </button>
            </div>

            <div
                ref={scrollAreaRef}
                style={scrollStyle}
                className={`setting-panel-scroll flex-1 p-6 space-y-8 bg-white${isScrolling ? ' setting-panel-scroll--visible' : ''
                    }`}
            >
                <section>
                    <div className='flex items-center gap-2 mb-4 text-gray-400'>
                        <Type size={14} />
                        <span className='text-[10px] font-bold uppercase tracking-widest'>
                            {translations.sections.textLayout}
                        </span>
                    </div>
                    <Slider
                        label={translations.sliders.fontSize}
                        value={settings.fontSize}
                        min={100}
                        max={200}
                        step={10}
                        unit='%'
                        onChange={(v) => onUpdate({ fontSize: v })}
                        primaryColor={primaryColor}
                    />
                    <Slider
                        label={translations.sliders.lineHeight}
                        value={settings.lineHeight}
                        min={1}
                        max={3.0}
                        step={0.1}
                        onChange={(v) => onUpdate({ lineHeight: v })}
                        primaryColor={primaryColor}
                    />
                    <Slider
                        label={translations.sliders.letterSpacing}
                        value={settings.letterSpacing}
                        min={0}
                        max={10}
                        step={1}
                        unit='px'
                        onChange={(v) => onUpdate({ letterSpacing: v })}
                        primaryColor={primaryColor}
                    />
                </section>

                <section>
                    <div className='flex items-center gap-2 mb-4 text-gray-400'>
                        <Eye size={14} />
                        <span className='text-[10px] font-bold uppercase tracking-widest'>
                            {translations.sections.visualAids}
                        </span>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <Toggle
                            active={settings.theme === 'dark'}
                            onClick={() =>
                                onUpdate({
                                    theme:
                                        settings.theme === 'dark'
                                            ? 'light'
                                            : 'dark',
                                })
                            }
                            icon={<Moon size={18} />}
                            label={translations.toggles.darkMode}
                            primaryColor={primaryColor}
                        />
                        <Toggle
                            active={settings.contrast}
                            onClick={() =>
                                onUpdate({ contrast: !settings.contrast })
                            }
                            icon={<Sun size={18} />}
                            label={translations.toggles.contrast}
                            primaryColor={primaryColor}
                        />
                        <Toggle
                            active={settings.dyslexiaFont}
                            onClick={() =>
                                onUpdate({
                                    dyslexiaFont: !settings.dyslexiaFont,
                                })
                            }
                            icon={<AlignLeft size={18} />}
                            label={translations.toggles.dyslexia}
                            primaryColor={primaryColor}
                        />
                        <Toggle
                            active={settings.readableFont}
                            onClick={() =>
                                onUpdate({
                                    readableFont: !settings.readableFont,
                                })
                            }
                            icon={<Type size={18} />}
                            label={translations.toggles.readableFont}
                            primaryColor={primaryColor}
                        />
                        <Toggle
                            active={settings.highlightLinks}
                            onClick={() =>
                                onUpdate({
                                    highlightLinks: !settings.highlightLinks,
                                })
                            }
                            icon={<Link2 size={18} />}
                            label={translations.toggles.highlightLinks}
                            primaryColor={primaryColor}
                        />
                        <Toggle
                            active={settings.hideImages}
                            onClick={() =>
                                onUpdate({
                                    hideImages: !settings.hideImages,
                                })
                            }
                            icon={<ImageOff size={18} />}
                            label={translations.toggles.hideImages}
                            primaryColor={primaryColor}
                        />
                        <Toggle
                            active={settings.magnifier}
                            onClick={() =>
                                onUpdate({
                                    magnifier: !settings.magnifier,
                                })
                            }
                            icon={<Search size={18} />}
                            label={translations.toggles.magnifier}
                            primaryColor={primaryColor}
                        />
                        <Toggle
                            active={settings.reduceMotion}
                            onClick={() =>
                                onUpdate({
                                    reduceMotion: !settings.reduceMotion,
                                })
                            }
                            icon={<Activity size={18} />}
                            label={translations.toggles.reduceMotion}
                            primaryColor={primaryColor}
                        />
                        <Toggle
                            active={settings.bigCursor}
                            onClick={() =>
                                onUpdate({ bigCursor: !settings.bigCursor })
                            }
                            icon={<MousePointer2 size={18} />}
                            label={translations.toggles.bigCursor}
                            primaryColor={primaryColor}
                        />
                        <Toggle
                            active={settings.readAloud}
                            onClick={() =>
                                onUpdate({ readAloud: !settings.readAloud })
                            }
                            icon={<Volume2 size={18} />}
                            label={translations.toggles.readAloud}
                            primaryColor={primaryColor}
                        />
                    </div>
                </section>

                <button
                    type='button'
                    onClick={onReset}
                    className='w-full flex items-center justify-center gap-2 px-4 py-3 rounded-2xl border text-sm font-semibold bg-white transition-colors hover:bg-gray-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-sm hover:shadow-md'
                    style={{
                        color: primaryColor,
                        borderColor: primaryColor,
                    }}
                >
                    <RotateCcw size={16} />
                    {translations.resetButton}
                </button>

                <section>
                    <a
                        href='https://area11y.com/'
                        target='_blank'
                        className='text-[11px] inline-flex items-center gap-1'
                    >
                        area11y
                        <svg
                            aria-hidden='true'
                            viewBox='0 0 24 24'
                            fill='none'
                            stroke='currentColor'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            width='12'
                            height='12'
                        >
                            <path d='M7 17L17 7' />
                            <path d='M8 7h9v9' />
                        </svg>
                    </a>
                </section>
            </div>
        </div>
    )
}
