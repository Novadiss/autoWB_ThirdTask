const { test, expect } = require("@playwright/test");
test("test", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "./Screenshots/invalidTest/screenshot.png" });
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://netology.ru/?modal=sign_in' }*/),
    page.click("text=Войти"),
  ]);
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "./Screenshots/invalidTest/screenshot1.png" });
  await page.click('[placeholder="Email"]');
  await page.fill('[placeholder="Email"]', "asdasasd@asdasd.ru");
  await page.click('[placeholder="Пароль"]');
  await page.fill('[placeholder="Пароль"]', "asddsa213");
  await page.click('[data-testid="login-submit-btn"]');
  await page.click('[data-testid="login-error-hint"]');
  await page.waitForTimeout(3000);
  await page.screenshot({path: "./Screenshots/invalidTest/screenshot2.png"});
});
