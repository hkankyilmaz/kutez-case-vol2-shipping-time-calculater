import Home from "./Pages/Home";
import { ThemeProvider } from "styled-components";
import { theme, GlobalStyle } from "./theme";
import { DataProvider } from "./contexts/dataContext";

function App() {
  return (
    <DataProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Home />
      </ThemeProvider>
    </DataProvider>
  );
}

export default App;
