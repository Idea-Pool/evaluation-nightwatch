describe("TC-7 Checking select form elements", () => {
    let bootstrapPage;
    before(browser => {
        browser.maximizeWindow();
        bootstrapPage = browser.page.bootstrap();
    });

    test("Given https://getbootstrap.com/docs/4.4/components/forms/#form-controls URL is opened, then the example select should be visible", browser => {
        browser.url("https://getbootstrap.com/docs/4.4/components/forms/#form-controls");
        bootstrapPage.waitForElementVisible("@pageTitle");
        bootstrapPage.expect.element("@exampleSelect").to.be.visible;
    });
    test("The example multiple select should be a multiple select", () => {
        bootstrapPage.expect.element("@exampleMultiSelect").to.have.attribute("multiple");
    });
    test("The selected option in example select should be \"1\"", () => {
        bootstrapPage.expect.element("@exampleSelect").to.have.value.that.equals("1");
    });
    test("There should not be option like \"hello\" in example select", () => {
        bootstrapPage.expect.element("@exampleSelect").text.to.not.contain("hello");
    });
    test("There should be option like \"2\" in example select", () => {
        bootstrapPage.expect.element("@exampleSelect").text.to.contain("2");
    });
    test("When the option \"2\" is selected in example select, then the selected option in example select should be \"2", () => {
        bootstrapPage.setValue("@exampleSelect", "2");
        bootstrapPage.expect.element("@exampleSelect").to.have.value.that.equals("2");
    });
    test("The number of options in example select should be 5", () => {
        bootstrapPage.expect.elements("@exampleSelectOptions").count.to.equal(5);
    });
});
