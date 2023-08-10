"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Box, Typography, createTheme, ThemeProvider } from "@mui/material";

const formatAmount = (amount: number): string => {
  if (amount >= 1000000000000) {
    return (amount / 1000000000000).toFixed(0) + "T";
  } else if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(0) + "B";
  } else if (amount >= 1000000) {
    return (amount / 1000000).toFixed(0) + "M";
  } else if (amount >= 1000) {
    return (amount / 1000).toFixed(0) + "K";
  }
  return amount.toFixed(2);
};

export const Balance = () => {
  const { transactions } = useSelector((state: RootState) => state.user);

  const totalBalance = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  const theme = createTheme({
    typography: {
      myVariant: {
        fontSize: "25px",
        letterSpacing: "1px",
        margin: "10px 0px",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ m: 0 }}
      >
        <div>
        <Typography variant="h5">
        YOUR  BALANCE
        </Typography>
        <Typography variant="h3" component="h1">
          ${formatAmount(Math.abs(totalBalance))}
        </Typography>
        </div>


       









      </Box>
    </ThemeProvider>
  );
};
