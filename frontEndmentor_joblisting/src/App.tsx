import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Header } from "./components/header";
import { Layout } from "./components/Layout";
import { createGlobalStyle } from "styled-components";
import { JobList } from "./components/JobList";
import { MainPage } from "./MainPage";
import { JobStore } from "./JobStore";
const GlobalStyles = createGlobalStyle`
  html {
    --color-text: black;
    --color-background: rgb(238, 246, 246);
    --color-primary: rebeccapurple;
  }
`;

function App() {
  const store = JobStore;
  return (
    <div className="App">
      <GlobalStyles />
      <MainPage store={store} />
    </div>
  );
}

export default App;
