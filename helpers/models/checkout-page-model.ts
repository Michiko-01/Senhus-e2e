import { Locator, Page } from '@playwright/test';

export class CheckoutPageModel {
  readonly page: Page;
  readonly verifyUrl: Locator;

  constructor(page: Page) {
    this.page = page;
    //this.verifyUrl = page.url('');
  }

  async verifyHaveTheCorrectUrl() {
    await this.verifyUrl.isVisible();
  }
}
