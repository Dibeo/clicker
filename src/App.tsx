import React from "react";
import PrimarySearchAppBar from "./App-bar/app-bar";
import "./App.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import MainContent from "./Main/main";
import theme from "./theme";
import Draw from "./Buildings/buildings";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <PrimarySearchAppBar />
        </header>
        <Draw />
        <article className="App-main-content">
          <MainContent />
        </article>
      </div>
    </ThemeProvider>
  );
}

export default App;
