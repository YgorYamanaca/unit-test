import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Dashboard } from './Dashboard'

describe('Dashboard', () => {
	it('deve renderizar o título do dashboard', () => {
		render(<Dashboard />)
		expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
			'Dashboard'
		)
	})

	it('deve renderizar os cards de estatísticas', () => {
		render(<Dashboard />)

		expect(screen.getByText('Users')).toBeInTheDocument()
		expect(screen.getByText('1,234')).toBeInTheDocument()

		expect(screen.getByText('Revenue')).toBeInTheDocument()
		expect(screen.getByText('$56,789')).toBeInTheDocument()

		expect(screen.getByText('Orders')).toBeInTheDocument()
		expect(screen.getByText('456')).toBeInTheDocument()
	})

	it('deve exibir o gráfico de performance', () => {
		render(<Dashboard />)
		expect(screen.getByText('Performance')).toBeInTheDocument()
		expect(screen.getByText('[Chart Placeholder]')).toBeInTheDocument()
	})
})
