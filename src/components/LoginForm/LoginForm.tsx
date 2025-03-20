import { useState } from 'react'
import './LoginForm.module.scss'

interface LoginFormProps {
	onSubmit: (email: string, password: string) => void
}

export function LoginForm({ onSubmit }: LoginFormProps) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	return (
		<form
			onSubmit={(e) => {
				e.preventDefault()
				onSubmit(email, password)
			}}
		>
			<label>
				Email:
				<input
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					data-testid="email-input"
				/>
			</label>

			<label>
				Senha:
				<input
					type="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					data-testid="password-input"
				/>
			</label>

			<button type="submit" data-testid="submit-button">
				Entrar
			</button>
		</form>
	)
}
