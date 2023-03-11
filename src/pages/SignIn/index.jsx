import { Container } from './styles.js'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'
import { ButtonText } from '../../components/ButtonText'

import { BsHexagonFill } from 'react-icons/bs'

export function SignIn() {
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
						type="text"
						name="Email"
						title="Email"
						placeholder="Exemplo: exemplo@exemplo.com.br"
						id="email"
					/>

					<Input
						type="text"
						name="Senha"
						title="Senha"
						placeholder="No mínimo 6 caracteres"
						id="password"
					/>

					<Button title="Entrar" />
					<ButtonText title="Criar uma conta" />
				</div>
			</div>
		</Container>
	)
}
