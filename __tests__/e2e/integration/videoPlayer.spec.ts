describe('Load Video Player', () => {
    it('should navigate to the video player', () => {
        cy.visit('/videos');
        cy.url().should('include', '/videos');
        cy.get('*[aria-label*="play video"]').first().click();
        cy.url().should('include', '/videos/player');
        cy.get('h2').contains('Videos List');
    });
});
