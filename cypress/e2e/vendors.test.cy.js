import {visitTestathonDashboard} from "./common.test";

describe('Validation test cases for vendor types', () => {

    before(() => {
        visitTestathonDashboard();
    })

    it('Verify user is able to see vendors title on dashboard', () => {
        cy.get('.title').should('contain.text', "Vendors");
    })

    it('Verify on click apple user is able to see list of all apple product list', () => {
        cy.get('.input[type="checkbox"][value="Apple"]')
            .find('input[type="checkbox"]')
            .check();
    })
})