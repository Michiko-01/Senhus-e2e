import { Locator, Page } from '@playwright/test';

export class LandingPageModel {
  readonly page: Page;
  readonly acceptCookies: Locator;
  readonly selectWebShopButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.acceptCookies = page.getByRole('button', { name: 'Accept All' });
    this.selectWebShopButton = page
      .getByLabel('Primary Site Navigation')
      .getByRole('link', { name: 'Webshop' });
  }

  async acceptCookiesOnFooter() {
    await this.page.pause();
    await this.acceptCookies.click();
  }

  async goToWebshop() {
    await this.selectWebShopButton.click();
  }
}
