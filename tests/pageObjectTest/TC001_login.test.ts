import { expect, test } from "@playwright/test";
import { Browser, BrowserContext, chromium, Page } from "playwright";
import Env from "../../utils/envirnoments";
import HeaderPage from "../../page/Header.page";
import CommonFunctions from "../../page/comman.page";
import LoginPage from "../../page/login.page";

test.describe("TC001", () => {
  let browser: Browser;
  let context: BrowserContext;
  let page: Page;

  // my pages
  let header: HeaderPage;
  let login: LoginPage;
  let common: CommonFunctions;
  test.beforeAll(async () => {
    browser = await chromium.launch({
      headless: false,
    });
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto(Env.test);
    header = new HeaderPage(page);
    login = new LoginPage(page);
    common = new CommonFunctions(page);
  });
  test("Login positive _ JIRA101", async ({ page }) => {
    await header.clickLoginLink();
    await login.enterUserName("koushik350@gmail.com");
    await login.enterUserPassword("Pass123$");
    await login.clickLoginBtn();
    const toasterText = await common.toaster();
    expect(toasterText).toContain("Welcome Koushik Chatterjee");

    //   expect(await toaster?.()).toContain("WelCome");
    await header.clickSignOutLink();
  });
}); 



// .............................. we dnot get screenshot and vidio below code

// import HeaderPage from "../../page/Header.page";
// import CommonFunctions from "../../page/comman.page";
// import LoginPage from "../../page/login.page";
// // import * as data from "../../data/login.cred.json";
// import {  expect, Page, test } from "@playwright/test";



// test.describe("TC001", () => {
//     let header: HeaderPage;
//     let login: LoginPage;
//     let common: CommonFunctions;
//     let page: Page;
//     test.beforeAll(async ({ browser }) => {
//         page = await browser.newPage();
//         // constructor - Pages
//         header = new HeaderPage(page);
//         login = new LoginPage(page);
//         common = new CommonFunctions(page);
//     })
//     test.beforeEach(async () => {
//         await page.goto("https://letcode.in")
//     })

//     test("Login positive", async () => {
//         await page.goto("https://letcode.in")
//         expect(page.url()).toBe("https://letcode.in/")
//         await header.clickLoginLink();
//         expect(page.url()).toBe("https://letcode.in/signin")
//         await login.enterUserName(data.email);
//         await login.enterUserPassword(data.pass);
//         await login.clickLoginBtn();
//         const toaster = await common.toaster();
//         expect(await toaster?.textContent()).toContain("Welcome");
//         await header.clickSignOutLink();
//     });
//     test("Login again", async () => {
//         await page.goto("https://letcode.in")
//         await header.clickLoginLink();
//         await login.login("koushik350@gmail.com", data.pass);
//         await page.waitForNavigation();
//         expect(page.url()).toBe("https://letcode.in/")
//     })
// })