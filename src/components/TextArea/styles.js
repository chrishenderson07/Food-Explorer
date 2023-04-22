import styled from 'styled-components'
export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
	font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
`

export const TextBlock = styled.textarea`
	width: 100%;
	height: 17.2rem;
	padding: 1.4rem;

	color: ${({ theme }) => theme.COLORS.LIGHT_500};
	font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
	font-size: 1.6rem;

	background-color: ${({ theme }) => theme.COLORS.DARK_800};
	border-radius: 8px;
`
