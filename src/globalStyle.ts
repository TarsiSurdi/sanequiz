import { createGlobalStyle } from "styled-components";

export const theme = {
  headerTitle: "#ddd",
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    user-select: none;
  }

  @media screen and (min-width: 320px) and (max-width: 767px) and (orientation: landscape) {
  html {
    transform: rotate(-90deg);
    transform-origin: left top;
    width: 100vh;
    overflow-x: hidden;
    position: absolute;
    top: 100%;
    left: 0;
  }
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
    background-color: #333;
  }
  div.App {
    display: flex;
    flex-direction: column;

    height: 100%;
  }
`;

export default GlobalStyle;
