import LoginPage from '../pageobjects/loginPage.js';
import MainPage from '../pageobjects/mainPage.js';

describe ('Check elements and functionalities with "standard_user"', () => {
    beforeAll('open browser', () => {
        browser.setWindowSize(1300, 827);
        browser.url('https://www.saucedemo.com/');
    });

    it('Check elements displayed', async () => {
        await LoginPage.logIn('standard_user', 'secret_sauce');
        await LoginPage.clickLoginButton();

        await expect (MainPage.appLogo).toBeDisplayed();
        await expect (MainPage.cartIcon).toBeDisplayed();
        await expect (MainPage.menuIcon).toBeDisplayed();
        await expect (MainPage.productsIcon).toBeDisplayed();

        await expect(MainPage.firstImage).toBeDisplayed();
        await expect(MainPage.firstProductTitle).toBeDisplayed();
        await expect (MainPage.firstAddCartButton).toBeDisplayed();

        await expect(MainPage.secondImage).toBeDisplayed();
        await expect(MainPage.secondProductTitle).toBeDisplayed();
        await expect (MainPage.secondAddCartButton).toBeDisplayed();

        await MainPage.scrollDownToFooter();

        await expect(MainPage.thirdImage).toBeDisplayed();
        await expect(MainPage.thirdProductTitle).toBeDisplayed();
        await expect (MainPage.thirdAddCartButton).toBeDisplayed();

        await expect(MainPage.fourthImage).toBeDisplayed();
        await expect(MainPage.fourthProductTitle).toBeDisplayed();
        await expect (MainPage.fourthAddCartButton).toBeDisplayed();

        await expect(MainPage.fifthImage).toBeDisplayed();
        await expect(MainPage.fifthProductTitle).toBeDisplayed();
        await expect (MainPage.fifthAddCartButton).toBeDisplayed();

        await expect(MainPage.sixthImage).toBeDisplayed();
        await expect(MainPage.sixthProductTitle).toBeDisplayed();
        await expect (MainPage.sixthAddCartButton).toBeDisplayed();

        await expect(MainPage.twitterIcon).toBeDisplayed();
        await expect(MainPage.facebookIcon).toBeDisplayed();
        await expect (MainPage.linkedinIcon).toBeDisplayed();
    });

    it ('check elements functionals', async () => {
        await expect (MainPage.cartIcon).toBeClickable();
        await expect (MainPage.menuIcon).toBeClickable();

        await expect(MainPage.firstImage).toBeClickable();
        await expect(MainPage.firstProductTitle).toBeClickable();
        await expect (MainPage.firstAddCartButton).toBeClickable();

        await expect(MainPage.secondImage).toBeClickable();
        await expect(MainPage.secondProductTitle).toBeClickable();
        await expect (MainPage.secondAddCartButton).toBeClickable();

        await expect(MainPage.thirdImage).toBeClickable();
        await expect(MainPage.thirdProductTitle).toBeClickable();
        await expect (MainPage.thirdAddCartButton).toBeClickable();

        await expect(MainPage.fourthImage).toBeClickable();
        await expect(MainPage.fourthProductTitle).toBeClickable();
        await expect (MainPage.fourthAddCartButton).toBeClickable();

        await expect(MainPage.fifthImage).toBeClickable();
        await expect(MainPage.fifthProductTitle).toBeClickable();
        await expect (MainPage.fifthAddCartButton).toBeClickable();

        await expect(MainPage.sixthImage).toBeClickable();
        await expect(MainPage.sixthProductTitle).toBeClickable();
        await expect (MainPage.sixthAddCartButton).toBeClickable();

        await expect(MainPage.twitterIcon).toBeClickable();
        await expect(MainPage.facebookIcon).toBeClickable();
        await expect (MainPage.linkedinIcon).toBeClickable();
    });

    it('Logout Success', async () => {
        await MainPage.menuIcon.click();
        await MainPage.logoutButton.click();

        const currentUrl = await browser.getUrl();
        expect(currentUrl).toEqual('https://www.saucedemo.com/');
    });
});