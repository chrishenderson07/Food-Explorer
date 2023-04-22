import styled from 'styled-components'

export const Container = styled.div`
	grid-area: footer;
	width: 100%;
	height: 7.7rem;
	padding: 2.5rem 2rem;

	background-color: ${({ theme }) => theme.COLORS.DARK_600};
	font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};

	font-size: 1.2rem;
	font-weight: 400;
	color: ${({ theme }) => theme.COLORS.LIGHT_200};

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	> div button {
		color: ${({ theme }) => theme.COLORS.LIGHT_700};
		font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};

		font-weight: 700;
		font-size: clamp(1.4rem, 0.3818rem + 3.0909vw, 2.4rem);
	}

	@media (max-width: 375px) {
		div {
			flex-direction: column;
			align-items: center;
			gap: 1rem;
		}
	}
`
