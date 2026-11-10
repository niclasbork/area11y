import fs from 'node:fs'
import path from 'node:path'

const pkgPath = path.resolve(process.cwd(), 'package.json')
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'))
const version = pkg.version || '2'

const outPath = path.resolve(process.cwd(), 'public/core/latest.json')
fs.mkdirSync(path.dirname(outPath), { recursive: true })
fs.writeFileSync(outPath, `${JSON.stringify({ version }, null, '\t')}\n`, 'utf8')
console.log(`Core version file written: v${version}`)
