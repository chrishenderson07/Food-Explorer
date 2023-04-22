import styled from 'styled-components'

export const Container = styled.section`
	width: 100%;
	margin: 2.4rem 0;
	padding: 0 2.4rem;

	> h2 {
		color: ${({ theme }) => theme.COLORS.LIGHT_300};
		font-weight: 500;

		margin-bottom: 2.4rem;
	}
`
