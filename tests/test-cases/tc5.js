describe("TC-5 Interaction with radio form elements", () => {
    before(browser => {
        browser.maximizeWindow();
        this.bootstrapPage = browser.page.bootstrap();
    });

    test("Given https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios URL is opened, then the default radio should be enabled", browser => {
        browser.url("https://getbootstrap.com/docs/4.4/components/forms/#checkboxes-and-radios");
        this.bootstrapPage.waitForElementVisible("@pageTitle");
        this.bootstrapPage.expect.element("@defaultRadioButton").to.be.enabled;
    });
    test("The disabled radion should be disabled", () => {
        this.bootstrapPage.expect.element("@disabledRadioButton").to.not.be.enabled;
    });
    test("The default radio should be selected", () => {
        this.bootstrapPage.expect.element("@defaultRadioButton").to.be.selected;
    });
    test("The second default radio should not be selected", () => {
        this.bootstrapPage.expect.element("@secondDefaultRadioButton").to.not.be.selected;
    });
    test("When the second default radio is clicked on, then the default radio should be not selected and he second default radio should be selected", () => {
        this.bootstrapPage.click("@secondDefaultRadioButton");
        this.bootstrapPage.expect.element("@defaultRadioButton").to.not.be.selected;
        this.bootstrapPage.expect.element("@secondDefaultRadioButton").to.be.selected;
    });
});
