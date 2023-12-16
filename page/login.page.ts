import { Page } from "playwright";

export default class LoginPage {

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

       public get eleEmailTextField() {
        return this.page.$("input[name='email']")
        // return elename;
    }

    public get elePasswordTextField() {
        return this.page.$("input[name='password']")
        // return elename;
    }

    public get eleLginBtn() {
        return this.page.$("//button[text()='LOGIN']")
        // return elename;
    }

    public async enterUserName(name: string) {
        const ele = await this.eleEmailTextField
       await ele?.fill(name);
    }

    public async enterUserPassword(pass: string) {
        const ele = await this.elePasswordTextField
        await ele?.fill(pass);
    }
    public async clickLoginBtn() {
        const ele = await this.eleLginBtn
        await ele?.click();
    }




}