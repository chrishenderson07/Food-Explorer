import styled from 'styled-components'
export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;

	gap: 1.6rem;
	margin-bottom: 2rem;

	p {
		font-family: ${({ theme }) => theme.FONTS.POPPINS_300};
		font-size: clamp(1.4rem, 4vw, 1.6rem);
	}

	p:first-child {
		color: ${({ theme }) => theme.COLORS.LIGHT_400};
		font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
	}

	label {
		display: flex;
		justify-content: flex-start;
		gap: 1rem;
		width: 100%;
		border-radius: 8px;
		padding: 1.2rem 3.2rem;
		cursor: pointer;

		background-color: ${({ theme }) => theme.COLORS.DARK_700};

		svg {
			font-size: 2.4rem;
		}
	}

	input {
		display: none;
	}
`
