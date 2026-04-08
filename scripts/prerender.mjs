import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import content from '../src/entities/school/model/content.json' with { type: 'json' }

const distDir = resolve(process.cwd(), 'dist')
const indexPath = resolve(distDir, 'index.html')
const documentsDir = resolve(distDir, 'documents')
const documentsPath = resolve(documentsDir, 'index.html')

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function createLandingMarkup() {
  const pricing = content.pricingItems
    .map(
      (item) =>
        `<article><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.note)}</p><p>${escapeHtml(item.price)}</p></article>`
    )
    .join('')

  return [
    '<main>',
    '<section><h1>Автошкола «Сирена»</h1><p>Обучение на категории A, B, C в Озерске.</p></section>',
    `<section><h2>Цены и пакеты</h2>${pricing}</section>`,
    `<section><h2>Контакты</h2><p>Телефон: ${escapeHtml(content.schoolContacts.phone)}</p><p>Email: ${escapeHtml(content.schoolContacts.email)}</p></section>`,
    '</main>',
  ].join('')
}

function createDocumentsMarkup() {
  const categories = content.documentsCategories
    .map((category) => `<li>${escapeHtml(category)}</li>`)
    .join('')

  return [
    '<main>',
    '<section>',
    '<h1>Сведения и документы</h1>',
    `<p>${escapeHtml(content.documentsPagePlaceholders.schoolName)}</p>`,
    `<p>${escapeHtml(content.documentsPagePlaceholders.legalAddress)}</p>`,
    '</section>',
    `<section><h2>Разделы</h2><ul>${categories}</ul></section>`,
    '</main>',
  ].join('')
}

function replaceRoot(html, markup) {
  return html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
}

function setMeta(html, { title, description, canonical, ogTitle, ogDescription, ogUrl }) {
  return html
    .replace(/<title>.*<\/title>/, `<title>${title}</title>`)
    .replace(/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${description}" />`)
    .replace(/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${canonical}" />`)
    .replace(/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${ogTitle}" />`)
    .replace(
      /<meta property="og:description" content="[^"]*"\s*\/>/,
      `<meta property="og:description" content="${ogDescription}" />`
    )
    .replace(/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${ogUrl}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${ogTitle}" />`)
    .replace(
      /<meta name="twitter:description" content="[^"]*"\s*\/>/,
      `<meta name="twitter:description" content="${ogDescription}" />`
    )
}

async function run() {
  const indexHtml = await readFile(indexPath, 'utf8')

  const landingHtml = setMeta(replaceRoot(indexHtml, createLandingMarkup()), {
    title: 'Автошкола «Сирена» — обучение в Озерске',
    description:
      'Автошкола «Сирена» в Озерске: категории A, B, C, набор в группы, контакты и сведения об образовательной организации.',
    canonical: 'https://aleksandra.github.io/sirena/',
    ogTitle: 'Автошкола «Сирена» — Озерск',
    ogDescription: 'Обучение на категории A, B, C. Актуальные цены, контакты и документы автошколы «Сирена».',
    ogUrl: 'https://aleksandra.github.io/sirena/',
  })

  const documentsHtml = setMeta(replaceRoot(indexHtml, createDocumentsMarkup()), {
    title: 'Сведения и документы — Автошкола «Сирена»',
    description: 'Официальные сведения и документы автошколы «Сирена»: лицензия, устав и другие материалы.',
    canonical: 'https://aleksandra.github.io/sirena/documents',
    ogTitle: 'Сведения и документы — Автошкола «Сирена»',
    ogDescription: 'Официальные документы образовательной организации.',
    ogUrl: 'https://aleksandra.github.io/sirena/documents',
  })

  await writeFile(indexPath, landingHtml, 'utf8')
  await mkdir(documentsDir, { recursive: true })
  await writeFile(documentsPath, documentsHtml, 'utf8')
}

run()
