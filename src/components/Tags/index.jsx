import { Container } from './styles'

export function Tags({ name, ...rest }) {
	return <Container {...rest}>{name}</Container>
}
