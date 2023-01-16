import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/header";
import { createGlobalStyle } from "styled-components";
import { Background } from "./components/background";
const GlobalStyles = createGlobalStyle`
  html {
    --color-text: black;
    --color-background: rgb(238, 246, 246);
    --color-primary: rebeccapurple;
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Background>
        <Header />
      </Background>
    </div>
  );
}

export default App;
