describe("TC-1 Checking landing pages elements", () => {
    before(browser => {
        browser.maximizeWindow();
        this.angularPage = browser.page.angular();
    });

    test("Given https://angular.io URL is opened, then Angular logo in the top navbar should be visible", () => {
        this.angularPage.navigate();
        this.angularPage.waitForElementVisible("@heroSection");
        this.angularPage.expect.element("@AngularLogoOnTop").to.be.visible;
    });
    test("Angular logo in the hero section should be visible", () => {
        this.angularPage.expect.element("@AngularLogoInHeroSection").to.be.visible;
    });
    test("Text in hero section should be \"One framework. Mobile & desktop.\"", () => {
        this.angularPage.expect.element("@heroSection").text.to.equal("One framework.\nMobile & desktop.");
    });
    test("Get started button should be visible in the hero section", () => {
        this.angularPage.expect.element("@getStartedButton").to.be.visible;
    });
    test("When Get started button is clicked in the hero section, then the URL should be https://angular.io/docs", browser => {
        this.angularPage.click("@getStartedButton");
        this.angularPage.waitForElementVisible("@docsTitle");
        browser.expect.url().to.equal("https://angular.io/docs");
    });
    test("The title on the content should be \"Introduction to the Angular Docs\"", () => {
        this.angularPage.expect.element("@docsTitle").text.to.equal("Introduction to the Angular Docs");
    });
});
