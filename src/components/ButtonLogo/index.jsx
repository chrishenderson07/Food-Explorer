import { Container } from './styles'

export function ButtonLogo({
	title,
	Icon = false,
	iconSize = false,
	iconColor = '',
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
