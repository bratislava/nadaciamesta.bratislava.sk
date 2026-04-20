import { test, expect } from '@playwright/test'

test.describe('Projects page interactivity', () => {
  test('project filters update results', async ({ page }) => {
    await page.goto('/projects')
    const resultText = page.getByText(/zobrazených \d+ projektov z \d+ vyfiltrovaných/)
    await expect(resultText).toBeVisible({ timeout: 10_000 })

    const yearButton = page.getByRole('button', { name: '2024' })
    if (await yearButton.isVisible()) {
      await yearButton.click()
      await page.waitForTimeout(1000)
      await expect(resultText).toBeVisible()
    }
  })

  test('clicking a project card opens detail page', async ({ page }) => {
    await page.goto('/projects')
    const projectCard = page.locator('a[href*="/projects/"]').first()
    await expect(projectCard).toBeVisible({ timeout: 10_000 })
    const href = await projectCard.getAttribute('href')
    await projectCard.click()
    await page.waitForURL(`**${href}`, { timeout: 10_000 })
    expect(page.url()).toContain('/projects/')
  })
})

test.describe('Grants page interactivity', () => {
  test('switching between program tabs', async ({ page }) => {
    await page.goto('/grants')

    const tabs = page.locator('[role="button"].uppercase')
    await expect(tabs.first()).toBeVisible({ timeout: 10_000 })

    const tabCount = await tabs.count()
    expect(tabCount).toBeGreaterThanOrEqual(2)

    await tabs.nth(1).click()
    await page.waitForTimeout(500)

    await tabs.nth(0).click()
    await page.waitForTimeout(500)
  })
})

test.describe('Blog page interactivity', () => {
  test('clicking a blog post opens detail page', async ({ page }) => {
    await page.goto('/blog')
    const blogLink = page.locator('a[href*="/blog/"]').first()
    await expect(blogLink).toBeVisible({ timeout: 10_000 })
    const href = await blogLink.getAttribute('href')
    await blogLink.click()
    await page.waitForURL(`**${href}`, { timeout: 10_000 })
    expect(page.url()).toContain('/blog/')
  })
})
