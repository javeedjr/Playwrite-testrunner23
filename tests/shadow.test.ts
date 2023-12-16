import { test } from "@playwright/test";

test("Interact with shadow DOM", async ({ page }) => {
    await page.goto("https://letcode.in/shadow");
    await page.fill("#fname", "koushik");
    await page.fill("#lname", "chatarjee");
    await page.fill("#email", "koushik@gmail.com");
    await page.waitForTimeout(2000);
});
// ...

// import { test } from "@playwright/test";

// test("Interact with shadow DOM", async ({ page }) => {
//     try {
//         // Navigate to the page
//         await page.goto("https://letcode.in/shadow");

//         // Wait for the selector to be present before filling the input
//         await page.waitForSelector("#fname");
//         await page.fill("#fname", "koushik");

//         await page.waitForSelector("#lname");
//         await page.fill("#lname", "chatarjee");

//         await page.waitForSelector("#email");
//         await page.fill("#email", "koushik@gmail.com");

//         // Wait for 2000 milliseconds (2 seconds)
//         await page.waitForTimeout(6000);
//     } catch (error) {
//         // Log any errors that occur
//         console.error("An error occurred:", error);
//     }
// });






// ......

// test("chromium bug App", async ({ page }) => {
//     await page.goto("https://bugs.chromium.org/p/chromium/issues/list");
//     // select dropdown
//     const ele = await page.$("#can")
//     if (ele) {
//         await ele.selectOption({
//             label: "Issues to verify"
//         })
//     } else throw new Error("Eleemnt not found")

//     // input data

//     await page.fill("#searchq", "some bug");
//     await page.waitForTimeout(3000);
// })