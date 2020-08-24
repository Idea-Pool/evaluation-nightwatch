describe("TC-5 Interaction with radio form elements", () => {
    let bootstrapPage;
    before(browser => {
        browser.maximizeWindow();
        bootstrapPage = browser.page.bootstrap();
    });

    test("Given https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios URL is opened, then the default radio should be enabled", browser => {
        browser.url("https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios");
        bootstrapPage.waitForElementVisible("@pageTitle");
        bootstrapPage.expect.element("@defaultRadioButton").to.be.enabled;
    });
    test("The disabled radion should be disabled", () => {
        bootstrapPage.expect.element("@disabledRadioButton").to.not.be.enabled;
    });
    test("The default radio should be selected", () => {
        bootstrapPage.expect.element("@defaultRadioButton").to.be.selected;
    });
    test("The second default radio should not be selected", () => {
        bootstrapPage.expect.element("@secondDefaultRadioButton").to.not.be.selected;
    });
    test("When the second default radio is clicked on, then the default radio should be not selected and he second default radio should be selected", () => {
        bootstrapPage.click("@secondDefaultRadioButton");
        bootstrapPage.expect.element("@defaultRadioButton").to.not.be.selected;
        bootstrapPage.expect.element("@secondDefaultRadioButton").to.be.selected;
    });
});
