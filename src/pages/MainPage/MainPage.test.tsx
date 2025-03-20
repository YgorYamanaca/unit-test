import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router'
import { describe, expect, it, vi } from 'vitest'
import { MainPage } from './MainPage'

const mockNavigate = vi.fn()
vi.mock('react-router', async () => {
	const actual = await vi.importActual<typeof import('react-router')>(
		'react-router'
	)
	return { ...actual, useNavigate: () => mockNavigate }
})

describe('MainPage', () => {
	it('deve renderizar os títulos corretamente', () => {
		render(
			<MemoryRouter>
				<MainPage />
			</MemoryRouter>
		)

		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
			'Estudo para teste unitário'
		)
		expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(
			'Componente a ser testado'
		)
	})

	it('deve navegar para /dashboard ao submeter o formulário', async () => {
		render(
			<MemoryRouter>
				<MainPage />
			</MemoryRouter>
		)

		const emailInput = screen.getByTestId('email-input')
		const passwordInput = screen.getByTestId('password-input')
		const submitButton = screen.getByTestId('submit-button')

		await userEvent.type(emailInput, 'teste@email.com')
		await userEvent.type(passwordInput, '123456')
		await userEvent.click(submitButton)

		expect(mockNavigate).toHaveBeenCalledWith('/dashboard')
	})
})
