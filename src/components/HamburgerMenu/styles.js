import styled from 'styled-components'

export const Container = styled.div`
	width: fit-content;
	height: 3rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	cursor: pointer;

	> div {
		width: 3rem;
		height: 0.3rem;
		background-color: ${({ theme }) => theme.COLORS.LIGHT_100};
		border-radius: 3px;

		transition: all 0.5s;
		transform-origin: 1px;

		&:nth-child(1) {
			transform: ${({ menuOpen }) =>
				menuOpen
					? 'rotate(45deg) translateX(.7rem) translateY(-.7rem)'
					: 'rotate(0deg) '};
		}

		&:nth-child(2) {
			transform: translateX(0);
			opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
		}

		&:nth-child(3) {
			transform: ${({ menuOpen }) =>
				menuOpen
					? 'rotate(-45deg) translateX(.7rem) translateY(.7rem)  '
					: 'rotate(0deg)'};
		}
	}
`
