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

    height: 100vh;
  }

  body {
    height: 100%; /* Fallback */
    height: -moz-available;
    height: -webkit-fill-available;
    height: fill-available;
    height: stretch; /* Latest specification */

    margin: 0;
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
