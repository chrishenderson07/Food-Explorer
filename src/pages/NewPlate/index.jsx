import { useState } from 'react'

import { Container, Form } from './styles'

import { Wrapper } from '../../components/Wrapper'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { InputImage } from '../../components/InputImage'
import { Select } from '../../components/Select'
import { NewIngredient } from '../../components/NewIngredient'
import { TextArea } from '../../components/TextArea'

import { BsChevronLeft } from 'react-icons/bs'

export function NewPlate() {
	const [newIngredient, setNewIngredient] = useState('')
	const [ingredients, setIngredients] = useState([])

	function handleAddIngredients() {
		setIngredients((prevState) => [...prevState, newIngredient])
		setNewIngredient('')
	}

	function handleRemoveIngredient(deleted) {
		setIngredients((prevState) =>
			prevState.filter((ingredients) => ingredients !== deleted),
		)
	}

	return (
		<Container>
			<Header />
			<Wrapper className="content">
				<ButtonText
					title="voltar"
					Icon={BsChevronLeft}
					iconSize={26}
					className="backButton"
				/>

				<Form>
					<h2>Adicionar prato</h2>

					<div className="line">
						<InputImage />
						<Input
							type="text"
							title="Nome"
							placeholder="Ex.: Salada Ceasar"
						/>

						<Input
							type="text"
							title="Categorias"
							placeholder="Selecione uma categoria"
							// options={options}
						/>
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
							type="text"
							title="Preço"
							placeholder="R$ 00,00"
							className="price"
						/>
					</div>

					<TextArea
						title="Descrição"
						name="descricao"
						placeholder="Preencha com a descrição do seu Prato"
					/>

					<Button
						title="Salvar alterações"
						className="save"
					/>
				</Form>
			</Wrapper>
			<Footer />
		</Container>
	)
}
