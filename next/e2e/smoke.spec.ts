import { test, expect } from '@playwright/test'

test.describe('Page smoke tests', () => {
  test('homepage loads with grant CTA', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(/Nadácia mesta Bratislava/i)
    await expect(page.locator('text=Chcem požiadať o grant')).toBeVisible()
  })

  test('about-us page loads with mission section', async ({ page }) => {
    await page.goto('/about-us')
    await expect(page.getByText('Poslanie', { exact: true }).first()).toBeVisible()
  })

  test('blog page loads with post cards', async ({ page }) => {
    await page.goto('/blog')
    await expect(page.locator('a[href*="/blog/"]').first()).toBeVisible()
  })

  test('contacts page loads with staff info', async ({ page }) => {
    await page.goto('/contacts')
    await expect(page.locator('text=SK77')).toBeVisible()
  })

  test('data page loads', async ({ page }) => {
    await page.goto('/data', { waitUntil: 'domcontentloaded' })
    await expect(page).toHaveTitle(/Nadácia mesta Bratislava/i)
  })

  test('documents page loads with download cards', async ({ page }) => {
    await page.goto('/documents')
    await expect(page.locator('text=Aktuálne dokumenty')).toBeVisible()
  })

  test('grants page loads with program tabs', async ({ page }) => {
    await page.goto('/grants')
    const tabs = page.locator('[role="button"].uppercase')
    await expect(tabs.first()).toBeVisible()
    const count = await tabs.count()
    expect(count).toBeGreaterThanOrEqual(2)
  })

  test('projects page loads with filters and project cards', async ({ page }) => {
    await page.goto('/projects')
    await expect(page.locator('text=Filtrovať podporené projekty')).toBeVisible()
    await expect(page.locator('a[href*="/projects/"]').first()).toBeVisible({ timeout: 10_000 })
  })

  test('GDPR page loads with content', async ({ page }) => {
    await page.goto('/gdpr')
    await expect(page).toHaveTitle(/GDPR/i)
  })
})
