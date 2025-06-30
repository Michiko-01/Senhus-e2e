import { Locator, Page } from '@playwright/test';

export class WebshopPageModel {
  readonly page: Page;
  readonly selectSenhusConnect: Locator;
  readonly verifyAddedToBasket: Locator;

  constructor(page: Page) {
    this.page = page;
    this.selectSenhusConnect = page.getByRole('link', {
      name: 'Add to cart: “Senhus Connect',
    });
    this.verifyAddedToBasket = page.getByRole('link', {
      name: 'View Shopping Cart, 1 items',
    });
  }

  async addSenhusConnect() {
    await this.selectSenhusConnect.click();
  }

  async verifyItemIsAddedToBasket() {
    await this.verifyAddedToBasket.click();
  }
}
