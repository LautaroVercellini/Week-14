class MainPage {

    get appLogo() { return $('.app_logo') };
    get cartIcon() { return $('#shopping_cart_container > a') };
    get menuIcon() { return $('#react-burger-menu-btn') };
    get productsIcon() { return $('.title')};
    get logoutButton() { return $('#logout_sidebar_link')};

    get firstImage() { return $('#item_4_img_link')};
    get firstProductTitle() { return $('#item_4_title_link')};
    get firstAddCartButton() { return $('#add-to-cart-sauce-labs-backpack')};

    get secondImage() { return $('#item_0_img_link')};
    get secondProductTitle() { return $('#item_0_title_link')};
    get secondAddCartButton() { return $('#add-to-cart-sauce-labs-bike-light')};

    get thirdImage() { return $('#item_1_img_link')};
    get thirdProductTitle() { return $('#item_1_title_link')};
    get thirdAddCartButton() { return $('#add-to-cart-sauce-labs-bolt-t-shirt')};

    get fourthImage() { return $('#item_5_img_link')};
    get fourthProductTitle() { return $('#item_5_title_link')};
    get fourthAddCartButton() { return $('#add-to-cart-sauce-labs-fleece-jacket')};

    get fifthImage() { return $('#item_2_img_link')};
    get fifthProductTitle() { return $('#item_2_title_link')};
    get fifthAddCartButton() { return $('#add-to-cart-sauce-labs-onesie')};

    get sixthImage() { return $('#item_3_img_link')};
    get sixthProductTitle() { return $('#item_3_title_link')};
    get sixthAddCartButton() { return $('#add-to-cart-test\\.allthethings\\(\\)-t-shirt-\\(red\\)'); }

    get footer() { return $('.footer')};
    get twitterIcon() { return $('.social_twitter')};
    get facebookIcon() { return $('.social_facebook')};
    get linkedinIcon() { return $('.social_linkedin')};

    async scrollUpToHeader() {
        await browser.execute(() => {
            const header = document.querySelector('.app_logo');
            if(header) {
                header.scrollIntoView();
            };
        });
    };

    async scrollDownToFooter() {
        await browser.execute(() => {
            const footer = document.querySelector('.footer');
            if (footer) {
                footer.scrollIntoView();
            };
        });
    };

    async logout () {
        await this.menuIcon.click();
        await this.logoutButton.click();
    };
};

export default new MainPage();