describe('Load Home Page', () => {
	it('should navigate to the home page', () => {
		cy.visit('/');

		cy.get('a[href*="project-zero"]').click();

		cy.url().should('include', '/project-zero');

		cy.get('h1').contains('The longest title is:');
	})
})
