import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	justify-content: center;

	color: ${({ theme }) => theme.COLORS.LIGHT_100};

	.content {
		width: 100%;
		margin: 0 auto;
		padding: 6.4rem 2rem;

		display: flex;
		flex-direction: column;
		gap: 7.3rem;

		> div:first-child {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 1.1rem;

			font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
			font-weight: 700;
			font-size: 2.8rem;

			> svg {
				fill: #065e7c;
			}
		}

		> .signin {
			display: flex;
			flex-direction: column;
			gap: 3.2rem;

			h2 {
				display: none;
			}
		}

		@media (min-width: 1000px) {
			display: flex;
			flex-direction: row;
			align-items: center;

			> div:first-child {
				font-size: 4.2rem;
				flex: 1;
			}

			> .signin {
				background-color: ${({ theme }) => theme.COLORS.DARK_700};
				flex: 2;
				max-width: 47.6rem;

				padding: 6.4rem;
				border-radius: 1.6rem;

				h2 {
					display: block;
					text-align: center;
					font-weight: 500;
				}
			}
		}
	}
`
