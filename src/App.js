import "./index.css";
import { ThemeProvider } from "@mui/material";
import React from "react";

import Header from "./components/header/Header";
import Main from "./components/main";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

export default App;
