import type { Metadata } from 'next'
import { getTranslations } from './seo'
import { HomePageClient } from './page.client'

const t = getTranslations()

export const metadata: Metadata = {
	title: t.metadata.homeTitle,
	description: t.metadata.homeDescription,
}

export default function Page() {
	return <HomePageClient />
}
