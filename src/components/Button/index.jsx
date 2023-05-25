import { Container } from './styles'

export function Button({ title, Icon = false, price, ...rest }) {
	return (
		<Container
			type="button"
			{...rest}>
			{Icon && <Icon size={20} />}
			{title}
			{price && ` ∙ R$ ${price}`}
		</Container>
	)
}
