import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AuthProvider, useAuth } from '../../hooks/auth'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { Container } from './styles'

import { BsHexagonFill } from 'react-icons/bs'

export function SignIn() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const navigate = useNavigate()

	const { signIn } = useAuth()

	function handleSignIn() {
		signIn({ email, password })
	}

	return (
		<Container>
			<div className="content">
				<div>
					<BsHexagonFill />
					<h3>food explorer</h3>
				</div>

				<div className="signin">
					<h2>Faça Login</h2>
					<Input
						type="email"
						name="Email"
						title="Email"
						placeholder="Exemplo: exemplo@exemplo.com.br"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>

					<Input
						type="password"
						name="Senha"
						title="Senha"
						placeholder="No mínimo 6 caracteres"
						id="password"
						onChange={(e) => setPassword(e.target.value)}
					/>

					<Button
						title="Entrar"
						onClick={handleSignIn}
					/>
					<ButtonText
						title="Criar uma conta"
						onClick={() => navigate('/register')}
					/>
				</div>
			</div>
		</Container>
	)
}
