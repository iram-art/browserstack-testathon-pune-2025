import {visitTestathonDashboard} from "./common.test";

describe("BrowserStack Demo Shop - Orders Page", () => {

    beforeEach(() => {
        visitTestathonDashboard();
    });

    it("should display order metadata correctly", () => {
        cy.contains("ORDER PLACED").should("be.visible");
        cy.contains("TOTAL").should("be.visible");
        cy.contains("SHIP TO").should("contain", "demouser");
    });

    it("should list ordered products with correct details", () => {
        cy.contains("Title: Galaxy S20").should("be.visible");
        cy.contains("Description: Galaxy S20").should("be.visible");
        cy.contains("$999.00").should("be.visible");

        cy.contains("Title: iPhone 12").should("be.visible");
        cy.contains("Description: iPhone 12").should("be.visible");
        cy.contains("$799.00").should("be.visible");

        cy.contains("Title: Galaxy S20+").should("be.visible");
        cy.contains("Description: Galaxy S20+").should("be.visible");
        cy.contains("$1199.00").should("be.visible");
    });

    it("should calculate order total correctly", () => {
        const expectedTotal = 999 + 799 + 1199;
        cy.contains("TOTAL").parent().should("contain", ${expectedTotal});
    });

    it("should display correct delivery date", () => {
        cy.contains("Delivered").should("contain", "August 23, 2025");
    });

    it("should allow user to see multiple orders", () => {
        cy.get("div").filter((_, el) => el.innerText.includes("ORDER PLACED"))
            .should("have.length.greaterThan", 0);
    });
});