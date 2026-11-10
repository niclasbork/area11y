import { createClient } from '@supabase/supabase-js'

export const config = {
	runtime: 'nodejs',
}

/**
 * Anonymous usage ping.
 *
 * The hosted loader calls this for a random sample of page views so we can see
 * which websites use area11y. It records exactly one row per domain in
 * `public.installations`: hostname, first/last seen, widget version and a
 * counter (sampled pings, so roughly 1/20 of the loader's page views).
 * Nothing about the visitor is stored — no IP address, no user agent, no path
 * or query string, no cookies.
 *
 * The hostname is taken from the browser-set `Origin` header (falling back to
 * `Referer`), never from the request body, so a page cannot report a domain
 * other than its own. Non-browser clients can still forge it; the table is an
 * overview, not proof.
 *
 * Sites opt out with `data-telemetry="off"` on the script tag.
 */

const HOSTNAME_PATTERN =
	/^(?=.{1,253}$)([a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)(\.[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)+$/
const VERSION_PATTERN = /^[0-9A-Za-z][0-9A-Za-z.\-+]{0,31}$/
const LOCAL_SUFFIXES = ['.localhost', '.local', '.test', '.internal', '.lan']

const hostnameFrom = (value: unknown) => {
	if (typeof value !== 'string' || !value || value === 'null') return null
	try {
		const { protocol, hostname } = new URL(value)
		if (protocol !== 'https:' && protocol !== 'http:') return null
		return hostname.toLowerCase().replace(/\.$/, '').replace(/^www\./, '')
	} catch {
		return null
	}
}

// Only real, public domains are worth recording: no localhost, no bare IPs,
// no single-label or reserved local names.
// Vercel's generated per-deployment and per-branch URLs
// (`<project>-<9 char hash>-<scope>.vercel.app`, `<project>-git-<branch>-<scope>.vercel.app`)
// are previews of a site, not a site of their own. A plain
// `<project>.vercel.app` production domain is still recorded.
const PREVIEW_PATTERN = /-(?:[a-z0-9]{9}|git-[a-z0-9-]+)-[a-z0-9-]+\.vercel\.app$/

const isTrackable = (hostname: string) =>
	HOSTNAME_PATTERN.test(hostname) &&
	!/^[0-9.]+$/.test(hostname) &&
	!LOCAL_SUFFIXES.some((suffix) => hostname.endsWith(suffix)) &&
	!PREVIEW_PATTERN.test(hostname)

const readVersion = (body: unknown) => {
	let payload: unknown = body
	if (typeof body === 'string') {
		try {
			payload = JSON.parse(body)
		} catch {
			return null
		}
	}
	const version =
		payload && typeof payload === 'object'
			? (payload as { version?: unknown }).version
			: null
	return typeof version === 'string' && VERSION_PATTERN.test(version)
		? version
		: null
}

export default async function handler(req: any, res: any) {
	// Any site may ping; the response carries no data.
	res.setHeader('Access-Control-Allow-Origin', '*')
	res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
	res.setHeader(
		'Access-Control-Allow-Headers',
		req.headers?.['access-control-request-headers'] || 'Content-Type'
	)
	res.setHeader('Access-Control-Max-Age', '86400')
	res.setHeader('Cache-Control', 'no-store')

	if (req.method === 'OPTIONS') {
		res.status(204).end()
		return
	}
	if (req.method !== 'POST') {
		res.status(405).end()
		return
	}

	const hostname =
		hostnameFrom(req.headers?.origin) || hostnameFrom(req.headers?.referer)

	// The ping is best-effort and must never surface as an error on a
	// customer's site, so every outcome answers 204.
	if (hostname && isTrackable(hostname)) {
		try {
			const url = process.env.SUPABASE_URL
			const key = process.env.SUPABASE_SERVICE_ROLE_KEY
			if (!url || !key) {
				console.error('ping: Supabase credentials are not configured')
			} else {
				const { error } = await createClient(url, key).rpc(
					'record_installation_ping',
					{
						p_hostname: hostname,
						p_core_version: readVersion(req.body),
					}
				)
				if (error) console.error('ping: record failed', error)
			}
		} catch (error) {
			console.error('ping: unexpected error', error)
		}
	}

	res.status(204).end()
}
