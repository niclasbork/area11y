import type { Metadata } from 'next'
import { getTranslations } from '../seo'
import { ExplorePageClient } from './page.client'

const t = getTranslations()

export const metadata: Metadata = {
    title: 'Explore',
    description: t.metadata.homeDescription,
}

export default function ExplorePage() {
    return <ExplorePageClient />
}
