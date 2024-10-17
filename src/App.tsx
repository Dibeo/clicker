import React from "react";
import "./App.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import MainContent from "./Main/main";
import theme from "./theme";
import NavigationBar from "./App-bar/app-bar";
import Draw from "./Buildings/drawer";


const App: React.FC = () => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <NavigationBar expanded={expanded} onToggle={handleToggle}/>
        </header>
        <Draw expanded={expanded}/>
        <article className="App-main-content">
          <MainContent />
        </article>
      </div>
    </ThemeProvider>
  );
}

export default App;
