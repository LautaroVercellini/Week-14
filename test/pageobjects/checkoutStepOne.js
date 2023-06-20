class CheckoutStepOne {
    get titleSection() { return $('#header_container > div.header_secondary_container > span')};
    get firstNameInput() { return $('#first-name')};
    get lastNameInput() { return $('#last-name')};
    get postalCodeInput() { return $('#postal-code')};
    get cancelButton() { return $('#cancel')};
    get continueButton() { return $('#continue')};

    get errorFirstName() { return $('#checkout_info_container > div > form > div.checkout_info > div:nth-child(1) > svg')};
    get errorLastName() { return $('#checkout_info_container > div > form > div.checkout_info > div:nth-child(2) > svg')};
    get errorPostalCode() { return $('#checkout_info_container > div > form > div.checkout_info > div:nth-child(3) > svg')};
    get errorTooltip() { return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error')}
    get errorButton() { return $('#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error > h3 > button')};


    async completeForm (firstName, lastName, postalCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.postalCodeInput.setValue(postalCode);
        await this.continueButton.click();
    };
};

export default new CheckoutStepOne();