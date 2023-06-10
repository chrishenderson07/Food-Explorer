import { useNavigate } from 'react-router-dom'
import { api } from '../../../../services/api'

import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'

export function SecondTab({ plateCart, setPlateCart, totalCart }) {
	const navigate = useNavigate()

	async function orderInProgress() {
		// const plate_id = plateCart.map((plate) => plate.id)
		// const quantity = plateCart.map((plate) => plate.quantity)

		const { id: plate_id, quantity: quantity } = plateCart.reduce(
			(acc, plate) => ({
				id: [...acc.id, plate.id],
				quantity: [...acc.quantity, plate.quantity],
			}),
			{ id: [], quantity: [] },
		)

		const plate = {
			plate_id: String(plate_id),
			quantity: String(quantity),
			total_price: totalCart,
		}

		await api.post('/orders', plate)
		localStorage.removeItem('@foodexplorer:cart')
		setPlateCart([])
		alert('Pedido feito com sucesso')
		navigate('/')
	}
	return (
		<div className="SecondTab">
			<form id="credit-card-payment">
				<Input
					title="Número do cartão"
					placeholder="0000 0000 0000 0000"
				/>
				<fieldset>
					<Input
						title="Validade"
						placeholder="04/25"
					/>
					<Input
						title="CVC"
						placeholder="000"
					/>
				</fieldset>
				<Button
					title="Finalizar Pagamento"
					onClick={() => orderInProgress()}
				/>
			</form>
		</div>
	)
}
