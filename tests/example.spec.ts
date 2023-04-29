import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://www.baidu.com/');

  // // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/百度/);
});

/* note:
运行路径 或者是 report路径不能有中文 不然会报错：
Invalid character in header content [x-playwright-launch-options]
*/
