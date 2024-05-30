const { test, expect } = require("@playwright/test");
test("test", async ({ page }) => {
  // Go to https://netology.ru/
  await page.goto("https://netology.ru/");
  // Click text=Войти
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://netology.ru/?modal=sign_in' }*/),
    page.click("text=Войти"),
  ]);
  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');
  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', "asdasasd@asdasd.ru");
  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');
  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', "asddsa213");
  // Click [data-testid="login-submit-btn"]
  await page.click('[data-testid="login-submit-btn"]');
  // Click [data-testid="login-error-hint"]
  await page.click('[data-testid="login-error-hint"]');
});
