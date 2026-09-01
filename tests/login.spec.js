import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('successful login', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(process.env.USERNAME, process.env.PASSWORD);

  await expect(page).toHaveURL(/secure/);
  await expect(loginPage.flashMessage).toContainText('You logged into a secure area!');
});
