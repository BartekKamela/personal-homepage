import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
      box-sizing: border-box;
  }

  *, ::after, ::before {
      box-sizing: inherit;
  }

  body {
    font-family: "Inter", sans-serif;
    transition: background 0.3s;
    color: ${({ theme }) => theme.colors.site.text};
    background: ${({ theme }) => theme.colors.site.background};
    letter-spacing: 0.05em;
    word-break: break-word;
    padding-bottom: 108px;
  }
`;
