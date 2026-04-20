import { test, expect } from '@playwright/test'

test.describe('GraphQL API', () => {
  test('GraphQL endpoint is reachable and responds', async ({ page }) => {
    await page.goto('/')
    const response = await page.request.post('/graphql', {
      data: { query: '{ __typename }' },
      headers: { 'Content-Type': 'application/json' },
    })

    expect(response.status()).toBe(200)
    const body = await response.json()
    expect(body.data.__typename).toBe('Query')
  })

  test('pages load data from GraphQL successfully', async ({ page }) => {
    await page.goto('/projects')
    const projectCards = page.locator('a[href*="/projects/"]')
    await expect(projectCards.first()).toBeVisible({ timeout: 10_000 })
    const count = await projectCards.count()
    expect(count).toBeGreaterThan(0)
  })
})
