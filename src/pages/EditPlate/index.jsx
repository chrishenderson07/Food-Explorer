import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import { useAuth } from '../../hooks/auth'
import { api } from '../../services/api'

import { Wrapper } from '../../components/Wrapper'
import { Header } from '../../components/Header'
import { HeaderAdm } from '../../components/HeaderAdm'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { InputImage } from '../../components/InputImage'
import { NewIngredient } from '../../components/NewIngredient'
import { TextArea } from '../../components/TextArea'

import { Container, Form } from './styles'

import { BsChevronLeft } from 'react-icons/bs'

export function EditPlate() {
	const { user } = useAuth()
	const isAdmin = user.isAdmin === 1 ? true : false

	const [data, setData] = useState({})
	const [title, setTitle] = useState()
	const [description, setDescription] = useState()
	const [price, setPrice] = useState()
	const [categories, setCategories] = useState()

	const [plateImage, setPlateImage] = useState(null)
	const [fileName, setFileName] = useState('')

	const [newIngredient, setNewIngredient] = useState('')
	const [ingredients, setIngredients] = useState([])

	const [options, setOptions] = useState([
		'Pratos Principais',
		'Sobremesas',
		'Bebidas',
	])

	const navigate = useNavigate()
	const params = useParams()

	function handleBackButton() {
		navigate('/')
	}

	function userUnauthorized() {
		if (!isAdmin) {
			navigate('/')
		}
	}

	function handleAddIngredients() {
		setIngredients((prevState) => [...prevState, newIngredient])
		setNewIngredient('')
	}

	function handleRemoveIngredient(deleted) {
		setIngredients((prevState) =>
			prevState.filter((ingredients) => ingredients !== deleted),
		)
	}

	function handleFileInputChange(event) {
		const file = event.target.files[0].name
		setFileName(file)

		const imagePreview = event.target.files[0]
		setPlateImage(imagePreview)
	}

	function handleEditPlate() {
		if (!plateImage || !title || !description || !price) {
			return alert('Preencha todos os campos!')
		}

		if (newIngredient.length > 0) {
			return alert('Um ingrediente ficou pendente a ser adicionado')
		}

		api.put(`plates/${params.id}`, {
			title,
			description,
			categories,
			price,
			ingredients,
		})
		const formData = new FormData()
		formData.append('image', plateImage)

		api
			.patch(`/plates/plateimage/${params.id}`, formData)
			.then((response) => {
				alert('Prato cadastrado com sucesso!')
				handleBackButton()
			})
			.catch((error) => {
				console.error(error)
				alert('Erro ao cadastrar prato')
			})
	}

	function handleExcludeButton() {
		api.delete(`/plates/${params.id}`).then(() => {
			alert('Prato excluido com sucesso!')
			handleBackButton()
		})
	}

	useEffect(() => {
		async function fetchData() {
			const response = await api.get(`/plates/${params.id}`)

			setData(response.data)
			setIngredients(
				response.data.ingredients.map((ingredient) => ingredient.name),
			)
		}
		fetchData()
		userUnauthorized()
	}, [])

	return (
		<Container>
			{isAdmin ? <HeaderAdm /> : <Header />}

			<Wrapper className="content">
				<ButtonText
					title="voltar"
					Icon={BsChevronLeft}
					iconSize={26}
					className="backButton"
					onClick={handleBackButton}
				/>

				<Form>
					<h2>Adicionar prato</h2>

					<div className="line">
						<InputImage
							onChange={handleFileInputChange}
							title={fileName ? fileName : 'Selecione uma imagem'}
						/>
						<Input
							type="text"
							title="Nome"
							placeholder="Ex.: Salada Ceasar"
							onChange={(e) => setTitle(e.target.value)}
							value={title ? title : data.title}
						/>

						<div className="selectBox">
							<label htmlFor="categories">Categoria</label>
							<select
								value={categories ? categories : data.categories}
								onChange={(e) => setCategories(e.target.value)}>
								{options.map((option, index) => (
									<option
										value={option}
										key={String(index)}>
										{option}
									</option>
								))}
							</select>
						</div>
					</div>

					<div className="line">
						<div className="newIngredient">
							<h4>Ingredientes</h4>
							<div className="wrapper">
								{ingredients.map((ingredient, index) => (
									<NewIngredient
										key={String(index)}
										value={ingredient}
										onClick={() => handleRemoveIngredient(ingredient)}
									/>
								))}

								<NewIngredient
									isNew
									value={newIngredient}
									onChange={(e) => setNewIngredient(e.target.value)}
									onClick={handleAddIngredients}
								/>
							</div>
						</div>

						<Input
							type="number"
							title="Preço"
							placeholder="R$ 00,00"
							className="price"
							value={price ? price : data.price}
							onChange={(e) => {
								setPrice(e.target.value)
							}}
						/>
					</div>

					<TextArea
						title="Descrição"
						name="descricao"
						value={description ? description : data.description}
						placeholder="Preencha com a descrição do seu Prato"
						onChange={(e) => setDescription(e.target.value)}
					/>

					<div className="buttonsWrapper">
						<Button
							title="Excluir prato"
							className="exclude"
							onClick={handleExcludeButton}
						/>
						<Button
							title="Salvar alterações"
							className="save"
							onClick={handleEditPlate}
						/>
					</div>
				</Form>
			</Wrapper>
			<Footer />
		</Container>
	)
}
