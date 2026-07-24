import { test, expect } from '@playwright/test';
import { loginPage } from '../pages/loginPage';
test('Login to Application', async ({ page }) => {
    const logintonewpage = new loginPage(page)

    await logintonewpage.navigateToLoginPage();
    await logintonewpage.loginToApplication('standard_user', 'secret_sauce');
    await logintonewpage.verifyLoginSuccess();
})