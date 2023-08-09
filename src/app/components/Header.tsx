"use client"
import { ThemeProvider, Typography, createTheme, Box } from "@mui/material";
import React from "react";

declare module "@mui/material/styles" {
  interface TypographyOptions {
    myVariant?: React.CSSProperties;
  }
}

const MyTypography = (props: any) => (
  <Typography variant="myVariant" {...props} />
);
console.log("Mursalin");

export const Header = () => {
  const theme = createTheme({
    typography: {
      myVariant: {
        fontSize: "2.2em",
        textAlign: "center", 
      },
    },
  });


  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", 
          alignItems: "center", 
        margin:"20px",
          height: "5vh", 
          minWidth:"40%",
          minheight:"50%",
        }}
        
      >
        <MyTypography variant="myVariant">Expense Tracker</MyTypography>
      </Box>
    </ThemeProvider>
  );
};
