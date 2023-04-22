import { useState } from 'react'

import { ButtonText } from '../ButtonText'
import { Button } from '../Button'
import { QuantityBox } from '../QuantityBox'

import { Container } from '../Card/styles'

import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

export function Card({ title, img, id, description, price, ...rest }) {
	const [favorite, setFavorite] = useState(false)

	function handleFavorites() {
		setFavorite(!favorite)
	}

	return (
		<Container {...rest}>
			<ButtonText
				Icon={favorite ? AiFillHeart : AiOutlineHeart}
				iconColor={favorite ? 'red' : ''}
				iconSize={24}
				className="favButton"
				onClick={handleFavorites}
			/>

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

			<div className="wrapper">
				<QuantityBox />
				<Button
					title="incluir"
					className="cardButton"
				/>
			</div>
		</Container>
	)
}
