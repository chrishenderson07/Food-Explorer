import styled from 'styled-components'
export const Container = styled.div`
	max-width: 53rem;
	min-width: 32rem;

	height: 53rem;
	border-radius: 8px;
	border: solid 1px ${({ theme }) => theme.COLORS.LIGHT_600};

	.FirstTab {
		display: flex;
		justify-content: center;
		height: 40rem;
		svg {
			margin-top: 4rem;
			color: ${({ theme }) => theme.COLORS.LIGHT_600};
			width: 70%;
			height: 70%;
		}
	}

	.SecondTab {
		padding: 2rem;
		min-height: 40rem;
		display: flex;

		form {
			width: 90%;
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			margin: 0 auto;

			input {
				background-color: transparent;
				border: solid 1px ${({ theme }) => theme.COLORS.LIGHT_100};
			}

			> fieldset {
				border: none;
				display: flex;
				gap: 1.6rem;
			}
		}
	}

	ul.nav {
		margin: 0 auto 2rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1px solid ${({ theme }) => theme.COLORS.LIGHT_600};
		border-radius: 8px 8px 0 0;

		color: ${({ theme }) => theme.COLORS.LIGHT_100};
		font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
	}

	ul.nav li {
		width: 50%;
		height: 8.1rem;
		padding: 1.2rem 1.4rem;
		list-style: none;
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.8rem;

		cursor: pointer;
		transition: all 0.7s;
		border-radius: 8px 8px 0 0;

		svg {
			font-size: 2.4rem;
		}
	}

	ul.nav li:nth-child(2) {
		border-radius: 8px 8px 0 0;
	}

	ul.nav li:hover {
		background: ${({ theme }) => theme.COLORS.DARK_700};
	}

	ul.nav li.active {
		background: ${({ theme }) => theme.COLORS.DARK_600};
	}
`
