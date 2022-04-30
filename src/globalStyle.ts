import { createGlobalStyle } from "styled-components";

export const theme = {
  headerTitle: "#ddd",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }

  body {
    width: 100vw;
    height: 100vh;

    margin: 0;

    background: #333;
  }

  div#root, div.App {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyle;
