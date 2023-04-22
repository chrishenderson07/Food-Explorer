import styled from 'styled-components'

export const Container = styled.button`
	font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
	font-weight: 700;
	font-size: 2.4rem;

	text-align: center;
	display: flex;
	align-items: center;
	gap: 0.8rem;
	justify-content: center;
`
