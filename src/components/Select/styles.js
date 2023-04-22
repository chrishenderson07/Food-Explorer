import styled from 'styled-components'

export const Container = styled.div`
	display: flex;
	align-items: center;

	position: relative;

	width: 100%;

	button {
		svg {
			${({ isOpen }) => (isOpen ? 'transform: rotate(180deg);' : '')};

			color: ${({ theme }) => theme.COLORS.LIGHT_100};
			font-size: 2.4rem;
		}
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
