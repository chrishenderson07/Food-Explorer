import styled from 'styled-components'

export const Container = styled.div`
	width: auto;
	height: 3.2rem;

	padding: 0.4rem 0.8rem;

	background-color: ${({ theme }) => theme.COLORS.DARK_1000};
	border-radius: 5px;

	font-family: ${({ theme }) => theme.FONTS.POPPINS_300};
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
	font-weight: 500;
	font-size: 1.4rem;
	line-height: 2.4rem;

	display: flex;
	justify-content: center;
	align-items: center;
`
