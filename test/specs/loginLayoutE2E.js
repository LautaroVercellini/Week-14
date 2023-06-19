import LoginPage from '../pageobjects/loginPage.js';

describe ('Login Page elements and content', () => {
    beforeAll('open browser', () => {
        browser.setWindowSize(1209, 827);
        browser.url('https://www.saucedemo.com/');
    });

    it('All elements should be displayed', async () => {
        await expect(LoginPage.loginLogo).toBeDisplayed();
        await expect(LoginPage.inputUserName).toBeDisplayed();
        await expect(LoginPage.inputPassword).toBeDisplayed();
        await expect(LoginPage.loginButton).toBeDisplayed();
    });

    it('Elements should have correct content', async () => {
        const UsernamePlaceholder = await LoginPage.inputUserName.getAttribute('placeholder');
        const PasswordPlaceholder = await LoginPage.inputPassword.getAttribute('placeholder');
        const buttonContent = await LoginPage.loginButton.getAttribute('value');

        await expect(browser).toHaveTitle('Swag Labs');
        expect(UsernamePlaceholder).toEqual('Username');
        expect(PasswordPlaceholder).toEqual('Password');
        expect(buttonContent).toEqual('Login');
    });

    it('Check if elements are functional', async () => {
        await expect(LoginPage.inputUserName).toBeClickable();
        await expect(LoginPage.inputUserName).toBeClickable();
        await expect(LoginPage.loginButton).toBeClickable();
    })
});






