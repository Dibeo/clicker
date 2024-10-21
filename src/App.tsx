/**   App.tsx  */
import React from "react";
import "./App.css";
import ThemeProvider from "@mui/material/styles/ThemeProvider";
import MainContent from "./Content/main";
import theme from "./theme";
import NavigationBar from "./App-bar/app-bar";
import Aside from "./Content/Aside";

const App: React.FC = () => {
  const [expanded, setExpanded] = React.useState<boolean>(false);

  const handleToggle = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header style={{ marginBottom: "3%" }}>
          <NavigationBar expanded={expanded} onToggle={handleToggle} />
        </header>
        <Aside />
        <MainContent />
      </div>
    </ThemeProvider>
  );
};

export default App;
