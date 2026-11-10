import type { Metadata } from 'next'
import { getTranslations } from '../seo'
import { AccessibilityPageClient } from './page.client'

const t = getTranslations()

export const metadata: Metadata = {
	title: t.metadata.accessibilityTitle,
	description: t.metadata.accessibilityDescription,
}

export default function AccessibilityPage() {
	return <AccessibilityPageClient />
}
