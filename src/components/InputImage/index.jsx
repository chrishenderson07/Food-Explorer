import { useState } from 'react'

import { Container } from './styles'

import { FiUpload } from 'react-icons/fi'

export function InputImage({ title, ...rest }) {
	return (
		<Container>
			<p>Imagem do prato</p>
			<label>
				<FiUpload />
				<p>{title}</p>
				<input
					id="input-file"
					type="file"
					accept="image/png, image/jpeg"
					{...rest}
				/>
			</label>
		</Container>
	)
}
