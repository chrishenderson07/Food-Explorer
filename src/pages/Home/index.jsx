import { useState, useEffect } from 'react'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { useNavigate } from 'react-router-dom'

import Carousel from '@itseasy21/react-elastic-carousel'

import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { Wrapper } from '../../components/Wrapper'

import { Container, Content } from './styles'

import donutsImg from '../../assets/imageHome.png'

export function Home() {
	const navigate = useNavigate()

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 360, itemsToShow: 2 },
		{ width: 910, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	]

	const [mainPlates, setMainPlates] = useState([])
	const [dessertsPlates, setDessertsPlates] = useState([])
	const [drinks, setDrinks] = useState([])
	const [search, setSearch] = useState('')

	const { user } = useAuth()
	const isAdmin = user.isAdmin === 1 ? true : false

	function renderPlate(response) {
		setMainPlates(
			response.data.filter((plate) => plate.categories === 'Pratos Principais'),
		)
		setDessertsPlates(
			response.data.filter((plate) => plate.categories === 'Sobremesas'),
		)
		setDrinks(response.data.filter((drink) => drink.categories === 'Bebidas'))
	}

	async function handleAddFavorites(favoriteItem) {
		const favorite = {
			user_id: user.id,
			plate_id: favoriteItem,
		}

		await api.post('/favorites', favorite)
	}

	useEffect(() => {
		async function fetchPlates() {
			{
				search
				const response = await api.get(`/plates/?title=${search}`)
				renderPlate(response)
			}
		}
		fetchPlates()
	}, [search])

	return (
		<Container>
			{isAdmin ? (
				<HeaderAdm />
			) : (
				<Header
					isSearch
					onChange={(e) => {
						setSearch(e.target.value)
					}}
				/>
			)}

			<Wrapper>
				<Content>
					<div className="main-banner">
						<div className="bg-banner">
							<div className="donuts">
								<img
									src={donutsImg}
									alt="Imagem do Banner"
								/>
							</div>
							<div className="banner-info">
								<h1>Sabores inigualáveis</h1>
								<p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
							</div>
						</div>
					</div>

					<Section title="Refeições">
						<div className="plates">
							<Carousel
								className="slide"
								breakPoints={breakPoints}
								pagination={false}>
								{isAdmin
									? mainPlates.map((plate) => (
											<Card
												img={`${api.defaults.baseURL}/files/${plate.image}`}
												title={`${plate.title}`}
												description={plate.description.substring(0, 70)}
												price={`R$ ${plate.price}`}
												key={plate.id}
												id={plate.id}
												onClick={(e) => {
													if (
														!e.target.closest(
															'.favButton, .cardButton, .quantity-box',
														)
													) {
														navigate(`/details/${plate.id}`)
													} else {
														navigate(`/edit-plate/${plate.id}`)
													}
												}}
											/>
									  ))
									: mainPlates.map((plate) => (
											<Card
												img={`${api.defaults.baseURL}/files/${plate.image}`}
												title={`${plate.title}`}
												description={plate.description.substring(0, 70)}
												price={`R$ ${plate.price}`}
												key={plate.id}
												id={plate.id}
												onClick={(e) => {
													if (
														!e.target.closest(
															'.favButton, .cardButton, .quantity-box',
														)
													) {
														navigate(`/details/${plate.id}`)
													} else if (e.target.closest('.favButton')) {
														handleAddFavorites(plate.id)
													}
												}}
											/>
									  ))}
							</Carousel>
						</div>
					</Section>

					<Section title="Sobremesas">
						<div className="plates">
							<Carousel
								className="slide"
								breakPoints={breakPoints}
								pagination={false}>
								{isAdmin
									? dessertsPlates.map((plate) => (
											<Card
												img={`${api.defaults.baseURL}/files/${plate.image}`}
												title={`${plate.title}`}
												description={plate.description.substring(0, 70)}
												price={`R$ ${plate.price}`}
												key={plate.id}
												id={plate.id}
												onClick={(e) => {
													if (
														!e.target.closest(
															'.favButton, .cardButton, .quantity-box',
														)
													) {
														navigate(`/details/${plate.id}`)
													} else {
														navigate(`/edit-plate/${plate.id}`)
													}
												}}
											/>
									  ))
									: dessertsPlates.map((plate) => (
											<Card
												img={`${api.defaults.baseURL}/files/${plate.image}`}
												title={`${plate.title}`}
												description={plate.description.substring(0, 70)}
												price={`R$ ${plate.price}`}
												key={plate.id}
												id={plate.id}
												onClick={(e) => {
													if (
														!e.target.closest(
															'.favButton, .cardButton, .quantity-box',
														)
													) {
														navigate(`/details/${plate.id}`)
													} else if (e.target.closest('.favButton')) {
														handleAddFavorites(plate.id)
													}
												}}
											/>
									  ))}
							</Carousel>
						</div>
					</Section>

					<Section title="Bebidas">
						<div className="plates">
							<Carousel
								className="slide"
								breakPoints={breakPoints}
								pagination={false}>
								{isAdmin
									? drinks.map((drink) => (
											<Card
												img={`${api.defaults.baseURL}/files/${drink.image}`}
												title={`${drink.title}`}
												description={drink.description.substring(0, 70)}
												price={`R$ ${drink.price}`}
												key={drink.id}
												id={drink.id}
												onClick={(e) => {
													if (
														!e.target.closest(
															'.favButton, .cardButton, .quantity-box',
														)
													) {
														navigate(`/details/${drink.id}`)
													} else {
														navigate(`/edit-plate/${drink.id}`)
													}
												}}
											/>
									  ))
									: drinks.map((drink) => (
											<Card
												img={`${api.defaults.baseURL}/files/${drink.image}`}
												title={`${drink.title}`}
												description={drink.description.substring(0, 70)}
												price={`R$ ${drink.price}`}
												key={drink.id}
												id={drink.id}
												onClick={(e) => {
													if (
														!e.target.closest(
															'.favButton, .cardButton, .quantity-box',
														)
													) {
														navigate(`/details/${drink.id}`)
													} else if (e.target.closest('.favButton')) {
														handleAddFavorites(drink.id)
													}
												}}
											/>
									  ))}
							</Carousel>
						</div>
					</Section>
				</Content>
			</Wrapper>

			<Footer />
		</Container>
	)
}
