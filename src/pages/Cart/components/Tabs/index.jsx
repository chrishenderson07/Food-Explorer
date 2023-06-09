import { useState } from 'react'

import { FirstTab } from '../FirstTab'
import { SecondTab } from '../SecondTab'
import { TransitionTab } from '../TransitionTab'

import { MdPix, MdCreditCard } from 'react-icons/md'

import { Container } from './styles'
export function Tabs({ plateCart, setPlateCart, totalCart }) {
	const [activeTab, setActiveTab] = useState('tab1')
	const [paymentStart, setPaymentStart] = useState(false)

	const handleTab1 = () => {
		setActiveTab('tab1')
	}

	const handleTab2 = () => {
		setActiveTab('tab2')
	}

	return (
		<Container className="Tabs">
			<ul className="nav">
				<li
					className={activeTab === 'tab1' ? 'active' : ''}
					onClick={handleTab1}>
					<MdPix />
					PIX
				</li>
				<li
					className={activeTab === 'tab2' ? 'active' : ''}
					onClick={handleTab2}>
					<MdCreditCard />
					Crédito
				</li>
			</ul>
			<div className="outlet">
				{activeTab === 'tab1' ? (
					<FirstTab />
				) : (
					<SecondTab
						setPlateCart={setPlateCart}
						plateCart={plateCart}
						totalCart={totalCart}
					/>
				)}
			</div>
		</Container>
	)
}
