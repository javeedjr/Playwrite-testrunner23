import { expect, test } from  "@playwright/test";

test("Open letcode", async ({ page }) => {
    await page.goto("https://letcode.in");
    await page.click("text=Log in");
    await page.fill(" input[name='email']",'koushik350@gmail.com');
    await page.fill(" input[name='password']", 'Pass123$');
    await page.click('button:text("LOGIN")');
    await page.click('"Sign out"')
    // await page.click("body > app-root > app-signin > div > div > div > div > div.field > button");
    // await page.fill(" input[name='fgEmail']",'koushik350@gmail.com');
    // await page.click('button:text("RESET")');
    // expect(page.url()).toBe("https://letcode.in/Forgotten password_reset")
   
    await page.waitForTimeout(6000);
})