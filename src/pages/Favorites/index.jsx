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
import { TbStarOff } from 'react-icons/tb'
import { Container, Plate } from './styles'

export function Favorites() {
	const [dataPlates, setDataPlates] = useState([])

	const { user } = useAuth()
	const isAdmin = user.isAdmin === 1 ? true : false

	const navigate = useNavigate()

	async function handleRemoveFavorites(plate_id) {
		await api.delete('/favorites', { data: { plate_id: plate_id } })
		const newPlates = dataPlates.filter((plate) => plate.id !== plate_id)
		setDataPlates(newPlates)
		return
	}

	const handleDetailPlate = (plate_id) => {
		return navigate(`/details/${plate_id}`)
	}
	useEffect(() => {
		async function fetchFavorites() {
			try {
				const response = await api.get('/favorites')
				const favorites = response.data

				const plateIds = favorites.map((favorite) => favorite.plate_id)

				const plateResponses = await Promise.all(
					plateIds.map(async (plateId) => {
						const plateResponse = await api.get(`/plates/${plateId}`)

						return plateResponse.data
					}),
				)

				setDataPlates(plateResponses)
			} catch (error) {
				console.error(error)
			}
		}

		fetchFavorites()
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
				<h2>Meus Favoritos</h2>

				{dataPlates.length > 0 ? (
					<div className="platesWrapper">
						{dataPlates.map((plate) => {
							api.get(`/plates/${plate.id}`)
							const image = `${api.defaults.baseURL}/files/${plate.image}`
							return (
								<Plate key={plate.id}>
									<img
										src={image}
										alt={`Foto do Prato ${plate.title}`}
										onClick={() => handleDetailPlate(plate.id)}
									/>

									<div className="infoPlate">
										<h2 onClick={() => handleDetailPlate(plate.id)}>
											{plate.title}
										</h2>
										<ButtonText
											className="removeFav"
											title="Remover dos Favoritos"
											onClick={() => handleRemoveFavorites(plate.id)}
										/>
									</div>
								</Plate>
							)
						})}
					</div>
				) : (
					<div className="favEmpty">
						<h2>Você ainda não adicionou pratos aos favoritos</h2>
						<TbStarOff />
					</div>
				)}
			</Wrapper>
			<Footer />
		</Container>
	)
}
