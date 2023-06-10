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
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
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

		.history-order-infos {
			margin-top: 2rem;
			display: flex;
			justify-content: center;
		}
	}
`

export const Table = styled.div`
	width: 100%;
	border-radius: 1rem;
	overflow-x: auto;
	border: ${({ theme }) => `2px solid ${theme.COLORS.DARK_1000}`};

	table {
		width: 100%;
		border-collapse: collapse;
		text-align: left;
	}
`
