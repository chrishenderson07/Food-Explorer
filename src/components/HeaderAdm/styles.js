import styled from 'styled-components'

export const Container = styled.header`
	grid-area: header;
	width: 100%;

	background-color: ${({ theme }) => theme.COLORS.DARK_700};
	color: white;
	padding: 2.6rem;
	height: 10.4rem;
	grid-area: 'header';

	> nav {
		@media (min-width: 780px) {
			max-width: 1350px;
			margin: 0 auto;
		}

		display: flex;
		justify-content: space-between;
		align-items: center;

		.menu-hamburger .nav-menu {
			width: 100%;
			height: 100%;
			position: absolute;
			background-color: #000d12;
			top: 80px;
			left: 0;
			z-index: 5;
			transform: translateX(-100%);
			opacity: 0;
			transition: all 0.3s;
			padding: 3.6rem 2.8rem;
		}

		.hamburger {
			display: flex;
			gap: 1.6rem;
			align-items: center;
			font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
			font-size: 2.1rem;
		}

		.menu-hamburger .nav-menu.open {
			transform: translateX(0px);
			opacity: 1;
		}

		.mobile-cart {
			position: relative;
		}

		.mobile-cart p {
			font-size: 1.4rem;

			position: absolute;
			top: -10px;
			right: -5px;
			background-color: ${({ theme }) => theme.COLORS.TOMATO};

			border-radius: 50px;
			padding: 0.2rem;
		}

		.nav-menu.open {
			display: flex;
			flex-direction: column;
		}

		.nav-menu.open .search {
			display: flex;
			align-items: center;
			gap: 1rem;
			width: 100%;
			height: 4.8rem;
			padding: 0rem 1rem;
			border-radius: 5px;
			background-color: ${({ theme }) => theme.COLORS.DARK_900};
			margin-bottom: 3.6rem;

			input {
				background-color: transparent;
				font-size: 1.6rem;
				margin-bottom: 1.6rem;
			}
		}

		.newPlate,
		#search,
		.favorites,
		.orders,
		.exit {
			display: none;
		}

		.textExit,
		.textOrders,
		.textFavorites {
			width: 100%;
			justify-content: flex-start;
			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			font: normal 300 2.4rem ${({ theme }) => theme.FONTS.POPPINS_300};
			padding-bottom: 0.5rem;
			border-bottom: 1px solid ${({ theme }) => theme.COLORS.DARK_1000};
		}

		.logo {
			grid-area: logo;
			display: flex;
			align-items: center;
			gap: 0.4rem;

			p {
				font-size: 1.2rem;
				color: ${({ theme }) => theme.COLORS.CAKE_200};
			}

			@media (min-width: 768px) {
				display: flex;
				flex-direction: column;
				p {
					align-self: flex-end;
				}
			}
		}

		@media (min-width: 1000px) {
			display: flex;
			align-items: center;
			gap: 3.2rem;

			display: grid;
			grid-template-areas: 'logo search search search button  button exit';

			#search {
				display: flex;
				align-items: center;
				width: 100%;
				height: 4.8rem;

				gap: 0.8rem;
				background-color: ${({ theme }) => theme.COLORS.DARK_900};
				padding: 0rem 1rem;
				border-radius: 5px;

				grid-area: search;

				input {
					background-color: transparent;
					font-size: 1.6rem;
					margin-bottom: 1.6rem;
				}
			}

			.newPlate {
				grid-area: button;
				display: block;

				button {
					width: 100%;
					display: flex;
					justify-content: center;

					margin: 0 auto;
				}
			}

			.exit {
				display: block;
				grid-area: exit;
			}

			.menu-hamburger {
				display: none;
			}

			.mobile-cart {
				display: none;
			}
		}
	}
`
