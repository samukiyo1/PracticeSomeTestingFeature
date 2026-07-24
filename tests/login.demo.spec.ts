import { expect, test, Locator } from '@playwright/test'
test('Login', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    const username: Locator = page.getByRole('textbox', { name: 'Username' });
    const password: Locator = page.getByRole('textbox', { name: 'Password' });
    const loginButton: Locator = page.getByRole('button');

    await username.fill('standard_user');
    await password.fill('secret_sauce');
    await loginButton.click();

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

})