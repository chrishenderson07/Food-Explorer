import { Container } from './styles'

export function Input({ title, type, placeholder, name, ...rest }) {
	return (
		<Container {...rest}>
			<label htmlFor={name}>{title}</label>
			<input
				type={type}
				placeholder={placeholder}
				name={name}
				id={name}
			/>
		</Container>
	)
}
