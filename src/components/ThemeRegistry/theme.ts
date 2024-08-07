import { Roboto } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});
const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    // primary: {
    //   light: '#757ce8',
    //   dark: '#002884',
    //   main: '#BEDC74',
    //   contrastText: '#fff',
    // },
  },
  components: {
    MuiButton: {
      // styleOverrides: {
      //   root: {
      //     borderRadius: '12px',
      //   },
      // },
    },
  },
});

export default theme;