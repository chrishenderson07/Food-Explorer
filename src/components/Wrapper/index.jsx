import { Container } from './styles'

export function Wrapper({ children, ...rest }) {
	return <Container {...rest}>{children}</Container>
}
