import styled from 'styled-components'
export const Container = styled.div`
	max-width: 21rem;
	width: 100%;
	border-radius: 8px;
	padding: 2.4rem;

	border: solid 1px ${({ theme }) => theme.COLORS.DARK_300};

	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 1.2rem;
	cursor: pointer;

	position: relative;

	.favButton {
		position: absolute;
		z-index: 100;
		right: 15px;
		top: 0;
	}

	img {
		width: clamp(8.8rem, 4.8rem + 20vw, 17.6rem);
		aspect-ratio: 1/1;
	}

	.plateName {
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
		font-weight: 500;
		font-size: ${({ theme }) => theme.FONTS_SIZE.PROD_TITLE}!important;
	}

	.cardButton {
		display: flex;
		justify-content: center;
	}

	p {
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
		font: normal 400 1.4rem/2.2rem ${({ theme }) => theme.FONTS.ROBOTO_500};
		display: none;
	}

	h4 {
		color: ${({ theme }) => theme.COLORS.CAKE_200};
		font-size: clamp(1.6rem, 0.3818rem + 2.0909vw, 3.2rem);
		font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
		font-weight: 400;
	}

	.wrapper {
		width: 100%;
		display: flex;
		flex-direction: column;
		gap: 1.6rem;

		> .quantity {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 2rem;

			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			font-size: clamp(1.6rem, 0.3818rem + 2.0909vw, 2.4rem);
			font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
			font-weight: 400;

			button {
				color: ${({ theme }) => theme.COLORS.LIGHT_300};
				font-size: clamp(3rem, 0.1818rem + 5.0909vw, 3.5rem);
			}
		}
	}

	@media (min-width: 724px) {
		max-width: 30.4rem;
		width: 100%;
		gap: 1.6rem;

		p {
			display: block;
		}

		.wrapper {
			display: flex;
			flex-direction: row;
			gap: 1.6rem;

			.quantity {
				display: flex;
				justify-content: center;
			}
		}
	}
`
