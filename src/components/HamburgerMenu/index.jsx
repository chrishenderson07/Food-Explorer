import { useState } from 'react'

import { Container } from './styles'

export function HamburgerMenu({ menuOpen, title, ...rest }) {
	return (
		<Container
			{...rest}
			menuOpen={menuOpen}>
			<div></div>
			<div></div>
			<div></div>
		</Container>
	)
}
