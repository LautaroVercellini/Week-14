class CartPage {
    get titleCart() { return $('#header_container > div.header_secondary_container > span')};
    get priceProduct() { return $('.inventory_item_price')};
    get descProduct() { return $('#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.inventory_item_desc')}
    get removeButton() { return $('#remove-sauce-labs-backpack')};
    get continueShoppingButton() { return $('#continue-shopping')};
    get checkoutButton() { return $('#checkout')};
};

export default new CartPage;