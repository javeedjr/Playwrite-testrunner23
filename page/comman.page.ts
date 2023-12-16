// CommonFunctions.page.ts

import { Page } from 'playwright';

export default class CommonFunctions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  public async toaster(): Promise<string | null> {
    const toasterSelector = "div[role='alertdialog']";

    try {
      await this.page.waitForSelector(toasterSelector);
      const toasterText = await this.page.textContent(toasterSelector);
      return toasterText;
    } catch (error) {
      console.error(`Error while waiting for toaster: ${error}`);
      return null;
    }
  }
}
