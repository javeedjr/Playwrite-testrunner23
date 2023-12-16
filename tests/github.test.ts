import { expect, test } from "@playwright/test";

// test("signin inti git", async ({ page }) => {

// await page.goto("https://github.com/login");
// await page.fill("input:below(:text('username or email address'))","javeedjr");
// await page.fill("#password:above(:text('sign in'))","767686@jk")
// await page.click("a:near(:text('password'))");
// expect(page.url()).toBe("https://github.com/password_reset")
// await page.waitForTimeout(5000)

// })

test("In depth", async ({ page }) => {
    await page.goto('https://opengiro.ing.de/pub/girokonto-einzelkonto');
    await page.pause();
    await page.fill("input:below(:text('Prof.')):right-of(:text('Vorname'))",
        "koushik");
})