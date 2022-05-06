import { createGlobalStyle } from "styled-components";

export const theme = {
  headerTitle: "#ddd",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  html, body {
    background-color: black;

    width: 100%;
    height: 100%;
  }

  body {
    background-color: black;
  }

  div#root {
    height: 100%;
    background-color: #333;
  }
  div.App {
    display: flex;
    flex-direction: column;

    height: 100%;
  }
`;

export default GlobalStyle;
