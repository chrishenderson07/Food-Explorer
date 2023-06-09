import styled from 'styled-components'
export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-rows: 10.4rem auto 7.7rem;

	grid-template-areas:
		'header'
		'content'
		'footer';

	.content {
		position: relative;
		padding: 3.6rem 1.6rem;
		grid-area: 'content';

		.backButton {
			font-family: ${({ theme }) => theme.FONTS.POPPINS_300};
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			font-size: 2.4rem;
		}

		h2 {
			font-family: ${({ theme }) => theme.FONTS.POPPINS_500};
			font-weight: 500;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			font-size: 3.2rem;
		}

		.platesWrapper {
			margin-top: 3.2rem;
			padding: 1.6rem;

			display: flex;
			flex-direction: column;
			gap: 4.8rem;
		}

		.total-cart {
			font-weight: 500;
			font-size: 2rem;
		}

		.cartEmpty {
			height: 80%;
			display: grid;
			place-content: center;
			text-align: center;

			svg {
				font-size: 12.8rem;
				color: ${({ theme }) => theme.COLORS.LIGHT_200};
				opacity: 0.8;
				margin: 0 auto;
			}
		}

		@media (min-width: 768px) {
			.cart-infos {
				display: grid;
				grid-template-columns: 1fr 1fr;
			}
		}
	}
`

export const Plate = styled.div`
	display: flex;
	align-items: center;
	gap: 1.2rem;

	img {
		width: 7.2rem !important;
		cursor: pointer;
	}

	.infoPlate {
		h2 {
			font-size: 2rem;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			cursor: pointer;
		}

		h3 {
			font-size: 1.2rem;
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
			font-weight: 400;
		}

		.lineTitle {
			display: flex;
			align-items: center;
			gap: 1rem;
		}

		.removePlate {
			text-align: left;
			color: #ab4d55;
		}
	}
`
