import type { Metadata } from 'next'
import { getTranslations } from '../seo'
import { PrivacyPageClient } from './page.client'

const t = getTranslations()

export const metadata: Metadata = {
	title: t.metadata.privacyTitle,
	description: t.metadata.privacyDescription,
}

export default function PrivacyPage() {
	return <PrivacyPageClient />
}
