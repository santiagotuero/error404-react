import { Grid, ThemeProvider } from "@mui/material";
import React from "react";

import Header from "./components/header/Header";
import { theme } from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid className="App">
        <Header />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
