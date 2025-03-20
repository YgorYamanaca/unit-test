import { useNavigate } from 'react-router'
import { LoginForm } from '../../components/LoginForm/LoginForm'
import './MainPage.module.scss'

export function MainPage() {
	const navigate = useNavigate()
	function handleFormOnSubmit(email: string, password: string) {
		if (email != '' && password != '') {
			navigate('/dashboard')
		}
	}

	return (
		<main>
			<h1>Estudo para teste unitário</h1>

			<section>
				<h2>Componente a ser testado</h2>
				<LoginForm onSubmit={handleFormOnSubmit} />
			</section>
		</main>
	)
}
