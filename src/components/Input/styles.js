import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	font-size: ${({ theme }) => theme.FONTS_SIZE.DEFAULT_SIZE};
	color: ${({ theme }) => theme.COLORS.LIGHT_400};
	font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};

	display: flex;
	flex-direction: column;
	gap: 1.6rem;

	> input {
		width: 100%;
		height: 4.8rem;
		padding: 1.2rem 1.4rem;
		border-radius: 8px;

		background-color: ${({ theme }) => theme.COLORS.DARK_900};
		font-size: ${({ theme }) => theme.FONTS_SIZE.DEFAULT_SIZE};
		font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
		color: ${({ theme }) => theme.COLORS.LIGHT_100};

		::placeholder {
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
			font-size: ${({ theme }) => theme.FONTS_SIZE.DEFAULT_SIZE};
		}
	}
`
