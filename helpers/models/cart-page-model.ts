import { Locator, Page } from '@playwright/test';

export class CartPageModel {
  readonly page: Page;
  readonly verifyItemIsVisible: Locator;
  readonly clickCheckoutButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.verifyItemIsVisible = page.getByRole('link', {
      name: 'Senhus Connect - Panasonic AC',
      exact: true,
    });
    this.clickCheckoutButton = page.getByRole('link', {
      name: 'Proceed to checkout',
    });
  }

  async verifySenhusConnectIsVisible() {
    await this.verifyItemIsVisible.isVisible();
  }

  async clickCheckout() {
    await this.clickCheckoutButton.click();
  }
}
