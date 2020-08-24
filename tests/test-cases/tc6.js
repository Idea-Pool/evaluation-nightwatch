describe("TC-6 Checking button form elements", () => {
    let bootstrapPage;
    before(browser => {
        browser.maximizeWindow();
        bootstrapPage = browser.page.bootstrap();
    });

    test("Given https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state URL is opened, then there should be a button with text \"Primary button\"", browser => {
        browser.url("https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state");
        bootstrapPage.waitForElementVisible("@pageTitle");
        bootstrapPage.expect.element("@primaryButton").text.to.equal("Primary button");
    });
    test("The primary button should be disabled", () => {
        bootstrapPage.expect.element("@primaryButton").to.not.be.enabled;
    });
    test("When the page is scrolled down 1 page, then the active primary link button should not be disabled", browser => {
        browser.keys("PageUp");
        bootstrapPage.expect.element("@activePrimaryLink").to.be.enabled;
    });
});
