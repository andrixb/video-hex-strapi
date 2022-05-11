describe('Load Home Page', () => {
	it('should navigate to the home page', () => {
		cy.visit('/trivia');

		cy.get('*[data-test*="home-btn"]').click();

		cy.url().should('include', '/trivia');

		cy.get('h2').contains('Welcome to the Trivia Challenge');
	})
});
