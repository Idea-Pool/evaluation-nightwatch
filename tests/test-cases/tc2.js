describe("TC-2 Checking search field on landing page", () => {
    before(browser => {
        browser.maximizeWindow();
        this.angularPage = browser.page.angular();
    });

    test("Given https://angular.io URL is opened, then Search input in the top navbar should be visible", () => {
        this.angularPage.navigate();
        this.angularPage.waitForElementVisible("@heroSection");
        this.angularPage.expect.element("@searchInput").to.be.visible;
    });
    test("it should be empty", () => {
        this.angularPage.expect.element("@searchInput").to.have.value.that.equal("");
    });
    test("it should be \"Search\" as placeholder", () => {
        this.angularPage.expect.element("@searchInput").to.have.attribute("placeholder").that.equal("Search");
    });
    test("When it is clicked in and \"directive\" is typed in it then \"Directive\" should be listed in the \"API\" section", () => {
        this.angularPage.click("@searchInput");
        this.angularPage.sendKeys("@searchInput", "directive");
        const APISection = this.angularPage.section.APISection;
        APISection.expect.element("@DirectiveResult").text.to.equal("Directive");
    });
    test("When \"Directive\" is clicked in the \"API\" section, then the URL should be https://angular.io/api/core/Directive and the title on the content should be \"Directive\"", browser => {
        const APISection = this.angularPage.section.APISection;
        APISection.click("@DirectiveResult");
        this.angularPage.waitForElementVisible("@pageTitle");
        browser.expect.url().to.equal("https://angular.io/api/core/Directive");
        this.angularPage.expect.element("@pageTitle").text.to.contain("Directive");
    });
});
