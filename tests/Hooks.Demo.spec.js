// import { test, expect } from '@playwright/test';

// test.beforeAll(async () => {
//   // Runs once before all tests in this file
//   // Good for: one-time setup like seeding a database, starting a server
// });

// test.afterAll(async () => {
//   // Runs once after all tests in this file
//   // Good for: cleanup that only needs to happen once
// });

// test.beforeEach(async ({ page }) => {
//   // Runs before EVERY test in this file
//   // Good for: navigating to a page, logging in, resetting state
//   await page.goto('https://example.com/login');
// });

// test.afterEach(async ({ page }, testInfo) => {
//   // Runs after EVERY test
//   // Good for: screenshots on failure, clearing cookies, logging results
//   if (testInfo.status !== testInfo.expectedStatus) {
//     await page.screenshot({ path: `failures/${testInfo.title}.png` });
//   }
// });