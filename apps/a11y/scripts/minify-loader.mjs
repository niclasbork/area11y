import { transform } from 'esbuild'
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const rootDir = path.resolve(__dirname, '..')
const inputPath = path.join(rootDir, 'public', 'loader.js')
const outputPath = path.join(rootDir, 'dist', 'loader.js')

const source = await fs.readFile(inputPath, 'utf8')
const result = await transform(source, {
	minify: true,
	loader: 'js',
	target: 'es2018',
})

await fs.mkdir(path.dirname(outputPath), { recursive: true })
await fs.writeFile(outputPath, result.code)
