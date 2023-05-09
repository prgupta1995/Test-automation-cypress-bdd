Feature: Checkout Flow- As a customer the user is able login, add the product into the cart, add address and reach to the checkout page

Background:
  Given I am on the homepage of the website "https://thegivingmovement.com/" and close the offer popup

Scenario: Verify that user is able to add the product into the cart with guest user
  When I search a product "ORGANIC COTENCEL100© LEGGINGS" and select product, size and add it into the cart
  Then I click on the cart icon from the header and user redirects to the shopping cart
  And Verify that the user is on cart page with added product name "ORGANIC COTENCEL100© LEGGINGS"