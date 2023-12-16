import { expect, test } from "@playwright/test";

test.describe("Network - playwright", () => {

    test("Http Authentication", async ({ browser }) => {
        const context = await browser.newContext({
            // proxy: {
            //     server: 'http://myproxy.com:3128',
            //     username: 'usr',
            //     password: 'pwd'
            //   },
            
            httpCredentials: {
                username:"admin",
                password:"admin"
            }
        })
        const page = await context.newPage();
        await page.goto("https://the-internet.herokuapp.com/basic_auth");
        const header = await page.$("h3");
        if (header) {
            console.log(await header.textContent());
            expect(await header.textContent()).toBe("Basic Auth");
        }
       
    })

})