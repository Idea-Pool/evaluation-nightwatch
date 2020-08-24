describe("TC-1 Checking landing pages elements", () => {
    let angularPage;
    before(browser => {
        browser.maximizeWindow();
        angularPage = browser.page.angular();
    });

    test("Given https://angular.io URL is opened, then Angular logo in the top navbar should be visible", () => {
        angularPage.navigate();
        angularPage.waitForElementVisible("@heroSection");
        angularPage.expect.element("@AngularLogoOnTop").to.be.visible;
    });
    test("Angular logo in the hero section should be visible", () => {
        angularPage.expect.element("@AngularLogoInHeroSection").to.be.visible;
    });
    test("Text in hero section should be \"One framework. Mobile & desktop.\"", () => {
        angularPage.expect.element("@heroSection").text.to.equal("One framework.\nMobile & desktop.");
    });
    test("Get started button should be visible in the hero section", () => {
        angularPage.expect.element("@getStartedButton").to.be.visible;
    });
    test("When Get started button is clicked in the hero section, then the URL should be https://angular.io/docs", browser => {
        angularPage.click("@getStartedButton");
        angularPage.waitForElementVisible("@docsTitle");
        browser.expect.url().to.equal("https://angular.io/docs");
    });
    test("The title on the content should be \"Introduction to the Angular Docs\"", () => {
        angularPage.expect.element("@docsTitle").text.to.equal("Introduction to the Angular Docs");
    });
});
