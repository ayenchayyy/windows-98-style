import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root {
    --win98-gray: #c0c0c0;
    --win98-gray-light: #dfdfdf;
    --win98-gray-dark: #808080;
    --win98-blue: #000080;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'MS Sans Serif', 'Microsoft Sans Serif', sans-serif;
    background-color: #008080;
    color: #000;
    overflow: hidden;
  }

  button {
    font-family: inherit;
    border: none;
    background: none;
    cursor: pointer;
  }
`;