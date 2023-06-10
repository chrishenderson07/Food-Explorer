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
		padding: 8.8rem 3rem 6.2rem;
		margin-top: 2rem;

		@media (max-width: 767px) {
			padding: 4.8rem 2rem 1.2rem;
		}

		> .bg-banner {
			display: grid;
			grid-template-areas: 'img' 'infos';
			grid-template-columns: 1fr 1fr;
			align-items: center;

			background: linear-gradient(180deg, #091e26 0%, #00131c 100%);
			border-radius: 3px;

			color: ${({ theme }) => theme.COLORS.LIGHT_300};
			overflow-y: visible;

			.float-ingredients {
				grid-area: 'img';

				position: relative;
				text-align: center;
				margin-top: -72px;
				margin-left: -50px;
				margin-bottom: -5px;
			}
			.float-ingredients .mertilo2 {
				position: absolute;
				bottom: -20px;
				left: 20px;
			}

			.float-ingredients .mertilo3 {
				position: absolute;
				bottom: 25px;
				left: 100px;
			}
			.float-ingredients .mertilo1 {
				position: absolute;
				bottom: 170px;
				left: 150px;
			}
			.float-ingredients .mertilo4 {
				position: absolute;
				bottom: 170px;
				left: 550px;
			}

			.float-ingredients .framboesa1 {
				position: absolute;
				bottom: 80px;
				left: 50px;
			}
			.float-ingredients .framboesa2 {
				position: absolute;
				bottom: 60px;
				left: 475px;
			}

			.float-ingredients .folhamove {
				position: absolute;
				top: 50px;
				left: 35px;
			}
			.float-ingredients .folhamove2 {
				position: absolute;
				top: 60px;
				left: 500px;
			}

			@media (max-width: 768px) {
				.float-ingredients {
					margin: -50px 0 0 50px;

					text-align: center;
					display: flex;
				}
				.float-ingredients .mainDonut {
					width: 250px;
					align-self: flex-end;
					margin-left: 0;
				}

				.float-ingredients .mertilo2 {
					position: absolute;
					bottom: 20px;
					left: -50px;
					width: 30px;
				}

				.float-ingredients .mertilo3 {
					position: absolute;
					bottom: 25px;
					left: 100px;
					width: 30px;
				}
				.float-ingredients .mertilo1 {
					position: absolute;
					bottom: 170px;
					left: 150px;
					width: 40px;
				}
				.float-ingredients .mertilo4 {
					position: absolute;
					bottom: 20px;
					left: 300px;
					width: 30px;
				}

				.float-ingredients .framboesa1 {
					position: absolute;
					bottom: 100px;
					left: -70px;
					width: 50px;
				}
				.float-ingredients .framboesa2 {
					position: absolute;
					bottom: 30px;
					left: 225px;
				}

				.float-ingredients .folhamove {
					position: absolute;
					top: 0px;
					left: -70px;
					width: 75px;
				}
				.float-ingredients .folhamove2 {
					position: absolute;
					top: 60px;
					left: 250px;
				}
			}
			@media (max-width: 426px) {
				.float-ingredients {
					margin: -50px 0 0 25px;

					text-align: center;
					display: flex;
				}
				.float-ingredients .mainDonut {
					width: 125px;
				}

				.float-ingredients .mertilo2 {
					position: absolute;
					bottom: -10px;
					left: -30px;
					width: 20px;
				}

				.float-ingredients .mertilo2 img {
					width: 20px;
				}

				.float-ingredients .mertilo3 {
					position: absolute;
					bottom: 25px;
					left: -10px;
					width: 10px;
				}

				.float-ingredients .mertilo3 img {
					width: 15px;
				}

				.float-ingredients .mertilo1 {
					position: absolute;
					bottom: 170px;
					left: 150px;
					width: 20px;
					display: none;
				}
				.float-ingredients .mertilo4 {
					position: absolute;
					bottom: 20px;
					left: 300px;
					width: 30px;
					display: none;
				}

				.float-ingredients .mertilo4 img {
					width: 30px;
				}

				.float-ingredients .framboesa1 {
					position: absolute;
					bottom: 50px;
					left: -30px;
					width: 30px;
				}

				.float-ingredients .framboesa1 img {
					width: 20px;
				}

				.float-ingredients .framboesa2 {
					position: absolute;
					bottom: 20px;
					left: 100px;
					width: 25px;
				}

				.float-ingredients .framboesa2 img {
					width: 25px;
				}
				.float-ingredients .folhamove {
					position: absolute;
					top: 30px;
					left: -40px;
					width: 45px;
				}

				.float-ingredients .folhamove img {
					width: 45px;
				}

				.float-ingredients .folhamove2 {
					position: absolute;
					top: 60px;
					left: 120px;
					width: 35px;
				}

				.float-ingredients .folhamove2 img {
					width: 35px;
				}

				@media (max-width: 376px) {
					.float-ingredients .folhamove2 {
						display: none;
					}
				}
			}

			/* .donuts img {
				margin-top: -30px;
				margin-left: -30px;

				width: clamp(16rem, -3rem + 60vw, 63rem);
				height: clamp(14.9rem, -3rem + 60vw, 41.2rem);
			} */

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
