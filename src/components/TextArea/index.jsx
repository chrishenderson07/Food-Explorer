import { Container, TextBlock } from './styles'
export function TextArea({ title, placeholder, value, ...rest }) {
	return (
		<Container {...rest}>
			<label htmlFor={name}>{title}</label>

			<TextBlock
				placeholder={placeholder}
				className="description"
				value={value}></TextBlock>
		</Container>
	)
}
