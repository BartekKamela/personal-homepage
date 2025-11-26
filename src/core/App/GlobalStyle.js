import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
      box-sizing: border-box;
  }

  *, ::after, ::before {
      box-sizing: inherit;
  }

  body {
    color: #6E7E91;
    background: #D1D5DA4D;
  }
`;
