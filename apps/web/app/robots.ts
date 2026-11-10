import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://area11y.com'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			// Search engines
			{
				userAgent: [
					'Googlebot',
					'Googlebot-Image',
					'Googlebot-Video',
					'Bingbot',
					'DuckDuckBot',
					'YandexBot',
				],
				allow: '/',
			},
			// AI search / answer engines (indexing & answering allowed)
			{
				userAgent: ['OAI-SearchBot', 'PerplexityBot', 'ClaudeBot'],
				allow: '/',
			},
			// AI training crawlers (blocked)
			{
				userAgent: ['GPTBot', 'CCBot', 'CommonCrawl'],
				disallow: '/',
			},
			// Default
			{
				userAgent: '*',
				allow: '/',
			},
		],
		sitemap: `${BASE_URL}/sitemap.xml`,
	}
}
