import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  /* @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans&display=swap'); */

  
:root{
  font-size: 62.5%;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;


}

  body {
    font-size: 1.6rem;
    font-family: ${({ theme }) => {
			theme.FONTS.ROBOTO_500
		}};

    background-color: ${({ theme }) => theme.COLORS.DARK_400};
  }

  h1 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_300};
    font-size: ${({ theme }) => theme.FONTS_SIZE.H1}; 
    line-height: 140%;
  }
  
  h2 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_300};
    font-size: ${({ theme }) => theme.FONTS_SIZE.H2}; 
    line-height: 140%;
  }
  h3 {
    font-family: ${({ theme }) => theme.FONTS.POPPINS_300};
  }

  p {
    font-family: ${({ theme }) => theme.FONTS.ROBOTO_500};
  }

  input {
    background: none;
    border: none;
    outline: none;
  
  }

  textarea{
    background-color: transparent;
    resize: none;
    border: none;

    &:focus{
      outline: solid 1px ${({ theme }) => theme.COLORS.LIGHT_600};
    }
  }

  button {
    background: none;
    border: none;
    outline: none;

    cursor: pointer;
    transition: filter .3s;

    :hover {
      filter: brightness(0.9);
    }
  }
`
