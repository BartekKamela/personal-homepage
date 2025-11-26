import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
      box-sizing: border-box;
  }

  *, ::after, ::before {
      box-sizing: inherit;
  }

  body {
    background: #D1D5DA4D;
  }
`;

export default GlobalStyle;