import { test, expect } from '@playwright/test';

test('index page has text', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('text=Welcome to LeadApp')).toBeVisible();
});
