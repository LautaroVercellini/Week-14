class checkoutStepTwo {
    get titleSection() { return $('#header_container > div.header_secondary_container > span')};
    get divProduct() { return $('#checkout_summary_container > div > div.cart_list > div.cart_item')};
    get payment() { return $('#checkout_summary_container > div > div.summary_info > div:nth-child(1)')};
    get shipping() { return $('#checkout_summary_container > div > div.summary_info > div:nth-child(3)')};
    get price () { return $('#checkout_summary_container > div > div.summary_info > div:nth-child(5)')};
    get total() { return $('#checkout_summary_container > div > div.summary_info > div.summary_info_label.summary_total_label')};
    get cancelButton() { return $('#cancel')};
    get finishButton() { return $('#finish')};
}