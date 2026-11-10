import type { Metadata } from 'next'
import { getTranslations } from '../seo'
import { ImprintPageClient } from './page.client'

const t = getTranslations()

export const metadata: Metadata = {
	title: t.metadata.imprintTitle,
	description: t.metadata.imprintDescription,
}

export default function ImprintPage() {
	return <ImprintPageClient />
}
