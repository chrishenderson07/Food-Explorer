import styled from 'styled-components'

export const Container = styled.div`
	width: 100%;
	display: grid;
	grid-template-areas:
		'header'
		'content'
		'footer';

	@media (min-width: 1000px) {
		> .main-banner {
			padding: 10.4rem 7rem 6.2rem;

			.donuts img {
				margin-top: -100px !important;
				margin-left: -100px !important;
			}
		}
	}
`

export const Content = styled.div`
	width: 100%;
	display: grid;

	grid-area: 'content';

	.slide {
		position: relative;

		.rec.rec-arrow {
			z-index: 20;
		}

		&::before {
			position: absolute;
			left: 0;
			height: 100%;
			width: 150px;
			content: '';
			background: rgb(0, 10, 15);
			background: linear-gradient(
				90deg,
				rgba(0, 10, 15, 1) 30%,
				rgba(0, 10, 15, 0) 100%
			);
			z-index: 10;
		}

		&::after {
			position: absolute;
			right: 0;
			height: 100%;
			width: 150px;
			content: '';
			background: rgb(0, 10, 15);
			background: linear-gradient(
				90deg,
				rgba(0, 10, 15, 1) 30%,
				rgba(0, 10, 15, 0) 100%
			);
			transform: matrix(-1, 0, 0, 1, 0, 0);

			z-index: 10;
		}

		@media (max-width: 769px) {
			&::before {
				width: 0px;
			}

			&::after {
				width: 0px;
			}
		}
	}

	> .main-banner {
		padding: 4.8rem 3rem 6.2rem;
		margin-top: 2rem;

		> .bg-banner {
			display: grid;
			grid-template-areas: 'img' 'infos';
			grid-template-columns: 1fr 1fr;
			align-items: center;

			background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
			border-radius: 3px;

			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			overflow-y: visible;

			.donuts {
				grid-area: 'img';
			}

			.donuts img {
				margin-top: -30px;
				margin-left: -30px;

				width: clamp(16rem, -3rem + 60vw, 63rem);
				height: clamp(14.9rem, -3rem + 60vw, 41.2rem);
			}

			.banner-info {
				grid-area: 'infos';
				margin-right: 1rem;
			}

			h2 {
				font-weight: 600;
			}

			p {
				font-family: ${({ theme }) => theme.FONTS.POPPINS_300};
				font-size: clamp(1.2rem, 0.3818rem + 2.0909vw, 2rem);
			}
		}

		@media (min-width: 780px) {
			max-width: 1350px;

			margin: 0 auto;
		}
	}

	.plates {
		position: relative;
		width: 100%;
	}
`
