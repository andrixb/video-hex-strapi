describe('Load Video Player', () => {
    it('should navigate back to the videos list', () => {
        cy.visit('/videos/player/test');
        cy.get('*[aria-label*="back to videos list"]').first().click();
        cy.url().should('include', '/videos');
        cy.get('h2').contains('Videos List');
    });
});
