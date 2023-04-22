import { Container } from './styles'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Wrapper } from '../../components/Wrapper'
import { ButtonText } from '../../components/ButtonText'
import { Tags } from '../../components/Tags'
import { QuantityBox } from '../../components/QuantityBox'
import { Button } from '../../components/Button'

import { BsChevronLeft, BsReceipt } from 'react-icons/bs'
import plateImage from '../../assets/plates/Mask group.png'

export function Details() {
	const plate = {
		name: 'Salada Ravanello',
		image: plateImage,
		description:
			'Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.',
		ingredients: [
			'alface',
			'cebola',
			'pão naan',
			'pepino',
			'rabanete',
			'tomate',
		],
		price: 25,
	}

	return (
		<Container>
			<Header />
			<Wrapper className="content">
				<ButtonText
					title="voltar"
					Icon={BsChevronLeft}
					iconSize={32}
					className="backButton"
				/>
				<div className="plateWrapper">
					<div className="plateImage">
						<img src={plate.image} />
					</div>
					<div className="plateDetails">
						<h3>{plate.name}</h3>
						<h4>{plate.description}</h4>
						<div className="plateIngredients">
							{plate.ingredients &&
								plate.ingredients.map((ingredient) => (
									<Tags
										key={String(ingredient)}
										name={ingredient}
									/>
								))}
						</div>
						<div className="buyWrapper">
							<QuantityBox />
							<Button
								title="pedir"
								Icon={BsReceipt}
								price={plate.price}
							/>
						</div>
					</div>
				</div>
			</Wrapper>
			<Footer />
		</Container>
	)
}
