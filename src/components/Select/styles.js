import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1.6rem;

	font-size: ${({ theme }) => theme.FONTS_SIZE.DEFAULT_SIZE};
	color: ${({ theme }) => theme.COLORS.LIGHT_400};
	font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};

	position: relative;

	width: 100%;

	button {
		svg {
			${({ isOpen }) => (isOpen ? 'transform: rotate(180deg);' : '')};

			color: ${({ theme }) => theme.COLORS.LIGHT_100};
			font-size: 2.4rem;
		}
	}

	select {
		width: 100%;
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
`

export const Options = styled.div`
	display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
	flex-direction: column;

	position: absolute;
	top: 4rem;
	left: -1.6rem;
	right: 0;
	width: calc(100% + 3.2rem);
	padding: 0.8rem 0;
	border-radius: 8px;
	background-color: green;
`

export const SelectedOption = styled.div`
	flex: 1;
`

export const Option = styled.div`
	padding: 0.8rem 1.6rem;

	display: block;
	background-color: gray;
	color: white;
	margin-bottom: 10px;
`
