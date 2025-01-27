import { test, expect } from '@playwright/test';

test.describe('Create Agent Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/agents/create');
  });

  test('displays initial page layout correctly', async ({ page }) => {
    // Check header content
    await expect(page.getByRole('heading', { name: 'Create AI Agent' })).toBeVisible();
    await expect(page.getByText('Launch your own grant program on social with an agent governed by token holders')).toBeVisible();
    
    // Check if preview card is visible
    await expect(page.getByRole('button', { name: 'Preview' })).toBeVisible();
    await expect(page.getByText('AI Research DAO')).toBeVisible();
  });

  test('completes basic information step', async ({ page }) => {
    // Test form elements visibility
    await expect(page.getByLabel(/Name/i)).toBeVisible();
    await expect(page.getByLabel(/Description/i)).toBeVisible();

    // Fill out basic information
    await page.getByLabel(/Name/i).fill('Test Agent');
    await page.getByLabel(/Description/i).fill('Test Description');
    
    // Click next and verify transition to step 2
    await page.getByRole('button', { name: /Next/i }).click();
    await expect(page.getByText(/Token Configuration/i)).toBeVisible();
  });

  test('navigates through all form steps', async ({ page }) => {
    // Step 1: Basic Information
    await page.getByLabel(/Name/i).fill('Test Agent');
    await page.getByLabel(/Description/i).fill('Test Description');
    await page.getByRole('button', { name: /Next/i }).click();

    // Step 2: Token Configuration
    await expect(page.getByText(/Token Configuration/i)).toBeVisible();
    await page.getByRole('button', { name: /Next/i }).click();

    // Step 3: Platform Integration
    await expect(page.getByText(/Platform Integration/i)).toBeVisible();
    await page.getByRole('button', { name: /Next/i }).click();

    // Step 4: Grant Canvas
    await expect(page.getByText(/Grant Canvas/i)).toBeVisible();
    await page.getByRole('button', { name: /Next/i }).click();

    // Step 5: Wallet Configuration
    await expect(page.getByText(/Wallet Configuration/i)).toBeVisible();
  });

  test('preview card updates with form input', async ({ page }) => {
    const testName = 'Test Agent Name';
    const testDescription = 'Test agent description';

    await page.getByLabel(/Name/i).fill(testName);
    await page.getByLabel(/Description/i).fill(testDescription);

    // Verify preview card updates
    await expect(page.getByText(testName)).toBeVisible();
    await expect(page.getByText(testDescription)).toBeVisible();
  });

  test('allows navigation between steps using back button', async ({ page }) => {
    // Go to step 2
    await page.getByLabel(/Name/i).fill('Test Agent');
    await page.getByRole('button', { name: /Next/i }).click();
    await expect(page.getByText(/Token Configuration/i)).toBeVisible();

    // Go back to step 1
    await page.getByRole('button', { name: /Back/i }).click();
    await expect(page.getByText(/Basic Information/i)).toBeVisible();
  });

  test('shows deploy success message', async ({ page }) => {
    // Navigate to final step
    await page.getByLabel(/Name/i).fill('Test Agent');
    await page.getByRole('button', { name: /Next/i }).click();
    await page.getByRole('button', { name: /Next/i }).click();
    await page.getByRole('button', { name: /Next/i }).click();
    await page.getByRole('button', { name: /Next/i }).click();

    // Deploy agent
    await page.getByRole('button', { name: /Deploy/i }).click();
    await expect(page.getByText('Agent deployed successfully!')).toBeVisible();
  });
}); 