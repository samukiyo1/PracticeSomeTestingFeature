import { Page, Locator, expect } from '@playwright/test';
export class loginPage {
    readonly page: Page;
    readonly username: Locator;
    readonly password: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.username = page.getByRole('textbox', { name: 'Username' });
        this.password = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button');
    }
    async navigateToLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }
    async loginToApplication(usern: string, password: string) {
        await this.username.fill(usern);
        await this.password.fill(password);
        await this.loginButton.click();
    }
    async verifyLoginSuccess() {
        await this.page.waitForURL('https://www.saucedemo.com/inventory.html');
    }
}