import { test, expect } from '@playwright/test';

test.describe('Home Page', () => {
  test('should display main elements', async ({ page }) => {
    // Navigate to the home page
    await page.goto('/');

    // Check if hero section exists
    await expect(page.locator('section').filter({ hasText: /Welcome to Grants Fun/i })).toBeVisible();

    // Check if featured sections exist
    await expect(page.getByText(/Featured Grant Operators/i)).toBeVisible();
    await expect(page.getByText(/Featured Grant Agents/i)).toBeVisible();

    // Check if header navigation exists
    await expect(page.locator('header')).toBeVisible();
    await expect(page.getByRole('link', { name: /Create Agent/i })).toBeVisible();
  });

  test('navigation works correctly', async ({ page }) => {
    await page.goto('/');
    
    // Click on Create Agent link and verify navigation
    await page.getByRole('link', { name: /Create Agent/i }).click();
    await expect(page).toHaveURL(/.*\/agents\/create/);
  });
}); 