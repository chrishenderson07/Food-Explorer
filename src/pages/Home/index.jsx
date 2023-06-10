import { useState, useEffect } from 'react'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { useNavigate } from 'react-router-dom'

import Carousel from '@itseasy21/react-elastic-carousel'
import { useSpring, animated, easings } from '@react-spring/web'

import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { Wrapper } from '../../components/Wrapper'

import { Container, Content } from './styles'

import MainDonutImage from '../../assets/donuts/Camada 10.png'
import Mertilo1 from '../../assets/donuts/Camada 2.png'
import Mertilo2 from '../../assets/donuts/Camada 5.png'
import Mertilo3 from '../../assets/donuts/Camada 6.png'
import Mertilo4 from '../../assets/donuts/Camada 8.png'
import Framboesa1 from '../../assets/donuts/Camada 3.png'
import Framboesa2 from '../../assets/donuts/Camada 7.png'
import Folha1 from '../../assets/donuts/Camada 4.png'
import Folha2 from '../../assets/donuts/Camada 9.png'

export function Home() {
	const navigate = useNavigate()

	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 360, itemsToShow: 2 },
		{ width: 910, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	]

	const customEasing = (t) => {
		return t * (2 - t)
	}

	const easeInOutBack = (x) => {
		return -(Math.cos(Math.PI * x) - 1) / 2
	}

	const styles = useSpring({
		reset: true,
		loop: { reverse: true },
		from: { y: 0 },
		to: { y: 20 },
		config: { duration: 2000, easing: easeInOutBack },
	})

	const leaf2 = useSpring({
		reset: true,
		loop: { reverse: true },
		from: { y: -20 },
		to: { y: 0 },
		config: { duration: 3000, easing: easeInOutBack },
	})

	const mertilo4 = useSpring({
		reset: true,
		loop: { reverse: true },
		from: { y: 20 },
		to: { y: 0 },
		config: { duration: 2000, easing: easeInOutBack },
	})
	const mertilo1 = useSpring({
		reset: true,
		loop: { reverse: true },
		from: { y: -10 },
		to: { y: 0 },
		config: { duration: 2000, easing: easeInOutBack },
	})
	const mertilo3 = useSpring({
		reset: true,
		loop: { reverse: true },
		from: { y: -10 },
		to: { y: 0 },
		config: { duration: 1000, easing: easeInOutBack },
	})
	const framboesa1 = useSpring({
		reset: true,
		loop: { reverse: true },
		from: { y: -30 },
		to: { y: 0 },
		config: { duration: 4000, easing: easeInOutBack },
	})
	const framboesa2 = useSpring({
		reset: true,
		loop: { reverse: true },
		from: { y: 40 },
		to: { y: 0 },
		config: { duration: 3000, easing: easeInOutBack },
	})

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
				const response = await api.get(`/plates/?title=${search}`)
				renderPlate(response)

				const favorites = await api.get('/favorites')
				const favoritesPlate = favorites.data
				const favoritesId = favoritesPlate.map((favorite) => favorite.plate_id)

				const filteredFavoritesInPlates = response.data.filter((plate) =>
					favoritesId.includes(plate.id),
				)

				filteredFavoritesInPlates.forEach((favorite) => {
					favorite.isFavorite = true
				})

				console.log(filteredFavoritesInPlates)
			}
		}
		fetchPlates()
	}, [search])

	return (
		<Container>
			{isAdmin ? (
				<HeaderAdm
					isSearch
					onChange={(e) => {
						setSearch(e.target.value)
					}}
				/>
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
							<div className="float-ingredients">
								<img
									src={MainDonutImage}
									className="mainDonut"
								/>

								<animated.div
									className="mertilo2"
									style={{
										transform: mertilo1.y.interpolate(
											(y) => `translateY(${y}px)`,
										),
									}}>
									<img
										src={Mertilo2}
										alt="Imagem do Banner"
										className="mertilo"
									/>
								</animated.div>

								<animated.div
									className="framboesa1"
									style={{
										transform: framboesa1.y.interpolate(
											(y) => `translateY(${y}px)`,
										),
									}}>
									<img
										src={Framboesa1}
										alt="Imagem do Banner"
										className="framboesa"
									/>
								</animated.div>

								<animated.div
									className="mertilo3"
									style={{
										transform: mertilo3.y.interpolate(
											(y) => `translateY(${y}px)`,
										),
									}}>
									<img
										src={Mertilo3}
										alt="Imagem do Banner"
										className="mertilo"
									/>
								</animated.div>
								<animated.div
									className="mertilo1"
									style={{
										transform: mertilo1.y.interpolate(
											(y) => `translateY(${y}px)`,
										),
									}}>
									<img
										src={Mertilo1}
										className="mertilo"
									/>
								</animated.div>

								<animated.div
									style={{
										transform: styles.y.interpolate(
											(y) => `translateY(${y}px)`,
										),
									}}
									className="folhamove">
									<img
										src={Folha1}
										className="folha"
									/>
								</animated.div>

								<animated.div
									className="framboesa2"
									style={{
										transform: framboesa2.y.interpolate(
											(y) => `translateY(${y}px)`,
										),
									}}>
									<img
										src={Framboesa2}
										className="framboesa"
									/>
								</animated.div>
								<animated.div
									className="folhamove2"
									style={{
										transform: leaf2.y.interpolate((y) => `translateY(${y}px)`),
									}}>
									<img
										src={Folha2}
										className="folha"
									/>
								</animated.div>

								<animated.div
									className="mertilo4"
									style={{
										transform: mertilo4.y.interpolate(
											(y) => `translateY(${y}px)`,
										),
									}}>
									<img
										src={Mertilo4}
										className="mertilo"
									/>
								</animated.div>
							</div>
							{/* <div className="donuts">
								<img
									src={MainDonutImage}
									alt="Imagem do Banner"
									className="mainDonut"
								/>
							</div> */}
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
												description={plate.description.substring(0, 68) + '...'}
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
												description={plate.description.substring(0, 68) + '...'}
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
												description={plate.description.substring(0, 68) + '...'}
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
												description={plate.description.substring(0, 68) + '...'}
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
												description={drink.description.substring(0, 68) + '...'}
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
												description={drink.description.substring(0, 68) + '...'}
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
