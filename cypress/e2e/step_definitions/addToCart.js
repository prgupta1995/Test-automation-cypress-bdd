import { CheckoutFlow } from '../../page-objects/AddToCart';
import {
  Given,
  When,
  Then,
  And,
} from '@badeball/cypress-cucumber-preprocessor';

const checkoutFlowPage = new CheckoutFlow();
Given(/^I am on the homepage of the website \"([^\"]*)\" and close the offer popup$/, function (httpsthegivingmovementcom) {
  checkoutFlowPage.gotoHomePage(httpsthegivingmovementcom);
  checkoutFlowPage.homePagePopupCrossIcon();
});

When(/^I search a product \"([^\"]*)\" and select product, size and add it into the cart$/, function (productName) {
  checkoutFlowPage.enableSearchBox();
  checkoutFlowPage.searchTxtBox(productName);
  checkoutFlowPage.txtSearchBoxbtn();
  checkoutFlowPage.productAddToCart();
});

Then(/^I click on the cart icon from the header and user redirects to the shopping cart$/, function () {
  checkoutFlowPage.cartIconInHeaderSection();
  checkoutFlowPage.viewCartBtn();

});

And(/^Verify that the user is on cart page with added product name \"([^\"]*)\"$/, function (productAddedInCart) {
  checkoutFlowPage.productInCart(productAddedInCart);
  
});