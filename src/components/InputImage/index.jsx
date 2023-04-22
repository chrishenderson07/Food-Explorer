import { Container } from './styles'

import { FiUpload } from 'react-icons/fi'

export function InputImage({ ...rest }) {
	return (
		<Container>
			<p>Imagem do prato</p>
			<label>
				<FiUpload />
				<p>Selecione imagem</p>
				<input
					type="file"
					accept="image/png, image/jpeg"
					// onChange={onChange}
					{...rest}
				/>
			</label>
		</Container>
	)
}
