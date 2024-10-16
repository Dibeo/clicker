import React from "react";
import { createTheme } from "@mui/material";

const theme = createTheme({
    cssVariables: false,
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#FF5733",
          },
          // ...other tokens
        },
      },
      dark: {
        palette: {
          primary: {
            main: "#1976D2",
          },
          // ...other tokens
        },
      },
    },
  });

  export default theme;