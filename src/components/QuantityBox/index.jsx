import { useState } from 'react'

import { Container } from './styles'

export function QuantityBox({}) {
	const [quantity, setQuantity] = useState(1)

	function handleAddQuantity() {
		setQuantity((prevState) => prevState + 1)
	}

	function handleRemoveQuantity() {
		if (quantity <= 1) {
			return alert('A quantidade mínima permitida é 1 unidade')
		}

		setQuantity((prevState) => prevState - 1)
	}

	return (
		<Container className="quantity-box">
			<button onClick={handleRemoveQuantity}>&minus;</button>
			<span>{quantity.toString().padStart(2, 0)}</span>
			<button onClick={handleAddQuantity}>&#43;</button>
		</Container>
	)
}
