import { useNavigate } from 'react-router-dom'

import { ButtonText } from '../ButtonText'
import { Wrapper } from '../Wrapper'

import { Container } from './styles'

import { BsHexagonFill } from 'react-icons/bs'

export function Footer() {
	const navigate = useNavigate()
	return (
		<Container>
			<Wrapper>
				<ButtonText
					Icon={BsHexagonFill}
					title="food explorer"
					iconSize={20}
					onClick={() => navigate('/')}
				/>
				<p>© 2023 - Todos os direitos reservados.</p>
			</Wrapper>
		</Container>
	)
}
