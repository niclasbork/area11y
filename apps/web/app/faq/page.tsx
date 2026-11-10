import type { Metadata } from 'next'
import { getTranslations } from '../seo'
import { FaqPageClient } from './page.client'

const t = getTranslations()

export const metadata: Metadata = {
    title: t.faq.title,
    description: t.metadata.homeDescription,
}

export default function FaqPage() {
    return <FaqPageClient />
}
