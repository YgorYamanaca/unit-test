import { defineConfig } from 'cypress'

export default defineConfig({
	e2e: {
		baseUrl: 'http://localhost:5173',
		specPattern: 'src/__tests__/e2e/*.cy.tsx',
		video: false,
		screenshotOnRunFailure: true,
	},
})
