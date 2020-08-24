module.exports = {
    url: "https://angular.io",
    elements: {
        AngularLogoOnTop: ".nav-link.home > img",
        AngularLogoInHeroSection: ".hero-logo > img",
        heroSection: ".hero-headline",
        getStartedButton: ".button.hero-cta",
        docsTitle: "#introduction-to-the-angular-docs",
        searchInput: ".search-container > input",
        pageTitle: "h1",
    },
    sections: {
        APISection: {
            selector: ".search-area",
            index: 0,
            elements: {
                DirectiveResult: {
                    selector: ".search-result-item",
                    index: 0
                }
            }
        }
    }
};
