import LoginPage from "../pageobjects/loginPage.js";

describe ('Check elements and functionalities with empty fields', () => {
    beforeAll('open browser', () => {
        browser.setWindowSize(1209, 827);
        browser.url('https://www.saucedemo.com/');
    });

    it('Check errors with empty username and password', async () => {
        await LoginPage.logIn('', '');
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
        await expect(LoginPage.errorText).toHaveTextContaining('Epic sadface: Username is required');
    });

    it('Check errors with empty password', async () => {
        await LoginPage.logIn('juancito', '');
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
        await expect(LoginPage.errorText).toHaveTextContaining('Epic sadface: Password is required');
    });

    it('Check errors with incorrect credentials', async () => {
        await LoginPage.logIn('juancito', 'juancito');
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
        await expect(LoginPage.errorText).toHaveTextContaining('Epic sadface: Username and password do not match any user in this service');
    });
});