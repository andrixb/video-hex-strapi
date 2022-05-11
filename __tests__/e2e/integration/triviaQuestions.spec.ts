describe('Load Questions', () => {
	it('should load 10 question', () => {
		cy.visit('/trivia');

		cy.get('*[data-test*="home-btn"]').click();

		for (let i =0; i<10; i++) {
			cy.get('*[data-test*="answer-true-btn"]').click();
		}
		
		cy.url().should('include', '/trivia');

		cy.get('p').contains('You scored');
	})
});