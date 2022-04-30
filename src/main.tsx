import React from "react";
import ReactDOM from "react-dom/client";
import { Helmet } from "react-helmet";

import GlobalStyle from "./globalStyle";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Helmet>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bokor&family=Germania+One&display=swap"
        rel="stylesheet"
      />
    </Helmet>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
