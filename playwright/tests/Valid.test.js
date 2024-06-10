const { test, expect } = require("@playwright/test");
const { validLogin, validPassword } = require("../user");

test("test", async ({ page }) => {
  await page.goto("https://netology.ru/");
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "./Screenshots/validTest/screenshot.png" });
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://netology.ru/?modal=sign_in' }*/),
    page.click("text=Войти"),
  ]);
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "./Screenshots/validTest/screenshot1.png" });
  // Click [placeholder="Email"]
  await page.click('[placeholder="Email"]');
  // Fill [placeholder="Email"]
  await page.fill('[placeholder="Email"]', validLogin);
  // Click [placeholder="Пароль"]
  await page.click('[placeholder="Пароль"]');
  // Fill [placeholder="Пароль"]
  await page.fill('[placeholder="Пароль"]', validPassword);
  // Click [data-testid="login-submit-btn"]
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://netology.ru/profile/8754719' }*/),
    page.click('[data-testid="login-submit-btn"]'),
  ]);
  await page.waitForTimeout(4000);
  await page.screenshot({ path: "./Screenshots/validTest/screenshot2.png" });
  // Click text=Моё обучение
  await page.click("text=Моё обучение");
  await expect(page).toHaveURL("https://netology.ru/profile/8754719");
});
