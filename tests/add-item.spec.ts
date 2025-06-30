import { test } from '../helpers/fixtures/base-fixture';

test('add-item-to-basket', async ({
  page,
  landingPageModel,
  webshopPageModel,
  // cartPageModel,
  // checkoutPageModel,
}) => {
  await page.goto('/');
  await landingPageModel.acceptCookiesOnFooter();
  await landingPageModel.goToWebshop();
  await webshopPageModel.addSenhusConnect();
  await webshopPageModel.verifyItemIsAddedToBasket();
  //   await cartPageModel.verifySenhusConnectIsVisible();
  //   await cartPageModel.clickCheckout()
  //   await checkoutPageModel.clickCheckout()
});
