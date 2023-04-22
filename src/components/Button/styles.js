import styled from 'styled-components'

export const Container = styled.button`
	width: 100%;
	height: 4.8rem;
	padding: 1.2rem 2.4rem;

	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1.1rem;

	background-color: ${({ theme }) => theme.COLORS.TOMATO};
	border-radius: 5px;

	font-size: 1.4rem;
	font-weight: 500;
	font-family: 'Poppins';
	text-align: center;
	color: ${({ theme }) => theme.COLORS.LIGHT_100};
`
