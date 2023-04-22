import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { Container } from './styles.js'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { BsHexagonFill } from 'react-icons/bs'

export function SignUp() {
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	function handleSignUp() {
		if (!name || !email || !password) {
			return alert('Preencha todos os Campos')
		}

		api
			.post('/users', { name, email, password })
			.then(() => {
				alert('Cadastro realizado com sucesso!')
				navigate('/')
			})
			.catch((error) => {
				if (error.response) {
					alert(error.response.data.message)
				} else {
					alert('Não foi possível realizar o cadastro')
				}
			})
	}

	return (
		<Container>
			<div className="content">
				<div>
					<BsHexagonFill />
					<h3>food explorer</h3>
				</div>

				<div className="signup">
					<h2>Crie sua conta</h2>
					<Input
						type="text"
						name="nome"
						title="Seu Nome"
						placeholder="Exemplo: Christopher Henderson"
						id="email"
						onChange={(e) => setName(e.target.value)}
					/>

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
						onClick={handleSignUp}
					/>
					<ButtonText
						title="Já tenho uma conta"
						onClick={() => navigate('/')}
					/>
				</div>
			</div>
		</Container>
	)
}
