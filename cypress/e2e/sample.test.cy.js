describe('sample test', () => {

    it('visit google.com', () => {
        cy.visit('www.google.com');
        cy.get('.gLFyf')
            .type('pune');
        cy.get('.wM6W7d').eq(1).click();
    })
})