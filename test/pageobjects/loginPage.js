class LoginPage {

    get loginLogo() { return $('.login_logo') };
    get inputUserName() { return $('#user-name') };
    get inputPassword() { return $('#password') };
    get loginButton() { return $('#login-button')};

    get errorInputUserName() { return $('#login_button_container > div > form > div:nth-child(1) > svg')};
    get errorInputPassword() { return $('#login_button_container > div > form > div:nth-child(2) > svg')};
    get errorTooltip() { return $('.error-message-container.error')};
    get errorText() { return $('.error-message-container.error h3')};
    get errorButton() {return $('.error-button')};

    async logIn (username, password) {
        await this.inputUserName.setValue(username);
        await this.inputPassword.setValue(password);
    };

    async clickLoginButton () {
        await this.loginButton.click();
    };
};

export default new LoginPage();