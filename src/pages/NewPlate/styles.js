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

	.content {
		padding: 3.6rem 1.6rem;
		position: relative;

		grid-area: 'content';

		> .backButton {
			font-family: ${({ theme }) => theme.FONTS.POPPINS_300};
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			font-size: clamp(1.6rem, 0.3818rem + 2.0909vw, 2.4rem);

			position: absolute;
			top: 3%;
		}
	}

	.newIngredient {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;

		h4 {
			font-size: 1.6rem;
			color: ${({ theme }) => theme.COLORS.LIGHT_400};
			font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
			font-weight: 400;
		}

		.wrapper {
			background-color: ${({ theme }) => theme.COLORS.DARK_800};
			border-radius: 8px;
			padding: 6px 10px;

			display: flex;
			flex-direction: row;
			flex-wrap: wrap;
			gap: 1.6rem;
		}
	}

	.selectBox {
		display: flex;
		flex-direction: column;
		gap: 1.6rem;

		font-size: ${({ theme }) => theme.FONTS_SIZE.DEFAULT_SIZE};
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
		font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};

		position: relative;

		width: 100%;

		select {
			height: 4.8rem;
			padding: 1.2rem 1.4rem;
			border-radius: 8px;
			border: none;
			outline: none;

			background-color: ${({ theme }) => theme.COLORS.DARK_900};
			font-size: ${({ theme }) => theme.FONTS_SIZE.DEFAULT_SIZE};
			font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
			color: ${({ theme }) => theme.COLORS.LIGHT_100};
		}
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 2.4rem;
	grid-area: 'form';

	margin-top: 2.4rem;
	color: ${({ theme }) => theme.COLORS.LIGHT_300};

	h2 {
		font-weight: 500;
		font-size: clamp(2.6rem, 0.3818rem + 3.0909vw, 3.4rem);
	}

	.save {
		background-color: ${({ theme }) => theme.COLORS.TOMATO_400};
		transition: all 0.3s;

		&:hover {
			background-color: ${({ theme }) => theme.COLORS.TOMATO};
		}
	}

	.line {
		display: flex;
		flex-direction: column;
		gap: 1.2rem;
	}

	@media (min-width: 1000px) {
		gap: 3.2rem;

		.line {
			flex-direction: row;
			gap: 3.2rem;

			.newIngredient {
				flex: 3;
			}

			.price {
				flex: 1;
			}
		}

		.save {
			width: 200px;
			align-self: flex-end;
		}
	}
`
