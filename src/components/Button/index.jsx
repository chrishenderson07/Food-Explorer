import { Container } from './styles'

export function Button({ title, Icon = false, ...rest }) {
	return <Container type="button">{title}</Container>
}
