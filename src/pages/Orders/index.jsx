import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { Wrapper } from '../../components/Wrapper'
import { ButtonText } from '../../components/ButtonText'

import { BsChevronLeft } from 'react-icons/bs'
import { Container, Table } from './styles'
export function Orders() {
	const [orders, setOrders] = useState([])
	const [platesData, setPlatesData] = useState([])

	const navigate = useNavigate()

	const { user } = useAuth()
	const isAdmin = user.isAdmin === 1 ? true : false

	const processOrders = async () => {
		const ordersWithPlates = await Promise.all(
			orders.map(async (order) => {
				const ids = order.plate_id.split(',')
				const platePromises = ids.map(async (plate) => {
					const response = await api.get(`/plates/${plate}`)
					return response.data.title
				})
				const newplatesData = await Promise.all(platePromises)
				return { ...order, newplatesData }
			}),
		)
	}
	processOrders()

	useEffect(() => {
		async function fetchOrder() {
			const response = await api.get('/orders')
			const orders = response.data
			setOrders(orders)

			// for (let i = 0; i < orders.length; i++) {
			// 	const ids = orders[i].plate_id.split(',')
			// 	const quantity = orders[i].quantity.split(',')
			// }
		}
		fetchOrder()
	}, [])

	return (
		<Container>
			{isAdmin ? <HeaderAdm /> : <Header />}
			<Wrapper className="content">
				<ButtonText
					title="voltar"
					Icon={BsChevronLeft}
					iconSize={32}
					className="backButton"
					onClick={() => navigate('/')}
				/>

				<h2>Histórico de Pedidos</h2>

				<div className="history-order-infos">
					<Table>
						<table>
							<thead>
								<tr>
									<th>Status</th>
									<th>Código</th>
									<th>Detalhamento</th>
									<th>Data e Hora</th>
								</tr>
							</thead>
							<tbody>
								{orders.map((order) => {
									const ids = order.plate_id.split(',')
									const plates = ids.map(async (plate) => {
										const response = await api.get(`/plates/${plate}`)
										return response.data
									})

									return (
										<tr key={order.id}>
											<td>{order.status}</td>
											<td>{order.id}</td>
											<td>{}</td>
											<td>Hora Tal</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</Table>
				</div>
			</Wrapper>
			<Footer />
		</Container>
	)
}
