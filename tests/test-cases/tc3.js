xdescribe("TC-3 Checking form elements", () => {
    before(browser => {
        browser.maximizeWindow();
        this.bootstrapPage = browser.page.bootstrap();
    });

    test("Given https://getbootstrap.com/docs/4.4/components/forms/ URL is opened, then title of the browser should be \"Forms · Bootstrap\"", browser => {
        browser.url("https://getbootstrap.com/docs/4.4/components/forms/");
        this.bootstrapPage.waitForElementVisible("@pageTitle");
        browser.expect.title().to.equal("Forms · Bootstrap");
    });
    test("The readonly input should not be in the viewport", async () => {
        const locationInView = await this.bootstrapPage.isInViewport("input[placeholder=\"Readonly input here...\"]");
        console.log("locationInView",locationInView);
    });
});
