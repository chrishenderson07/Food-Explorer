import styled from 'styled-components'
export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-areas:
		'header'
		'content'
		'footer';

	grid-template-rows: 10.4rem auto 7.7rem;
	grid-area: 'content';

	.content {
		position: relative;
		padding: 3.8rem 1.6rem !important;

		h2 {
			font-family: ${({ theme }) => theme.FONTS.POPPINS_500};
			font-weight: 500;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			font-size: 3.2rem;
		}

		.backButton {
			font-family: ${({ theme }) => theme.FONTS.POPPINS_300};
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			font-size: 2.4rem;
		}

		.platesWrapper {
			margin-top: 3.2rem;
			padding: 1.6rem;

			display: grid;
			grid-template-columns: repeat(3, auto);
			gap: 4.8rem;
		}

		@media (max-width: 768px) {
			.platesWrapper {
				grid-template-columns: repeat(2, auto);
			}
		}

		@media (max-width: 480px) {
			.platesWrapper {
				margin: 3.2 auto;
				grid-template-columns: repeat(1, auto);
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
			weight: 500;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			cursor: pointer;
		}

		.removeFav {
			text-align: left;
			color: #ab4d55;
		}
	}
`
