import { expect, test } from  "@playwright/test";

test("handle type inputs", async ({ page }) => {
    await page.goto("https://letcode.in/edit")
    const name = await page.$("#fullName")
    await name?.fill("koushik chatterjee")
    const join = await page.$("#join")
    await join?.focus();
    await page.keyboard.press("End")
    await join?.fill(" Human")
    const text = await page.getAttribute("id=getMe", "value");
    console.log(text);
    await page.fill("//input[@value='Koushik Chatterjee']", "")
    await page.waitForTimeout(30000);
})