describe("TC-6 Checking button form elements", () => {
    before(browser => {
        browser.maximizeWindow();
        this.bootstrapPage = browser.page.bootstrap();
    });

    test("Given https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state URL is opened, then there should be a button with text \"Primary button\"", browser => {
        browser.url("https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state");
        this.bootstrapPage.waitForElementVisible("@pageTitle");
        this.bootstrapPage.expect.element("@primaryButton").text.to.equal("Primary button");
    });
    test("The primary button should be disabled", () => {
        this.bootstrapPage.expect.element("@primaryButton").to.not.be.enabled;
    });
    test("When the page is scrolled down 1 page, then the active primary link button should not be disabled", browser => {
        browser.keys("PageUp");
        this.bootstrapPage.expect.element("@activePrimaryLink").to.be.enabled;
    });
});
