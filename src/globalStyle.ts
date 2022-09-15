import { createGlobalStyle } from "styled-components";

export const theme = {
  headerTitle: "white",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    user-select: none;
  }

  html, body {
    background-color: black;

    width: 100%;
    height: 100%;

    overflow: hidden;
    overscroll-behavior: contain;
  }

  body {
    background-color: black;
  }

  div#root {
    height: 100%;
    background-color: #e6f2fa;
  }
  div.App {
    display: flex;
    flex-direction: column;

    height: 100%;
  }
`;

export default GlobalStyle;
