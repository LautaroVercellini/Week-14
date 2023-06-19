class Checkout {
    get titleSection() { return $('#header_container > div.header_secondary_container > span')};
    get firstNameInput() { return $('#first-name')};
    get lastNameInput() { return $('#last-name')};
    get postalCodeInput() { return $('#postal-code')};
    get continueButton() { return $('#continue')};
};