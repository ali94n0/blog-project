import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      light: "#b2ebf2",
      main: "#00acc1",
      dark: "#006064",
      contrastText: "#fff",
    },
    secondary: {
      light: "#cfd8dc",
      main: "#607d8b",
      dark: "#455a64",
      contrastText: "#000",
    },
  },
});
export { theme };
