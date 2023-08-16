import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  typography: {
    h5: {
      fontSize: 25,
    },
    h6: {
      fontSize: 23,
    },
    body1: {
      fontSize: 18,
    },
    fontFamily: ["Vazirmatn", "Roboto", "Arial", "sans-serif"].join(","),
  },
});
