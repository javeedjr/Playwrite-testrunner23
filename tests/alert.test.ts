import { expect, test } from  "@playwright/test";

test("handle type alert", async ({ page }) => {
    await page.goto("https://letcode.in/alert")
const ele = await page.$("#prompt");
page.on("dialog", (dialog) => {
    console.log('Message: ' + dialog.message());
    console.log('Default Value: ' + dialog.defaultValue());
    console.log('Type: ' + dialog.type());
    dialog.accept("hello koushik");
    // dialog.dismiss()
})
await ele?.click();
await page.waitForTimeout(30000);
})