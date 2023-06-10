import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'

import { api } from '../../services/api'

import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { Wrapper } from '../../components/Wrapper'
import { ButtonText } from '../../components/ButtonText'
import { Tabs } from './components/Tabs'

import { BsChevronLeft } from 'react-icons/bs'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
import { Container, Plate } from './styles'

export function Cart() {
	const [platesInLocalStorage, setPlatesInLocalStorage] = useState([])
	const [plateCart, setPlateCart] = useState([])
	const [platesAfterRemove, setPlatesAfterRemove] = useState([])
	const [totalCart, setTotalCart] = useState(0)

	const { user } = useAuth()
	const isAdmin = user.isAdmin === 1 ? true : false

	const navigate = useNavigate()

	function handleRemovePlate(plate) {
		const newPlatesInLocalStorage = platesInLocalStorage.filter(
			(item) => item.id !== plate,
		)

		console.log(newPlatesInLocalStorage)

		localStorage.setItem(
			'@foodexplorer:cart',
			JSON.stringify(newPlatesInLocalStorage),
		)

		setPlatesAfterRemove(newPlatesInLocalStorage)
		setPlateCart(newPlatesInLocalStorage)
	}

	function handleNavigate(plate) {
		navigate(`/details/${plate}`)
	}

	function handleTotalCart(fetch) {
		const totalCart = fetch.reduce(
			(acc, obj) => acc + Number(obj.price) * obj.quantity,
			0,
		)
		setTotalCart(totalCart.toFixed(2))
	}

	useEffect(() => {
		async function loadCart() {
			let cart = localStorage.getItem('@foodexplorer:cart')
			if (cart) {
				const plates = JSON.parse(localStorage.getItem('@foodexplorer:cart'))
				setPlatesInLocalStorage(plates)

				const fetchPlates = await Promise.all(
					plates.map(async (plate, index) => {
						const response = await api.get(`/plates/${plate.id}`)
						return { ...response.data, quantity: plates[index].quantity }
					}),
				)
				handleTotalCart(fetchPlates)
				setPlateCart([...fetchPlates])
			}
		}
		loadCart()
	}, [platesAfterRemove])

	return (
		<Container>
			{isAdmin ? <HeaderAdm /> : <Header />}

			<Wrapper className="content">
				<ButtonText
					title="Voltar"
					Icon={BsChevronLeft}
					iconSize={32}
					className="backButton"
					onClick={() => navigate('/')}
				/>

				<h2>Meu Pedido</h2>

				{platesInLocalStorage.length !== 0 ? (
					<div className="cart-infos">
						<div className="platesWrapper">
							{plateCart.map((plate, index) => {
								const image = `${api.defaults.baseURL}/files/${plate.image}`
								return (
									<Plate key={plate.id}>
										<img
											src={image}
											alt={`Foto do Prato ${plate.title}`}
											onClick={() => handleNavigate(plate.id)}
										/>

										<div className="infoPlate">
											<div
												className="lineTitle"
												onClick={() => handleNavigate(plate.id)}>
												<h2>{platesInLocalStorage[index].quantity + ' X'}</h2>
												<h2>{plate.title}</h2>
												<h3>{`R$ ${plate.price}`}</h3>
											</div>
											<ButtonText
												className="removePlate"
												title="Exluir"
												onClick={() => handleRemovePlate(plate.id)}
											/>
										</div>
									</Plate>
								)
							})}

							<h2 className="total-cart">{`Total: R$ ${totalCart}`}</h2>
						</div>
						<Tabs
							setPlateCart={setPlateCart}
							plateCart={plateCart}
							totalCart={totalCart}
						/>
					</div>
				) : (
					<div className="cartEmpty">
						<h2>Você ainda não adicionou pratos ao carrinho</h2>
						<MdOutlineRemoveShoppingCart />
					</div>
				)}
			</Wrapper>
			<Footer />
		</Container>
	)
}
