/** @type {import('next').NextConfig} */
const nextConfig = {
	transpilePackages: ['geist'],
	async redirects() {
		// area11y is free and open source now; the old pricing page is gone.
		return [{ source: '/pricing', destination: '/', permanent: true }]
	},
}

export default nextConfig
