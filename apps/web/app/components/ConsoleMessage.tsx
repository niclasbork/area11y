'use client'
import { useEffect } from 'react'

export function ConsoleMessage() {
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (
                (window as Window & { __a11yAsciiPrinted?: boolean })
                    .__a11yAsciiPrinted
            ) {
                return
            }
            ; (
                window as Window & { __a11yAsciiPrinted?: boolean }
            ).__a11yAsciiPrinted = true
        }
        const art = `Welcome to area11y 🖖`
        console.log(art)
    }, [])

    return null
}
