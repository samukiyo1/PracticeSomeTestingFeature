import { test, expect } from '@playwright/test';
test.only('continue request demo', async ({ page }) => {
    await page.route('**/products.json', async (route) => {

        // const request = route.request();
        // console.log("URL:", request.url());
        // console.log("Method:", request.method());
        // console.log("Headers:", request.headers());
        // console.log("Product API is intercepted");

        // await route.continue();

        // console.log("Product API is blocked");
        // await route.abort();



        console.log("Mocking product API response");
        // Get real respose first
        const response=await route.fetch();
        const body=await response.json();
        // Modify the response body
        body.products=body.products.slice(0,3);
        // Send the modified response
        await route.fulfill({
            response,
            body: JSON.stringify(body)
        });
    });
    await page.goto('https://react-shopping-cart-67954.firebaseapp.com/');
    await page.waitForTimeout(5000);
});