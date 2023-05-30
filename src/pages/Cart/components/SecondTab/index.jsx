import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'

export function SecondTab() {
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
				<Button title="Finalizar Pagamento" />
			</form>
		</div>
	)
}
