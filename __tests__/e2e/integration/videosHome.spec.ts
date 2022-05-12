describe('Load Home Page', () => {
    it('should navigate to the home page', () => {
        cy.visit('/videos');
        cy.url().should('include', '/videos');
        cy.get('h2').contains('Videos List');
    });
});
