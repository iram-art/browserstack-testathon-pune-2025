export function visitTestathonDashboard(){
    cy.visit('https://testathon.live');
}

export function validateUserSignIn() {
        cy.contains('a', 'Sign In').should('be.visible').click();
        cy.url().should('include', '/signin');
        cy.get('.css-2b097c-container').eq(0).click();
        cy.contains('div', 'demouser').click();
        cy.get('.css-1uccc91-singleValue').eq(0).should('contain.text', 'demouser');
        cy.get('.css-2b097c-container').eq(1).click();
        cy.contains('div', 'testingisfun99').click();
        cy.get('.css-1uccc91-singleValue').eq(1).should('contain.text', 'testingisfun99');
        cy.contains('button', "Log In" ).should('be.visible').click();
}

