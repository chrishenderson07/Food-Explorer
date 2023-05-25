import styled from 'styled-components'
export const Container = styled.div`
	width: 100%;
	height: 100vh;
	display: grid;
	grid-template-areas:
		'header'
		'content'
		'footer';
	grid-area: 'content';
	grid-template-rows: 10.4rem auto 7.7rem;

	.content {
		padding: 3.6rem 1.6rem;
		position: relative;

		.plateImage img {
			width: clamp(26.4rem, 15.6727rem + 28.6364vw, 39rem);
		}

		> .backButton {
			font-family: ${({ theme }) => theme.FONTS.POPPINS_300};
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			font-size: 2.4rem;

			position: absolute;
			top: 2%;
		}

		.plateWrapper {
			display: flex;
			flex-direction: column;
			gap: 1.6rem;
			align-items: center;

			margin-top: 2.6rem;

			text-align: center;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};

			.plateDetails {
				display: flex;
				flex-direction: column;
				gap: 2.4rem;

				font-family: ${({ theme }) => theme.FONTS.POPPINS_300};

				h3 {
					font-weight: 500;
					font-size: clamp(2.7rem, 1.1091rem + 2.9545vw, 4rem);
				}

				h4 {
					font-weight: 400;
					font-size: clamp(1.6rem, 0.3818rem + 2.0909vw, 2.4rem);
				}
			}

			.plateIngredients {
				display: flex;
				justify-content: center;

				flex-wrap: wrap;
				gap: 1.2rem;
			}

			.buyWrapper {
				display: flex;
				justify-content: center;
				width: 100%;
				margin: 0 auto;

				.buy-button {
					max-width: 10rem !important;
				}
			}
		}

		@media (min-width: 1000px) {
			.plateWrapper {
				flex-direction: row;
				gap: 4.7rem;

				.plateDetails {
					flex-direction: column;
					align-items: flex-start;
					text-align: left;
				}

				.buyWrapper {
					width: 36rem;
					margin: 0;
				}
			}
		}
	}
`
