import { test } from "@playwright/test";

test("canva login", async ({ browser }) => {

    const context = await browser.newContext({
        storageState: "./auth.json"
    })
    const page = await context.newPage();
    await page.goto("https://www.github.com/");
    await page.waitForTimeout(5000);
}) 