import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path'

export default defineConfig({
	plugins: [react()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'Area11y',
			formats: ['es', 'cjs'],
			fileName: (format) =>
				format === 'es' ? 'area11y-core.es.js' : 'area11y-core.cjs.js',
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
