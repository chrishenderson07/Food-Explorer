import styled from 'styled-components'

export const Container = styled.button`
	font-family: ${({ theme }) => theme.FONTS.POPPINS_300};
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
	font-weight: 500;
	font-size: 1.4rem;

	text-align: center;
	display: flex;
	align-items: center;
	gap: 0.8rem;
	justify-content: center;
`
