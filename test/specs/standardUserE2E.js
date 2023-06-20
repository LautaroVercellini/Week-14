import LoginPage from '../pageobjects/loginPage.js';
import MainPage from '../pageobjects/mainPage.js';
import InventoryDetailsPage from '../pageobjects/inventoryDetailsPage.js';
import CartPage from '../pageobjects/cartPage.js';
import CheckoutStepOne from '../pageobjects/checkoutStepOne.js';
import CheckoutStepTwo from '../pageobjects/checkoutStepTwo.js';
import CheckoutComplete from '../pageobjects/checkoutComplete.js';

describe ('Check elements and functionalities with standard user', () => {
    beforeAll('open browser', () => {
        browser.setWindowSize(1209, 827);
        browser.url('https://www.saucedemo.com/');
    });

    it('Check elements displayed in header', async () => {
        await LoginPage.logIn('standard_user', 'secret_sauce');
        await LoginPage.clickLoginButton();

        await expect (MainPage.appLogo).toBeDisplayed();
        await expect (MainPage.cartIcon).toBeDisplayed();
        await expect (MainPage.menuIcon).toBeDisplayed();
        await expect (MainPage.productsIcon).toBeDisplayed();
    });

    it('Check functional elements in the header', async () => {
        await expect (MainPage.cartIcon).toBeClickable();
        await expect (MainPage.menuIcon).toBeClickable();
    });

    it('Check elements displayed in first and second products', async () =>{
        await expect(MainPage.firstImage).toBeDisplayed();
        await expect(MainPage.firstProductTitle).toBeDisplayed();
        await expect (MainPage.firstAddCartButton).toBeDisplayed();

        await expect(MainPage.secondImage).toBeDisplayed();
        await expect(MainPage.secondProductTitle).toBeDisplayed();
        await expect (MainPage.secondAddCartButton).toBeDisplayed();
    });

    it('Check functional elements in first and second products', async () => {
        await expect(MainPage.firstImage).toBeClickable();
        await expect(MainPage.firstProductTitle).toBeClickable();
        await expect (MainPage.firstAddCartButton).toBeClickable();

        await expect(MainPage.secondImage).toBeClickable();
        await expect(MainPage.secondProductTitle).toBeClickable();
        await expect (MainPage.secondAddCartButton).toBeClickable();
    });

    it('Check elements displayed in third and fourth products', async () => {
        await expect(MainPage.thirdImage).toBeDisplayed();
        await expect(MainPage.thirdProductTitle).toBeDisplayed();
        await expect (MainPage.thirdAddCartButton).toBeDisplayed();

        await expect(MainPage.fourthImage).toBeDisplayed();
        await expect(MainPage.fourthProductTitle).toBeDisplayed();
        await expect (MainPage.fourthAddCartButton).toBeDisplayed();
    });

    it('Check functional elements in third and fourth products', async () => {
        await expect(MainPage.thirdImage).toBeClickable();
        await expect(MainPage.thirdProductTitle).toBeClickable();
        await expect (MainPage.thirdAddCartButton).toBeClickable();

        await expect(MainPage.fourthImage).toBeClickable();
        await expect(MainPage.fourthProductTitle).toBeClickable();
        await expect (MainPage.fourthAddCartButton).toBeClickable();
    });

    it('Check elements displayed in fifth and sixth products', async () => {
        await MainPage.scrollDownToFooter();

        await expect(MainPage.fifthImage).toBeDisplayed();
        await expect(MainPage.fifthProductTitle).toBeDisplayed();
        await expect (MainPage.fifthAddCartButton).toBeDisplayed();

        await expect(MainPage.sixthImage).toBeDisplayed();
        await expect(MainPage.sixthProductTitle).toBeDisplayed();
        await expect (MainPage.sixthAddCartButton).toBeDisplayed();
    });

    it('Check funtional elements in fifth and sixth products', async () => {
        await expect(MainPage.fifthImage).toBeClickable();
        await expect(MainPage.fifthProductTitle).toBeClickable();
        await expect (MainPage.fifthAddCartButton).toBeClickable();

        await expect(MainPage.sixthImage).toBeClickable();
        await expect(MainPage.sixthProductTitle).toBeClickable();
        await expect (MainPage.sixthAddCartButton).toBeClickable();
    });

    it ('check elements displayed in footer', async () => {
        await expect(MainPage.twitterIcon).toBeDisplayed();
        await expect(MainPage.facebookIcon).toBeDisplayed();
        await expect (MainPage.linkedinIcon).toBeDisplayed();
    });

    it ('Check functional elements in footer', async () => {
        await expect(MainPage.twitterIcon).toBeClickable();
        await expect(MainPage.facebookIcon).toBeClickable();
        await expect (MainPage.linkedinIcon).toBeClickable();
    });

    it('Check add cart and remove buttons', async () => {
        await MainPage.firstAddCartButton.click();
        await MainPage.secondAddCartButton.click();
        await MainPage.thirdAddCartButton.click();
        await MainPage.fourthAddCartButton.click();

        await MainPage.scrollDownToFooter();

        await MainPage.fifthAddCartButton.click();
        await MainPage.sixthAddCartButton.click();

        await MainPage.scrollUpToHeader();

        await expect(MainPage.removeFirstProduct).toBeDisplayed();
        await expect(MainPage.removeSecondProduct).toBeDisplayed();
        await expect(MainPage.removeThirdProduct).toBeDisplayed();
        await expect(MainPage.removeFourthProduct).toBeDisplayed();

        await MainPage.scrollDownToFooter();

        await expect(MainPage.removeFifthProduct).toBeDisplayed();
        await expect(MainPage.removeSixthProduct).toBeDisplayed();

        await MainPage.scrollUpToHeader();

        await MainPage.removeFirstProduct.click();
        await MainPage.removeSecondProduct.click();
        await MainPage.removeThirdProduct.click();
        await MainPage.removeFourthProduct.click();

        await MainPage.scrollDownToFooter();

        await MainPage.removeFifthProduct.click();
        await MainPage.removeSixthProduct.click();
    });

    it ('Check correct elements displayed and functionalities when clicking first product', async () => {
        await MainPage.firstImage.click();

        await expect(InventoryDetailsPage.iconBackProducts).toBeDisplayed();
        await expect(InventoryDetailsPage.titleItemOne).toBeDisplayed();
        await expect(InventoryDetailsPage.descItemOne).toBeDisplayed();
        await expect(InventoryDetailsPage.priceItemOne).toBeDisplayed();
        await expect(MainPage.firstAddCartButton).toBeDisplayed();

        await MainPage.firstAddCartButton.click();
        await expect(MainPage.removeFirstProduct).toBeDisplayed();
        await MainPage.removeFirstProduct.click();

        await InventoryDetailsPage.iconBackProducts.click();
    });

    it ('Check correct elements displayed and functionalities when clicking second product', async () => {
        await MainPage.secondImage.click();

        await expect(InventoryDetailsPage.iconBackProducts).toBeDisplayed();
        await expect(InventoryDetailsPage.titleItemTwo).toBeDisplayed();
        await expect(InventoryDetailsPage.descItemTwo).toBeDisplayed();
        await expect(InventoryDetailsPage.priceItemTwo).toBeDisplayed();
        await expect(MainPage.secondAddCartButton).toBeDisplayed();

        await MainPage.secondAddCartButton.click();
        await expect(MainPage.removeSecondProduct).toBeDisplayed();
        await MainPage.removeSecondProduct.click();

        await InventoryDetailsPage.iconBackProducts.click();
    });

    it ('Check correct elements displayed and functionalities when clicking third product', async () => {
        await MainPage.thirdImage.click();

        await expect(InventoryDetailsPage.iconBackProducts).toBeDisplayed();
        await expect(InventoryDetailsPage.titleItemThree).toBeDisplayed();
        await expect(InventoryDetailsPage.descItemThree).toBeDisplayed();
        await expect(InventoryDetailsPage.priceItemThree).toBeDisplayed();
        await expect(MainPage.thirdAddCartButton).toBeDisplayed();

        await MainPage.thirdAddCartButton.click();
        await expect(MainPage.removeThirdProduct).toBeDisplayed();
        await MainPage.removeThirdProduct.click();

        await InventoryDetailsPage.iconBackProducts.click();
    });

    it ('Check correct elements displayed and functionalities when clicking fourth product', async () => {
        await MainPage.fourthImage.click();

        await expect(InventoryDetailsPage.iconBackProducts).toBeDisplayed();
        await expect(InventoryDetailsPage.titleItemFour).toBeDisplayed();
        await expect(InventoryDetailsPage.descItemFour).toBeDisplayed();
        await expect(InventoryDetailsPage.priceItemFour).toBeDisplayed();
        await expect(MainPage.fourthAddCartButton).toBeDisplayed();

        await MainPage.fourthAddCartButton.click();
        await expect(MainPage.removeFourthProduct).toBeDisplayed();
        await MainPage.removeFourthProduct.click();

        await InventoryDetailsPage.iconBackProducts.click();
    });

    it ('Check correct elements displayed and functionalities when clicking fifth product', async () => {
        await MainPage.fifthImage.click();

        await expect(InventoryDetailsPage.iconBackProducts).toBeDisplayed();
        await expect(InventoryDetailsPage.titleItemFive).toBeDisplayed();
        await expect(InventoryDetailsPage.descItemFive).toBeDisplayed();
        await expect(InventoryDetailsPage.priceItemFive).toBeDisplayed();
        await expect(MainPage.fifthAddCartButton).toBeDisplayed();

        await MainPage.fifthAddCartButton.click();
        await expect(MainPage.removeFifthProduct).toBeDisplayed();
        await MainPage.removeFifthProduct.click();

        await InventoryDetailsPage.iconBackProducts.click();
    });

    it ('Check correct elements displayed and functionalities when clicking sixth product', async () => {
        await MainPage.sixthImage.click();

        await expect(InventoryDetailsPage.iconBackProducts).toBeDisplayed();
        await expect(InventoryDetailsPage.titleItemSix).toBeDisplayed();
        await expect(InventoryDetailsPage.descItemSix).toBeDisplayed();
        await expect(InventoryDetailsPage.priceItemSix).toBeDisplayed();
        await expect(MainPage.sixthAddCartButton).toBeDisplayed();

        await MainPage.sixthAddCartButton.click();
        await expect(MainPage.removeSixthProduct).toBeDisplayed();
        await MainPage.removeSixthProduct.click();

        await InventoryDetailsPage.iconBackProducts.click();
    });

    it('Check elements and functionalities in CartPage', async () => {
        await MainPage.firstAddCartButton.click();
        await MainPage.cartIcon.click();

        await expect(CartPage.titleCart).toBeDisplayed();
        await expect(CartPage.priceProduct).toBeDisplayed();
        await expect(CartPage.descProduct).toBeDisplayed();
        await expect(CartPage.continueShoppingButton).toBeDisplayed();
        await expect(CartPage.checkoutButton).toBeDisplayed();

        await expect(CartPage.continueShoppingButton).toBeClickable();
        await expect(CartPage.checkoutButton).toBeClickable();
    });

    it('Check elements and functionalities in checkout form', async () => {
        await CartPage.checkoutButton.click();

        await expect(CheckoutStepOne.titleSection).toBeDisplayed();
        await expect(CheckoutStepOne.firstNameInput).toBeDisplayed();
        await expect(CheckoutStepOne.lastNameInput).toBeDisplayed();
        await expect(CheckoutStepOne.postalCodeInput).toBeDisplayed();
        await expect(CheckoutStepOne.cancelButton).toBeDisplayed();
        await expect(CheckoutStepOne.continueButton).toBeDisplayed();

        await expect(CheckoutStepOne.firstNameInput).toBeClickable();
        await expect(CheckoutStepOne.lastNameInput).toBeClickable();
        await expect(CheckoutStepOne.postalCodeInput).toBeClickable();
        await expect(CheckoutStepOne.cancelButton).toBeClickable();
        await expect(CheckoutStepOne.continueButton).toBeClickable();
    });

    it('Check errors in form with empty fields', async () => {
        await CheckoutStepOne.completeForm('', '', '');

        await expect(CheckoutStepOne.errorFirstName).toBeDisplayed();
        await expect(CheckoutStepOne.errorLastName).toBeDisplayed();
        await expect(CheckoutStepOne.errorPostalCode).toBeDisplayed();
        await expect(CheckoutStepOne.errorTooltip).toBeDisplayed();
        await expect(CheckoutStepOne.errorButton).toBeClickable();
        await expect(CheckoutStepOne.errorTooltip).toHaveTextContaining('Error: First Name is required');
    });

    it('Check errors in form ommiting last name and postal code', async () => {
        await CheckoutStepOne.completeForm('Juancito', '', '');
        await expect(CheckoutStepOne.errorTooltip).toHaveTextContaining('Error: Last Name is required');
    });

    it('Check errors in form ommiting postal code', async () => {
        await CheckoutStepOne.completeForm('Juancito', 'Juarez', '');
        await expect(CheckoutStepOne.errorTooltip).toHaveTextContaining('Error: Postal Code is required');
    });

    it('Check elements and functionalities in checkout overview', async () => {
        await CheckoutStepOne.completeForm('Juancito', 'Juarez', '1500');

        await expect(CheckoutStepTwo.titleSection).toBeDisplayed();
        await expect(CheckoutStepTwo.divProduct).toBeDisplayed();
        await expect(CheckoutStepTwo.payment).toBeDisplayed();
        await expect(CheckoutStepTwo.shipping).toBeDisplayed();
        await expect(CheckoutStepTwo.price).toBeDisplayed();
        await expect(CheckoutStepTwo.total).toBeDisplayed();
        await expect(CheckoutStepTwo.cancelButton).toBeDisplayed();
        await expect(CheckoutStepTwo.finishButton).toBeDisplayed();

        await expect(CheckoutStepTwo.cancelButton).toBeClickable();
        await expect(CheckoutStepTwo.finishButton).toBeClickable();
    });

    it ('Check elements and functionalities in checkout complete', async () => {
        await CheckoutStepTwo.finishButton.click();

        await expect(CheckoutComplete.titleSection).toBeDisplayed();
        await expect(CheckoutComplete.successIcon).toBeDisplayed();
        await expect(CheckoutComplete.successMsg).toBeDisplayed();
        await expect(CheckoutComplete.successText).toBeDisplayed();
        await expect(CheckoutComplete.backHomeButton).toBeDisplayed();
        await expect(CheckoutComplete.backHomeButton).toBeClickable();
    });

    it('Back to main Page', async () => {
        await CheckoutComplete.backHomeButton.click();

        await MainPage.menuIcon.click();
        await MainPage.logoutButton.click();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/');
    });
});


/*

    it('Check Elements Displayed on Checkout Step One', async () => {
        await CartPage.checkoutButton.click();

        await CheckoutPage.titleSection.toBeDisplayed();
        await CheckoutPage.firstNameInput.toBeDisplayed();
        await CheckoutPage.lastNameInput.toBeDisplayed();
        await CheckoutPage.postalCodeInput.toBeDisplayed();
        await CheckoutPage.cancelButton.toBeDisplayed();
        await CheckoutPage.continueButton.toBeDisplayed();
    });

    it('Check Elements funtionals on Checkout Step One', async () => {
        await CheckoutPage.firstNameInput.toBeClickable();
        await CheckoutPage.lastNameInput.toBeClickable();
        await CheckoutPage.postalCodeInput.toBeClickable();
        await CheckoutPage.continueButton.toBeClickable();
    });

    it('Check Elements Displayed in Checkout Step Two', async () => {
        await CheckoutPage.completeForm('Juancito', 'Juarez', '1500');

        await CheckoutStepTwo.titleSection.toBeDisplayed();
        await CheckoutStepTwo.divProduc.toBeDisplayed();
        await CheckoutStepTwo.payment.toBeDisplayed();
        await CheckoutStepTwo.shipping.toBeDisplayed();
        await CheckoutStepTwo.price.toBeDisplayed();
        await CheckoutStepTwo.total.toBeDisplayed()
        await CheckoutStepTwo.cancelButton.toBeDisplayed();
        await CheckoutStepTwo.finishButton.toBeDisplayed()
    });

    it('Check Elements Functionals in Checkout Step Two', async () => {
        await CheckoutStepTwo.cancelButton.toBeDisplayed();
        await CheckoutStepTwo.finishButton.toBeDisplayed();
    });

    it ('Check Elements Displayed in Checkout Complete', async () => {
        await CheckoutStepTwo.finishButton.click();

        await CheckoutComplete.titleSection.toBeDisplayed();
        await CheckoutComplete.successIcon.toBeDisplayed();
        await CheckoutComplete.successMsg.toBeDisplayed();
        await CheckoutComplete.successText.toBeDisplayed();
        await CheckoutComplete.backHomeButton.toBeDisplayed()
    });

    it ('Check Elements Functionals in Checkout complete', async () => {
        await CheckoutComplete.backHomeButton.toBeClickable();
    });

    it('Finish buy', async () => {
        await CheckoutComplete.backHomeButton.click();
    });

    it('Logout Succes', async () => {
        await MainPage.logout();
    });
    */