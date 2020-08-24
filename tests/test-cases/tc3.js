/*
The TC-3 test case is not finished due to the lack of isInViewport function.
 */
xdescribe("TC-3 Checking form elements", () => {
    let bootstrapPage;
    before(browser => {
        browser.maximizeWindow();
        bootstrapPage = browser.page.bootstrap();
    });

    test("Given https://getbootstrap.com/docs/4.4/components/forms/ URL is opened, then title of the browser should be \"Forms · Bootstrap\"", browser => {
        browser.url("https://getbootstrap.com/docs/4.4/components/forms/");
        bootstrapPage.waitForElementVisible("@pageTitle");
        browser.expect.title().to.equal("Forms · Bootstrap");
    });
    test("The readonly input should not be in the viewport", async () => {
        const locationInView = await bootstrapPage.isInViewport("input[placeholder=\"Readonly input here...\"]");
        console.log("locationInView",locationInView);
    });
});
