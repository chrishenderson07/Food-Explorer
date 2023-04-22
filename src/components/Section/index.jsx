import { Container } from './styles'

import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'

export function Section({ title, children, ...rest }) {
	return (
		<Container {...rest}>
			<h2>{title}</h2>

			{children}
		</Container>
	)
}
