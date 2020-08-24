describe("TC-2 Checking search field on landing page", () => {
    let angularPage;
    before(browser => {
        browser.maximizeWindow();
        angularPage = browser.page.angular();
    });

    test("Given https://angular.io URL is opened, then Search input in the top navbar should be visible", () => {
        angularPage.navigate();
        angularPage.waitForElementVisible("@heroSection");
        angularPage.expect.element("@searchInput").to.be.visible;
    });
    test("it should be empty", () => {
        angularPage.expect.element("@searchInput").to.have.value.that.equal("");
    });
    test("it should be \"Search\" as placeholder", () => {
        angularPage.expect.element("@searchInput").to.have.attribute("placeholder").that.equal("Search");
    });
    test("When it is clicked in and \"directive\" is typed in it then \"Directive\" should be listed in the \"API\" section",
        () => {
            angularPage.click("@searchInput");
            angularPage.sendKeys("@searchInput", "directive");
            const APISection = angularPage.section.APISection;
            APISection.expect.element("@DirectiveResult").text.to.equal("Directive");
        });
    test("When \"Directive\" is clicked in the \"API\" section, " +
        "then the URL should be https://angular.io/api/core/Directive and the title on the content should be \"Directive\"",
    browser => {
        const APISection = angularPage.section.APISection;
        APISection.click("@DirectiveResult");
        angularPage.waitForElementVisible("@pageTitle");
        browser.expect.url().to.equal("https://angular.io/api/core/Directive");
        angularPage.expect.element("@pageTitle").text.to.contain("Directive");
    });
});
