import {validateUserSignIn, visitTestathonDashboard} from "./common.test";

describe('Dashboard Functionality Test Cases', () => {

    before(() => {
        cy.clearAllSessionStorage();
        cy.intercept('GET', 'https://testathon.live/api/products?userName=demouser')
            .as('getAllProducts');
        visitTestathonDashboard();
        validateUserSignIn();
    })

    it('Verify user is able to visit testathon dashboard', () => {
        cy.url().should('include', "testathon.live");
        cy.get('.Navbar_logo__26S5Y').should('be.visible')
            .should('have.css', 'width', "257px")
            .should('have.css', 'height', "45px");
        cy.wait(1000);
    });

    it('Verify user is able to see vendors title on dashboard', () => {
        cy.get('.title').should('contain.text', "Vendors");
    })

    it('Verify on click apple user is able to see list of all apple product list', () => {
        cy.get('input[type="checkbox"][value="Apple"]').check({ force: true });
        cy.wait('@getAllProducts').then((interception) => {
            const listOfAllProductsCount = interception.response.body;
            cy.log('total number of products on dashboard', listOfAllProductsCount);
        })
    })

    it('Verify user is able to like or wishlist product', () => {
        cy.get('.shelf-stopper').eq(0).should('exist').click();
    })

    it('Verify user is able to add apple product to cart', () => {
        // cy.get('.shelf-item__title').should('contain', "iphone 12")
        //     .should('be.visible');
        cy.get('.shelf-item__buy-btn').eq(0)
            .should('contain.text', "Add to cart")
            .click();
    })

    it('Verify user is able to see only 1 added product in cart', () => {
        cy.get('.bag .header-title').should('contain.text', "Bag").should('be.visible');
        cy.get('.bag__quantity').should('contain.value', "1");
    })

    it('Verify product details added to cart', () => {
        cy.get('.shelf-item__details .title').should("contain", "iPhone 12")
            .should('be.visible');
    })

    it('Verify user is able to checkout product added to cart', () => {
        cy.get('.buy-btn').should('contain.text', "Checkout").click();
        cy.wait(1000);
        cy.url().should("include", '/checkout');
    })

    it('Verify user is able to add shipping address', () => {
            cy.get('#firstNameInput').type('John');
            cy.get('#lastNameInput').type('Doe');
            cy.get('#addressLine1Input').type('123 Main Street');
            cy.get('#provinceInput').type('California');
            cy.get('#postCodeInput').type('90001');
            cy.get('#checkout-shipping-continue').should('contain.text', "Submit").click();
    })

})