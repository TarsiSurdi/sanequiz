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

  html {
    background-color: black;
    /* overflow: hidden; */
  }

  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    background-color: black;
  }

  div#root {
    width: 100%;
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
