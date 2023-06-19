class CartPage {
     checkoutButton() { return $('#checkout')};
    get firstNameInput() { return $('#first-name')};
    get lastNameInput() { return $('#last-name')};
    get postalCodeInput() { return $('#postal-code')};
    get continueButton() { return $('#continue')};
    get finishButton() { return $('#finish')};
    get backHomeButton() { return $('#back-to-products')};
};

export default new CartPage;