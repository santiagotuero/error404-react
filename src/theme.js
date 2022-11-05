import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: ["Space Mono", "Inconsolata"].join(","),
  },
  palette: {
    primary: {
      main: "#333",
    },
    secondary: {
      main: "#bdbdbd",
    },
  },
});
