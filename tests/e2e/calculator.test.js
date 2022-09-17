// @ts-config
import { test, expect } from '@playwright/test';

test.use({ headless: true });

const clickOpts = { delay: 200 };

test.describe('Calculator Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:4173/');
  });

  test('should show button clicked on calculator\'s visor', async ({ page }) => {
    const calculatorVisor = page.locator('input[type="text"]');
    const oneButton = page.locator('text=1');
    const twoButton = page.locator('text=2');
    const threeButton = page.locator('text=3');

    await oneButton.click(clickOpts);
    await twoButton.click(clickOpts);
    await threeButton.click(clickOpts);

    const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

    expect(visorValue).toBe('123');
  });

  test.describe('Addition Button', () => {
    test('should sum two values and show the result on calculator\'s visor', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const plusButton = page.locator('button[data-label="+"]');
      const equalButton = page.locator('button[data-label="="]');
      const twoButton = page.locator('text=2');
      const threeButton = page.locator('text=3');

      await twoButton.click(clickOpts);
      await plusButton.click(clickOpts);
      await threeButton.click(clickOpts);
      await equalButton.click(clickOpts);

      const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('5');
    });
  });

  test.describe('Subtract Button', () => {
    test('should subtract two values and show the result on calculator\'s visor', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const subtractButton = page.locator('button[data-label="-"]');
      const equalButton = page.locator('button[data-label="="]');
      const twoButton = page.locator('text=2');
      const threeButton = page.locator('text=3');

      await twoButton.click(clickOpts);
      await subtractButton.click(clickOpts);
      await threeButton.click(clickOpts);
      await equalButton.click(clickOpts);

      const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('-1');
    });

    test.skip('should replace zero when the user entered substract operation', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const subtractButton = page.locator('button[data-label="-"]');
      const twoButton = page.locator('text=2');

      await subtractButton.click(clickOpts);
      await twoButton.click(clickOpts);

      const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('-2');
    });
  });

  test.describe('Multipler Button', () => {
    test('should multiply two values and show the result on calculator\'s visor', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const multiplyButton = page.locator('button[data-label="x"]');
      const equalButton = page.locator('button[data-label="="]');
      const twoButton = page.locator('text=2');
      const threeButton = page.locator('text=3');

      await twoButton.click(clickOpts);
      await multiplyButton.click(clickOpts);
      await threeButton.click(clickOpts);
      await equalButton.click(clickOpts);

      const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('6');
    });
  });

  test.describe('Divider Button', () => {
    test('should divider two values and show the result on calculator\'s visor', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const dividerButton = page.locator('button[data-label="÷"]');
      const equalButton = page.locator('button[data-label="="]');
      const fourButton = page.locator('text=4');
      const eightButton = page.locator('text=8');

      await eightButton.click(clickOpts);
      await dividerButton.click(clickOpts);
      await fourButton.click(clickOpts);
      await equalButton.click(clickOpts);

      const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('2');
    });

    test('should show "∞" on calculator\'s visor when divider by zero', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const dividerButton = page.locator('button[data-label="÷"]');
      const equalButton = page.locator('button[data-label="="]');
      const zeroButton = page.locator('text=0');
      const eightButton = page.locator('text=8');

      await eightButton.click(clickOpts);
      await dividerButton.click(clickOpts);
      await zeroButton.click(clickOpts);
      await equalButton.click(clickOpts);

      const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('∞');
    });
  });

  test.describe('C Button', () => {
    test('should remove only the lastest char entered', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const clearButton = page.locator('button[data-label="C"]');
      const sevenButton = page.locator('text=7');
      const eightButton = page.locator('text=8');
      const nineButton = page.locator('text=9');

      await sevenButton.click(clickOpts);
      await eightButton.click(clickOpts);
      await nineButton.click(clickOpts);
      await clearButton.click(clickOpts);

      const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('78');
    });

    test('should remove the last two chars entered', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const plusButton = page.locator('button[data-label="+"]');
      const clearButton = page.locator('button[data-label="C"]');
      const fourButton = page.locator('text=4');
      const fiveButton = page.locator('text=5');
      const sixButton = page.locator('text=6');

      await fourButton.click(clickOpts);
      await fiveButton.click(clickOpts);
      await plusButton.click(clickOpts);
      await sixButton.click(clickOpts);
      await clearButton.click({ ...clickOpts, clickCount: 2 });

      const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('45');
    });
  });

  test.describe('AC Button', () => {
    test('should empty the calculator\'s visor', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const allClearButton = page.locator('button[data-label="AC"]');
      const sevenButton = page.locator('text=7');
      const eightButton = page.locator('text=8');
      const nineButton = page.locator('text=9');

      await sevenButton.click(clickOpts);
      await eightButton.click(clickOpts);
      await nineButton.click(clickOpts);
      await allClearButton.click(clickOpts);

      const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('0');
    });
  });

  test.describe('Percentage Button', () => {
    test('should calculate the percentage of a value and show on the calculator\'s visor', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const percentageButton = page.locator('button[data-label="%"]');
      const zeroButton = page.locator('text=0');
      const oneButton = page.locator('text=1');

      await oneButton.click(clickOpts);
      await zeroButton.click({ ...clickOpts, clickCount: 3 });
      await percentageButton.click(clickOpts);

      const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('10');
    });

    test('should calculate the discount of a value and show on the calculator\'s visor', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const percentageButton = page.locator('button[data-label="%"]');
      const multiplyButton = page.locator('button[data-label="x"]');
      const zeroButton = page.locator('text=0');
      const oneButton = page.locator('text=1');
      const fiveButton = page.locator('text=5');

      await oneButton.click(clickOpts);
      await zeroButton.click({ ...clickOpts, clickCount: 3 });
      await multiplyButton.click(clickOpts);
      await fiveButton.click(clickOpts);
      await zeroButton.click(clickOpts);
      await percentageButton.click(clickOpts);

      const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('500');
    });
  });

  test.describe('Million Separator', () => {
    test('should format the number while entering', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const clearButton = page.locator('button[data-label="C"]');
      const zeroButton = page.locator('text=0');
      const oneButton = page.locator('text=1');

      await oneButton.click(clickOpts);
      await zeroButton.click({ ...clickOpts, clickCount: 3 });

      let visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('1,000');

      await clearButton.click(clickOpts);
      visorValue = await calculatorVisor.evaluate(($input) => $input.value);
      expect(visorValue).toBe('100');

      await zeroButton.click({ ...clickOpts, clickCount: 4 });
      visorValue = await calculatorVisor.evaluate(($input) => $input.value);
      expect(visorValue).toBe('1,000,000');

      await clearButton.click({ ...clickOpts, clickCount: 3 });
      visorValue = await calculatorVisor.evaluate(($input) => $input.value);
      expect(visorValue).toBe('1,000');
    });
  });

  test.describe('Decimal separator', () => {
    test('should disable decimal separator if already entered one', async ({ page }) => {
      const calculatorVisor = page.locator('input[type="text"]');
      const decimalSeparatorButton = page.locator('text=.');
      const zeroButton = page.locator('text=0');
      const oneButton = page.locator('text=1');

      await oneButton.click(clickOpts);
      await decimalSeparatorButton.click(clickOpts);
      await oneButton.click(clickOpts);
      await zeroButton.click(clickOpts);
      await oneButton.click({ ...clickOpts, clickCount: 2 });

      const visorValue = await calculatorVisor.evaluate(($input) => $input.value);

      expect(visorValue).toBe('1.1011');
      await expect(decimalSeparatorButton).toBeDisabled();
    });
  });
});
