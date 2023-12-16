import { expect, test } from  "@playwright/test";

test("find multi element", async ({ page }) => {
await page.goto("https://letcode.in/elements")

const ele = await page.$("input[name='username']")
await ele?.fill("ortonikc");
await ele?.press("Enter");

await page.waitForSelector("app-gitrepos ol li", { timeout: 5000 })
        const repos = await page.$$("app-gitrepos ol li");
        console.log(repos.length);

        //for wait (to print all the text)
         for await (const repo of repos) {
            console.log(await repo.innerText());
        }

        //map(to print all the text)
        const allUrls = await Promise.all(repos.map(async (repo, i) => {
            return await repo.innerText()
        }))
        console.log(allUrls);

        // how to take screenshot
        await page.screenshot({ path: "fs.png", fullPage: true })
            await page.screenshot({ path: Date.now() + 'screenshot1.png' })

            const header = await page.$("nav[role='navigation']")
            header?.screenshot({ path: "header.png" })
       
})
