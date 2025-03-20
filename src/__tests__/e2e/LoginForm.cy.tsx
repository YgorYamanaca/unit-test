describe('Login Form', () => {
	it('preenche e envia o formulário de login', () => {
		cy.visit('http://localhost:5173') // URL da aplicação

		cy.get('[data-testid="email-input"]').type('e2e@email.com')
		cy.get('[data-testid="password-input"]').type('e2ePass123')
		cy.get('[data-testid="submit-button"]').click()

		// Aqui você verificaria um redirecionamento ou mensagem de sucesso
		cy.url().should('include', '/dashboard')
	})
})
