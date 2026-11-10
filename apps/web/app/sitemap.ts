import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://area11y.com'

type Route = {
	path: string
	priority: number
	changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
}

// Keep in sync with the real routes under app/. No dynamic /docs/[slug] route
// exists, so we only list the pages that actually resolve (no 404s in the map).
const routes: Route[] = [
	{ path: '/', priority: 1, changeFrequency: 'monthly' },
	{ path: '/explore', priority: 0.8, changeFrequency: 'monthly' },
	{ path: '/docs', priority: 0.8, changeFrequency: 'monthly' },
	{ path: '/faq', priority: 0.7, changeFrequency: 'monthly' },
	{ path: '/accessibility', priority: 0.6, changeFrequency: 'monthly' },
	{ path: '/imprint', priority: 0.3, changeFrequency: 'yearly' },
	{ path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
	const lastModified = new Date()
	return routes.map(({ path, priority, changeFrequency }) => ({
		url: `${BASE_URL}${path}`,
		lastModified,
		changeFrequency,
		priority,
	}))
}
