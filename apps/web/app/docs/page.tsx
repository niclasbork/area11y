import type { Metadata } from 'next'
import { getTranslations } from '../seo'
import { DocsPageClient } from './page.client'

const t = getTranslations()

export const metadata: Metadata = {
    title: t.readme.title,
    description: t.readme.intro,
}

export default function DocsPage() {
    return <DocsPageClient />
}
