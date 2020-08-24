describe("TC-4 Interaction with checkbox form elements", () => {
    let bootstrapPage;
    before(browser => {
        browser.maximizeWindow();
        bootstrapPage = browser.page.bootstrap();
    });

    test("Given https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios URL is opened, then the default checkbox should be enabled", browser => {
        browser.url("https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios");
        bootstrapPage.waitForElementVisible("@pageTitle");
        bootstrapPage.expect.element("@defaultCheckBox").to.be.enabled;
    });
    test("The disabled checkbox should be disabled", () => {
        bootstrapPage.expect.element("@disabledCheckBox").to.not.be.enabled;
    });
    test("The default checkbox should be unchecked", () => {
        bootstrapPage.expect.element("@defaultCheckBox").to.not.be.selected;
    });
    test("When The default chdckbox is clicked on, then the default checkbox should be checked", () => {
        bootstrapPage.click("@defaultCheckBox");
        bootstrapPage.expect.element("@defaultCheckBox").to.be.selected;
    });
});
