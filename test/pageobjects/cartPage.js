class CartPage {
    get titleCart() { return $('#header_container > div.header_secondary_container > span')};
    get priceProduct() { return $('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.item_pricebar > div')};
    get descProduct() { return $('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.inventory_item_desc')};
    get continueShoppingButton() { return $('#continue-shopping')};
    get checkoutButton() { return $('#checkout')};
};

export default new CartPage();