import { Container, TextBlock } from './styles'
export function TextArea({ title, placeholder, value }) {
	return (
		<Container>
			<label htmlFor={name}>{title}</label>

			<TextBlock
				placeholder={placeholder}
				className="description">
				{value}
			</TextBlock>
		</Container>
	)
}
