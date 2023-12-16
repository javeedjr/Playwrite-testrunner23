import { PlaywrightTestConfig } from "playwright/test";

const config: PlaywrightTestConfig = {

    use: {
        headless:false,
        channel:"chrome",
        screenshot:"on",
        trace: "retain-on-failure",
        baseURL: "https://letcode.in"
    },
    // grep: [new RegExp("@smoke"), new RegExp("@reg")],
    // workers:2,
    testMatch:["apiresponse.test.ts"],
    retries:0,
    reporter:[["dot"], ["json", {outputFile:"test-result.json"}],
// ["experimental-allure-playwright"]
["allure-playwright",{ outputFolder:"my-allure-results"}]
],
}
export default config;