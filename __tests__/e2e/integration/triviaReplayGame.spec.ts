describe('Reset Game', () => {
	it('should reset the game after a full cycle of questions', () => {
		cy.visit('/trivia');

		cy.get('*[data-test*="home-btn"]').click();

		for (let i =0; i<10; i++) {
			cy.get('*[data-test*="answer-true-btn"]').click();
		}
		
		cy.get('*[data-test*="new-game-btn"]').click();
		cy.get('h2').contains('Welcome to the Trivia Challenge');

		cy.get('*[data-test*="home-btn"]').click();

		for (let i =0; i<10; i++) {
			cy.get('*[data-test*="answer-true-btn"]').click();
		}
		
		cy.url().should('include', '/trivia');

		cy.get('p').contains('You scored');
	})
});
