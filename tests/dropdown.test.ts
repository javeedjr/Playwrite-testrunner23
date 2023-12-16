import { expect, test } from  "@playwright/test";

test("handle type inputs", async ({ page }) => {

    await page.goto("https://letcode.in/dropdowns")

    const fruits = await page.$("#fruits");
    // await fruits?.selectOption({ label: "" });
    await fruits?.selectOption("2");
    const msg = await page.$("div.notification.is-success");
    if (msg) {
        // expect(await msg.textContent()).toContain("Apple");
    }

    const heros = await page.$("#superheros");
    heros?.selectOption([
        { label: "Aquaman" }, { value: "bt" }, { index: 8 }
    ])

    const lang = await page.$$("#lang option")
    console.log(lang.length);

    await page.selectOption("#country", "India");
    const text = await page.$eval<string, HTMLSelectElement>("#country", ele => ele.value)
    console.log(text);
    expect(text).toBe("India");

    await page.waitForTimeout(30000);
})