import { test as base } from '@playwright/test';
import { LandingPageModel } from '../models/landing-page-model';
import { WebshopPageModel } from '../models/webshop-page-model';
import { CartPageModel } from '../models/cart-page-model';
import { CheckoutPageModel } from '../models/checkout-page-model';

type BaseItemFixtures = {
  landingPageModel: LandingPageModel;
  webshopPageModel: WebshopPageModel;
  cartPageModel: CartPageModel;
  checkoutPageModel: CheckoutPageModel;
};

export const test = base.extend<BaseItemFixtures>({
  landingPageModel: async ({ page }, use) => {
    await use(new LandingPageModel(page));
  },
  webshopPageModel: async ({ page }, use) => {
    await use(new WebshopPageModel(page));
  },
  cartPageModel: async ({ page }, use) => {
    await use(new CartPageModel(page));
  },
  checkoutPageModel: async ({ page }, use) => {
    await use(new CheckoutPageModel(page));
  },
});

export { expect } from '@playwright/test';
