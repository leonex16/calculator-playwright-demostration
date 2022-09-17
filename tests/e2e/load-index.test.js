// @ts-config
import { test, expect } from '@playwright/test';

const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const symbols = ['+', '-', 'x', '÷', '÷', 'C', 'AC', '.'];

test.use({ headless: true });

test.describe('Load Index Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4173/');
  });

  test('should render calculator\'s numbers', async ({ page }) => {
    const promises = numbers.map(number => expect(page.locator(`[data-label="${number}"]`)).toBeVisible());
    await Promise.all(promises);
  });

  test('should render calculator\'s symbols', async ({ page }) => {
    const promises = symbols.map(symbol => expect(page.locator(`[data-label="${symbol}"]`)).toBeVisible());
    await Promise.all(promises);
  });
});
