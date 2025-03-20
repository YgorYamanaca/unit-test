import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { LoginForm } from './LoginForm'

const mockAuthContext = {
	login: vi.fn(),
}

describe('LoginForm', () => {
	it('atualiza o estado ao digitar no input', () => {
		render(<LoginForm onSubmit={vi.fn()} />)

		const emailInput = screen.getByTestId('email-input')
		const passwordInput = screen.getByTestId('password-input')

		fireEvent.change(emailInput, { target: { value: 'teste@email.com' } })
		fireEvent.change(passwordInput, { target: { value: '123456' } })

		expect(emailInput).toHaveValue('teste@email.com')
		expect(passwordInput).toHaveValue('123456')
	})

	it('chama onSubmit ao enviar o formulário', () => {
		const mockSubmit = vi.fn()
		render(<LoginForm onSubmit={mockSubmit} />)

		fireEvent.change(screen.getByTestId('email-input'), {
			target: { value: 'teste@email.com' },
		})
		fireEvent.change(screen.getByTestId('password-input'), {
			target: { value: '123456' },
		})
		fireEvent.click(screen.getByTestId('submit-button'))

		expect(mockSubmit).toHaveBeenCalledWith('teste@email.com', '123456')
	})
})

describe('LoginForm - Integração', () => {
	it('chama a função de login do contexto ao enviar o formulário', () => {
		render(<LoginForm onSubmit={mockAuthContext.login} />)

		fireEvent.change(screen.getByTestId('email-input'), {
			target: { value: 'user@email.com' },
		})
		fireEvent.change(screen.getByTestId('password-input'), {
			target: { value: 'password123' },
		})
		fireEvent.click(screen.getByTestId('submit-button'))

		expect(mockAuthContext.login).toHaveBeenCalledWith(
			'user@email.com',
			'password123'
		)
	})
})
