import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('/');
  await page.locator('div').filter({ hasText: 'Pre-order SystemStep 1Step 2Step 3ReviewPlease Select a mealSelect a mealPlease ' }).nth(3).click();
  await page.locator('div').filter({ hasText: /^Select a meal$/ }).nth(1).click();
  await page.locator('#rc_select_0').click();
  await page.getByText('Lunch', { exact: true }).click();
  await page.getByRole('button', { name: 'Increase Value' }).click();
  await page.getByRole('button', { name: 'Increase Value' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('.ant-select-selection-item').click();
  await page.getByTitle('Taco Bell').getByText('Taco Bell').click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.locator('.ant-select-selection-item').click();
  await page.getByTitle('Tacos').getByText('Tacos').click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.locator('.ant-select-selection-item').click();
  await page.getByTitle('Quesadilla').getByText('Quesadilla').click();
  await page.getByRole('spinbutton').click();
  await page.getByRole('spinbutton').fill('2');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.locator('div').filter({ hasText: 'Pre-order SystemStep 1Step 2Step 3ReviewMeallunchNo. of. People3RestaurantTaco B' }).nth(3).click();
});