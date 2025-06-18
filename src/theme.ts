// src/theme.ts
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00274d",
    },
    background: {
      default: "#f8f9fa",
    },
    text: {
      primary: "#000000",
      secondary: "#4a4a4a",
    },
  },
  typography: {
    fontFamily: `"Roboto", "Helvetica", "Arial", sans-serif`,
    h5: {
      fontWeight: 500,
      letterSpacing: "0.5px",
    },
    button: {
      textTransform: "none",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
          padding: "10px 20px",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#ffffff",
          borderRadius: "6px",
        },
      },
    },
  },
});

export default theme;
