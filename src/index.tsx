import React from 'react';
import ReactDOM from 'react-dom/client';

import { ThemeProvider, createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { lightMode } from "./theme";

import { RouterProvider } from "react-router-dom";
import router from "routes/Router";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  body {
    width: 100vw;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: linear-gradient(135deg,#9195a2,#272839);

    overflow-x: hidden;
  }
`

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightMode}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
