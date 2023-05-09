const locators = {
  popupCrossIcon: 'button.needsclick.klaviyo-close-form',
  searchBox: 'input.pt-search-input.aa-input',
  headerSearchIcon: '.pt-search.pt-dropdown-obj',
  txtSearchBtn: '.pt-btn-search',
  productCardLink: '.ais-hit--picture',
  selectSizeFromPDP: '[data-value="0-3M"]',
  addToCartBtn: '.btn.btn-lg.btn-addtocart',
  continueShoppingPopupClick: 'a.atc-popup-cs-ch.tck',
  cartIconHeader: 'button.pt-dropdown-toggle[data-tooltip="Cart"]',
  viewCartBtnPopup: '.btn-link.btn.m_c_v',
  cartNotificationBtn:'#cart-notification-button',
  checkoutBtn: 'button#checkout[type="submit"]',
  productInCartTxt:'h6.pt-title.dsk-v2',
};

export class CheckoutFlow {
  gotoHomePage(httpsthegivingmovementcom){
    cy.visit(httpsthegivingmovementcom);
  }

  homePagePopupCrossIcon(){
    cy.get(locators.popupCrossIcon).click();
  }

  enableSearchBox(){
    cy.get(locators.headerSearchIcon).click();
  }

  searchTxtBox(productName){
    cy.get(locators.searchBox).type(productName, {force: true});
  }

  txtSearchBoxbtn(){
    cy.get(locators.txtSearchBtn).click();
  }

  productAddToCart(){
    cy.get(locators.productCardLink).first().click();
    cy.wait(5000);
    cy.get(locators.selectSizeFromPDP).first().click();
    cy.get(locators.addToCartBtn).click();
    cy.get(locators.continueShoppingPopupClick).should('be.visible');
    cy.wait(2000);
    cy.get(locators.continueShoppingPopupClick).click();
  }

  cartIconInHeaderSection(){
   cy.get(locators.cartIconHeader).click();
  }
  viewCartBtn(){
  cy.get(locators.viewCartBtnPopup).click();
  }

  cartNotificationBtn(){
    cy.get(locators.cartNotificationBtn).click();
  }

  productInCart(productAddedInCart){
    cy.get(locators.productInCartTxt)
    .then(($el) => {
    const text = $el.text().trim().toUpperCase();
    expect(text).to.contains(productAddedInCart);
  });
  }
}
