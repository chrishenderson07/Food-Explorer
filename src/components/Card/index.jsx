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

	const [data, setData] = useState([])

	const { user } = useAuth()
	const isAdmin = user.isAdmin === 1 ? true : false

	const navigate = useNavigate()

	function handleFavorites(e) {
		if (e.target.parentNode !== 'svg') {
			setFavorite(!favorite)
		}
	}

	function handleEditPlate(e) {
		const parentId = e.target.parentNode
		console.log(parentId)
		// navigate(`/edit-plate/${e.target.key}`)
	}

	const handleDetails = () => {
		navigate(`/edit-plate/${id}`)
	}

	return (
		<Container {...rest}>
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
					iconColor={favorite ? 'red' : ''}
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
					<QuantityBox />
					<Button
						title="incluir"
						className="cardButton"
					/>
				</div>
			)}
		</Container>
	)
}
