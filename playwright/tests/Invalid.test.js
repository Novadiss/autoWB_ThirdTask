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
  await expect(
    page.locator(
      "#__next > div:nth-child(3) > div > div > div.modal_container__yO5GZ > div.modal_content__Flhjj > div.styles_root__l6N51 > div > form > div.Input_root__VNG5T.Input_size-m__VJJaZ.Input_fluid__Cycj8.Input_error__WgHA7 > div"
    )
  ).toHaveText("Вы ввели неправильно логин или пароль");
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "./Screenshots/invalidTest/screenshot2.png" });
});
