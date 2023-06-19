import LoginPage from '../pageobjects/loginPage.js';
import MainPage from '../pageobjects/mainPage.js';

describe ('Check elements and functionalities with "locked_user_out"', () => {
    beforeAll('open browser', () => {
        browser.setWindowSize(1209, 827);
        browser.url('https://www.saucedemo.com/');
    });

    it('Check elementes displayed', async () => {
        await LoginPage.logIn('locked_out_user', 'secret_sauce');
        await LoginPage.clickLoginButton();

        await expect(LoginPage.errorInputUserName).toBeDisplayed();
        await expect(LoginPage.errorInputPassword).toBeDisplayed();
        await expect(LoginPage.errorTooltip).toBeDisplayed();
        await expect(LoginPage.errorButton).toBeDisplayed();
    });

    it('Check funtionalities', async () => {
        await expect(LoginPage.inputUserName).toBeClickable();
        await expect(LoginPage.inputPassword).toBeClickable();
        await expect(LoginPage.errorButton).toBeClickable();
        await expect(LoginPage.loginButton).toBeClickable();
    });

    it ("Check the text in toast", async () => {
        await expect(LoginPage.errorText).toHaveTextContaining('Epic sadface: Sorry, this user has been locked out.')
    });
});