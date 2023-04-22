import Carousel from '@itseasy21/react-elastic-carousel'

import { Card } from '../Card'

import { Container } from './styles'

export function Slider({ products }) {
	const breakPoints = [
		{ width: 320, itemsToShow: 1 },
		{ width: 550, itemsToShow: 2 },
		{ width: 910, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	]

	return (
		<Container>
			<Carousel
				breakPoints={breakPoints}
				pagination={false}></Carousel>
		</Container>
	)
}
