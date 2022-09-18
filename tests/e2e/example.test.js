import { expect, test } from '@playwright/test';

test.use({ colorScheme: 'dark' });

test('My firstt e2e test', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    const calculatorVisor = page.locator('input[type="text"]');

    await context.tracing.start({ snapshots: true });

    await page.goto('/');

    // 5+9+6*9/2
    await page.locator('[aria-label="Five"]').click();
    await page.locator('[aria-label="Plus"]').click();
    await page.locator('[aria-label="Nine"]').click();
    await page.locator('[aria-label="Plus"]').click();
    await page.locator('[aria-label="Six"]').click();
    await page.locator('[aria-label="Multiply"]').click();
    await page.locator('[aria-label="Nine"]').click();
    await page.locator('[aria-label="Divider"]').click();
    await page.locator('[aria-label="Two"]').click();
    await page.locator('[aria-label="Equal"]').click();

    const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

    expect(visorValue).toBe('41');
  } finally {
    await context.tracing.stop({ path: 'trace.zip' });
  }
});
