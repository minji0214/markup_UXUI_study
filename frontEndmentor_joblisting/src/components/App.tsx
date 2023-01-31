import "../css/App.css";
import { createGlobalStyle } from "styled-components";
import { MainPage } from "./MainPage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const GlobalStyles = createGlobalStyle`
  html {
    --color-text: black;
    --color-background: rgb(238, 246, 246);
    --color-primary: rebeccapurple;
  }
`;

function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={true} />
        <MainPage />
      </QueryClientProvider>
    </div>
  );
}

export default App;
