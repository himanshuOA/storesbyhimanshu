// Runs after `vite build`. Writes one HTML file per page with its own
// title, description and canonical URL, plus sitemap.xml and robots.txt.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { pages, siteUrl } from '../src/data/seo.js'

const base = readFileSync('dist/index.html', 'utf8')
const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
const today = new Date().toISOString().slice(0, 10)

for (const [path, { title, description }] of Object.entries(pages)) {
  const url = siteUrl + (path === '/' ? '/' : path)
  const head = `<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}" />
<link rel="canonical" href="${url}" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="StoresByHimanshu" />
<meta property="og:title" content="${esc(title)}" />
<meta property="og:description" content="${esc(description)}" />
<meta property="og:url" content="${url}" />
<meta property="og:image" content="${siteUrl}/logo.png" />`
  const html = base
    .replace(/<title>[\s\S]*?<\/title>/, '')
    .replace(/<meta name="description"[^>]*>/, '')
    .replace('</head>', head + '\n</head>')
  const dir = path === '/' ? 'dist' : `dist${path}`
  mkdirSync(dir, { recursive: true })
  writeFileSync(`${dir}/index.html`, html)
}

writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(pages)
  .map((p) => `  <url><loc>${siteUrl}${p === '/' ? '/' : p}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`
)
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
console.log(`SEO: wrote ${Object.keys(pages).length} pages, sitemap.xml, robots.txt`)
