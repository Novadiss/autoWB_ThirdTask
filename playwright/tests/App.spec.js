const { test, expect } = require("@playwright/test");

test("test", async ({ page }) => {
  // Go to https://netology.ru/free/management#/
  await page.goto("https://netology.ru/free/management#/");

  // Click a
  await page.click("a");
  await expect(page).toHaveURL("https://netology.ru/");

  // Click text=Учиться бесплатно
  await page.click("text=Учиться бесплатно");
  await expect(page).toHaveURL("https://netology.ru/free");

  page.click("text=Бизнес и управление");

  // Click text=Продакт-менеджер: практическое погружение в профессию
  await page.click('text=Продакт-менеджер: практическое погружение в профессию');
  await expect(page).toHaveURL('https://netology.ru/programs/product-manager-free');
});
