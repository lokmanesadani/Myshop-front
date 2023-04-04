import { createTheme } from "@mui/material";
import "typeface-cairo";
import "typeface-lora";
export default createTheme({
  palette: {
    primary: {
      main: "#006FBA",
      dark: "#003964",
    },
    secondary: {
      main: "#FFB71C",
      dark: "#FF7F00",
    },
    error: {
      main: "#FF5050",
    },
  },
  typography: {
    fontFamily: "Cairo",
    subtitle1: {
      fontSize: "14px",
    },
    subtitle2: {
      fontFamily: "Lora",
    },
    button: {
      textTransform: "none",
    },
  },
});
const colors = [
  "#ffb71c",
  "#ffdb8e",
  "#ffedc7",
  "#ffffff",
  "#8baec2",
  "#5186a3",
  "#006FBA",
];
