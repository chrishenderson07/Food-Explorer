import styled from 'styled-components'
export const Container = styled.div`
	display: flex;
	align-items: center;

	max-width: 13rem;

	background-color: ${({ theme, isNew }) =>
		isNew ? 'transparent' : theme.COLORS.LIGHT_600};

	color: ${({ theme, isNew }) =>
		isNew ? theme.COLORS.LIGHT_300 : theme.COLORS.LIGHT_100};

	border: ${({ theme, isNew }) =>
		isNew ? `1px dashed ${theme.COLORS.LIGHT_300}` : 'none'};

	border-radius: 8px;

	> button {
		border: none;
		background: none;
		padding: 10px;
	}

	.button-delete {
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
	}
	.button-add {
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
	}

	> input {
		height: 32px;
		width: 100%;
		padding: 8px;

		color: ${({ theme }) => theme.COLORS.LIGHT_300};
		font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
		font-size: 1.6rem;
		background: transparent;
		border: none;

		&::placeholder {
			color: ${({ theme }) => theme.COLORS.LIGHT_500};
			text-align: center;
		}
	}
`
