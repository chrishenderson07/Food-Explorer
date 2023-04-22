import { Container } from './styles'

export function ButtonText({
	title,
	Icon = false,
	iconSize = false,
	iconColor = '',
	color = '',
	...rest
}) {
	return (
		<Container {...rest}>
			{Icon && (
				<Icon
					size={iconSize}
					color={iconColor}
				/>
			)}
			{title}
		</Container>
	)
}
