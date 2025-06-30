import React from "react";
import ReactDOM from "react-dom/client";
import { createGlobalStyle } from "styled-components";
import { AppRoutes } from "routes";

const GlobalStyle = createGlobalStyle`
  :root {
    --fonte: "Montserrat", sans-serif;
    --branco: #ffffff;
    --preto: #000000;
    --cinza: #e2e2e2;
  }

  body {
    margin: 0;
    font-family: var(--fonte);
    background-color: var(--branco);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  /* reset.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  height: 100%;
  font-family: sans-serif;
  background-color: #fff;
  color: #000;
}

button, input, textarea, select {
  font: inherit;
  border: none;
  background: none;
  outline: none;
}

a {
  color: inherit;
  text-decoration: none;
}

ul, ol {
  list-style: none;
}

`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>
);
