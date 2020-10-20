import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --red: #CE2A36;
    --black: #111111;
    --white: #FFFFFF;
    --green: #03A678;
    --gray: #7F8FA4;
    --swiper-theme-color: #03A678;
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #eaebec;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  a {
    text-decoration: none;
  }

  a:focus,
  button:focus {
    outline: none;
  }

  @media (max-width: 660px) {
    .swiper-button-next,
    .swiper-button-prev {
      display: none;
    }
  }
`;

export default GlobalStyle;
