import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
	build: {
		emptyOutDir: false,
		lib: {
			entry: path.resolve(__dirname, 'src/loaderClient.ts'),
			name: 'Area11yLoader',
			formats: ['es', 'cjs'],
			fileName: (format) =>
				format === 'es'
					? 'area11y-loader.es.js'
					: 'area11y-loader.cjs.js',
		},
		rollupOptions: {
			output: {
				exports: 'named',
			},
		},
		sourcemap: true,
		cssCodeSplit: false,
	},
})
