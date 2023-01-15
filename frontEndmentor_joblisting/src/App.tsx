import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

import { createGlobalStyle } from "styled-components";
import { Background } from "./components/background";
const GlobalStyles = createGlobalStyle`
  html {
    --color-text: black;
    --color-background: white;
    --color-primary: rebeccapurple;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Background />
    </div>
  );
}

export default App;
