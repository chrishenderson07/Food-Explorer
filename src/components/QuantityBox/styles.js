import styled from 'styled-components'
export const Container = styled.div`
	width: 100%;

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
`
