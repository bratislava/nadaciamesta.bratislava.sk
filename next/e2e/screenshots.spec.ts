import { test } from '@playwright/test'

const PAGES = [
  { name: 'homepage', path: '/' },
  { name: 'about-us', path: '/about-us' },
  { name: 'blog', path: '/blog' },
  { name: 'contacts', path: '/contacts' },
  { name: 'documents', path: '/documents' },
  { name: 'grants', path: '/grants' },
  { name: 'projects', path: '/projects' },
  { name: 'gdpr', path: '/gdpr' },
]

test.describe('Visual regression screenshots', () => {
  for (const { name, path } of PAGES) {
    test(`capture screenshot of ${name}`, async ({ page }) => {
      await page.goto(path, { waitUntil: 'networkidle' })
      await page.screenshot({
        path: `e2e/screenshots/${name}.png`,
        fullPage: true,
      })
    })
  }
})
