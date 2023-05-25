import { useState, useEffect } from 'react'
import { useAuth } from '../../hooks/auth'
import { useNavigate } from 'react-router-dom'

import { api } from '../../services/api'

import { ButtonText } from '../ButtonText'
import { Button } from '../Button'
import { QuantityBox } from '../QuantityBox'

import { Container } from '../Card/styles'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { TbPencil } from 'react-icons/tb'

export function Card({ title, img, id, description, price, ...rest }) {
	const [favorite, setFavorite] = useState(false)
	const [quantity, setQuantity] = useState(1)
	const [data, setData] = useState([])

	const { user } = useAuth()
	const isAdmin = user.isAdmin === 1 ? true : false

	const navigate = useNavigate()

	const handleDetails = () => {
		navigate(`/edit-plate/${id}`)
	}

	function handleFavorites(e) {
		if (e.target.parentNode !== 'svg') {
			setFavorite(!favorite)
		}
	}

	const handleQuantityChange = (newQuantity) => {
		setQuantity(newQuantity)
	}

	function handleAddCart(id, quantity) {
		let cart = localStorage.getItem('@foodexplorer:cart')
		if (!cart) {
			cart = []
		} else {
			cart = JSON.parse(cart)
		}
		const plate = {
			id,
			quantity: quantity,
		}
		let cartFiltered = cart.find((plates) => plates.id === plate.id)

		if (!cartFiltered) {
			cart.push(plate)
			const cartString = JSON.stringify(cart)
			localStorage.setItem('@foodexplorer:cart', cartString)
			return alert('Prato adicionado ao carrinho com sucesso')
		}
		return alert('O prato ja esta adicionado ao seu carrinho')
	}

	return (
		<Container
			id={id}
			{...rest}>
			{isAdmin ? (
				<ButtonText
					Icon={TbPencil}
					iconSize={24}
					className="favButton"
					onClick={handleDetails}
				/>
			) : (
				<ButtonText
					Icon={favorite ? AiFillHeart : AiOutlineHeart}
					iconColor={favorite ? 'white' : ''}
					iconSize={24}
					className="favButton"
					onClick={handleFavorites}
				/>
			)}

			<img
				src={img}
				alt={`Foto do Prato ${title}`}
			/>

			<ButtonText
				title={title}
				className="plateName"
			/>
			<p>{description}</p>
			<h4>{price}</h4>

			{isAdmin ? (
				''
			) : (
				<div className="wrapper">
					<QuantityBox onChange={handleQuantityChange} />
					<Button
						title="incluir"
						className="cardButton"
						onClick={(e) => {
							handleAddCart(id, quantity)
						}}
					/>
				</div>
			)}
		</Container>
	)
}
