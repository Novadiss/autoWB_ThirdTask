const { test, expect } = require('@playwright/test');
test('test', async ({ page }) => {
  // Go to https://netology.ru/
  await page.goto('https://netology.ru/');
  // Click text=Войти
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://netology.ru/?modal=sign_in' }*/),
    page.click('text=Войти')
  ]);
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
    page.click('[data-testid="login-submit-btn"]')
  ]);
  // Click text=Моё обучение
  await page.click('text=Моё обучение');
  await expect(page).toHaveURL('https://netology.ru/profile/8754719');
  // Click [data-testid="profile-programs-content"] >> text=Моё обучение
});
