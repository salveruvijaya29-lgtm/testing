import { test, expect } from '@playwright/test';
import { FormPage } from '../pages/FormPage';
import formData from '../helpers/formdata.json';

test('submit form with valid data', async ({ page }) => {
  const formPage = new FormPage(page);

  await formPage.goto();
  await formPage.fillForm(formData);
  await formPage.submit();

  await expect(page.locator('.alert.alert-info')).toBeVisible();
});
