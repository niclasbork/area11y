import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'
import fs from 'node:fs'

const pkgPath = path.resolve(__dirname, 'package.json')
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
const coreVersion = pkg.version || '2'

export default defineConfig({
	plugins: [react()],
	publicDir: false,
	define: {
		'process.env.NODE_ENV': '"production"',
		'process.env': '{}',
		process: '{"env":{}}',
	},
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/core-entry.ts'),
			formats: ['es'],
			fileName: () => `core.v${coreVersion}.js`,
		},
		outDir: path.resolve(__dirname, 'public/core'),
		emptyOutDir: false,
		sourcemap: false,
	},
})
