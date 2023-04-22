import { Container, Content } from './styles'

import Carousel from '@itseasy21/react-elastic-carousel'

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Section } from '../../components/Section'
import { Card } from '../../components/Card'
import { Wrapper } from '../../components/Wrapper'

import donutsImg from '../../assets/imageHome.png'
import plateImg from '../../assets/plates/Mask group-2.png'

export function Home() {
	const breakPoints = [
		{ width: 1, itemsToShow: 1 },
		{ width: 360, itemsToShow: 2 },
		{ width: 910, itemsToShow: 3 },
		{ width: 1200, itemsToShow: 4 },
	]

	return (
		<Container>
			<Header />

			<Wrapper>
				<Content>
					<div className="main-banner">
						<div className="bg-banner">
							<div className="donuts">
								<img
									src={donutsImg}
									alt="Imagem do Banner"
								/>
							</div>
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
								<Card
									img={plateImg}
									title="Spaguetti Gamber >"
									description="Massa fresca com camarões e pesto."
									price={`R$ ${79.97}`}
								/>
								<Card
									img={plateImg}
									title="Spaguetti Gamber >"
									description="Massa fresca com camarões e pesto."
									price={`R$ ${79.97}`}
								/>
								<Card
									img={plateImg}
									title="Spaguetti Gamber >"
									description="Massa fresca com camarões e pesto."
									price={`R$ ${79.97}`}
								/>
								<Card
									img={plateImg}
									title="Spaguetti Gamber >"
									description="Massa fresca com camarões e pesto."
									price={`R$ ${79.97}`}
								/>
							</Carousel>
						</div>
					</Section>

					<Section title="Sobremesas">
						<div className="plates">
							<Carousel
								className="slide"
								breakPoints={breakPoints}
								pagination={false}>
								<Card
									img={plateImg}
									title="Spaguetti Gamber >"
									description="Massa fresca com camarões e pesto."
									price={`R$ ${79.97}`}
								/>
								<Card
									img={plateImg}
									title="Spaguetti Gamber >"
									description="Massa fresca com camarões e pesto."
									price={`R$ ${79.97}`}
								/>
								<Card
									img={plateImg}
									title="Spaguetti Gamber >"
									description="Massa fresca com camarões e pesto."
									price={`R$ ${79.97}`}
								/>
								<Card
									img={plateImg}
									title="Spaguetti Gamber >"
									description="Massa fresca com camarões e pesto."
									price={`R$ ${79.97}`}
								/>
							</Carousel>
						</div>
					</Section>

					<Section title="Bebidas">
						<div className="plates">
							<Carousel
								className="slide"
								breakPoints={breakPoints}
								pagination={false}>
								<Card
									img={plateImg}
									title="Spaguetti Gamber >"
									description="Massa fresca com camarões e pesto."
									price={`R$ ${79.97}`}
								/>
								<Card
									img={plateImg}
									title="Spaguetti Gamber >"
									description="Massa fresca com camarões e pesto."
									price={`R$ ${79.97}`}
								/>
								<Card
									img={plateImg}
									title="Spaguetti Gamber >"
									description="Massa fresca com camarões e pesto."
									price={`R$ ${79.97}`}
								/>
								<Card
									img={plateImg}
									title="Spaguetti Gamber >"
									description="Massa fresca com camarões e pesto."
									price={`R$ ${79.97}`}
								/>
							</Carousel>
						</div>
					</Section>
				</Content>
			</Wrapper>

			<Footer />
		</Container>
	)
}
