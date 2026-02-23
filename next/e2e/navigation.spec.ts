import { test, expect } from '@playwright/test'

const NAV_LINKS = [
  { href: '/blog', label: 'Novinky' },
  { href: '/grants', label: 'Programy' },
  { href: '/projects', label: 'Príklady podporených projektov' },
  { href: '/data', label: 'Dáta' },
  { href: '/documents', label: 'Dokumenty a výsledky' },
  { href: '/about-us', label: 'O nás' },
  { href: '/contacts', label: 'Kontakty' },
]

test.describe('Navigation links exist and point to correct pages', () => {
  test('all nav links present with correct hrefs', async ({ page }) => {
    await page.goto('/')
    for (const { href, label } of NAV_LINKS) {
      const link = page.locator(`nav a[href="${href}"]`)
      await expect(link).toHaveCount(1)
      await expect(link).toHaveText(label)
    }
  })

  for (const { href } of NAV_LINKS) {
    test(`navigating to ${href} loads successfully`, async ({ page }) => {
      await page.goto(href)
      await expect(page).toHaveTitle(/./i)
      expect(page.url()).toContain(href)
    })
  }
})
