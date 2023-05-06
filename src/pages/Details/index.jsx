import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import { api } from '../../services/api'
import { useAuth } from '../../hooks/auth'

import { Container } from './styles'

import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { Wrapper } from '../../components/Wrapper'
import { ButtonText } from '../../components/ButtonText'
import { Tags } from '../../components/Tags'
import { QuantityBox } from '../../components/QuantityBox'
import { Button } from '../../components/Button'

import { BsChevronLeft, BsReceipt } from 'react-icons/bs'

export function Details() {
	const [data, setData] = useState(null)
	const [plateImage, setPlateImage] = useState(null)

	const { user } = useAuth()
	const isAdmin = user.isAdmin === 1 ? true : false

	const params = useParams()
	const navigate = useNavigate()

	function handleBack() {
		navigate(-1)
	}

	useEffect(() => {
		async function fetchData() {
			try {
				const response = await api.get(`/plates/${params.id}`)
				setData(response.data)

				const image = response.data.image
				const url = `${api.defaults.baseURL}/files/${image}`

				setPlateImage(url)
			} catch (error) {
				console.error(error)
			}
		}

		fetchData()
	}, [])

	return (
		<Container>
			{isAdmin ? <HeaderAdm /> : <Header />}
			{data && (
				<Wrapper className="content">
					<ButtonText
						title="voltar"
						Icon={BsChevronLeft}
						iconSize={32}
						className="backButton"
						onClick={handleBack}
					/>
					<div className="plateWrapper">
						<div className="plateImage">
							<img src={plateImage} />
						</div>
						<div className="plateDetails">
							<h3>{data.title}</h3>
							<h4>{data.description}</h4>
							<div className="plateIngredients">
								{data.ingredients &&
									data.ingredients.map((ingredient) => (
										<Tags
											key={String(ingredient.id)}
											name={ingredient.name}
										/>
									))}
							</div>
							{isAdmin ? (
								<div
									className="buyWrapper"
									style={{ width: '200px' }}>
									<Button
										title="Editar Prato"
										onClick={() => navigate(`/edit-plate/${params.id}`)}
									/>
								</div>
							) : (
								<div className="buyWrapper">
									<QuantityBox />
									<Button
										title="pedir"
										Icon={BsReceipt}
										price={data.price}
									/>
								</div>
							)}
						</div>
					</div>
				</Wrapper>
			)}
			<Footer />
		</Container>
	)
}
