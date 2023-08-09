"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";

const formatAmount = (amount: number): string => {
  if (amount >= 1000000000000) {
    return (amount / 1000000000000).toFixed(1) + "T";
  } else if (amount >= 1000000000) {
    return (amount / 1000000000).toFixed(1) + "B";
  } else if (amount >= 1000000) {
    return (amount / 1000000).toFixed(1) + "M";
  } else if (amount >= 1000) {
    return (amount / 1000).toFixed(1) + "K";
  }
  return amount.toFixed(2);
};

export const IncomeExpenses = () => {
  const { transactions } = useSelector((state: RootState) => state.user);

  const incomeTransactions = transactions.filter(transaction => transaction.amount > 0);
  const expenseTransactions = transactions.filter(transaction => transaction.amount < 0);

  const totalIncome = incomeTransactions.reduce((total, transaction) => total + transaction.amount, 0);
  const totalExpense = expenseTransactions.reduce((total, transaction) => total + transaction.amount, 0);

  const theme = createTheme({
    typography: {
      myVariant: {
        fontSize: "25px", 
        letterSpacing: "1px",
        margin: "10px 0px", 
      },
    },
  });

//   return (
//     <ThemeProvider theme={theme}>
//       <Box className="inc-exp-container" sx={{
//         backgroundColor: "#f4f4f4",
//         padding: "20px",
//         borderRadius: "10px",
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundImage: "url('your-background-image-url')",
//       }}>
//         <Box>
//           <Typography variant="h5">
//             INCOME
//           </Typography>
//           <Typography variant="myVariant" component="p" sx={{ color: "#2ecc71" }}>
//             +${totalIncome.toFixed(2)}
//           </Typography>
//         </Box>
//         <Box>
//           <Typography variant="h5" >
//             EXPENSE
//           </Typography>
//           <Typography variant="myVariant" component="p" sx={{ color: "#c0392b" }}>
//             -${totalExpense.toFixed(2)}
//           </Typography>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// };

return (
  <ThemeProvider theme={theme}>
    <Box className="inc-exp-container" sx={{
      backgroundColor: "#f4f4f4",
      padding: "20px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundSize: "cover",
      backgroundPosition: "center",
      // backgroundImage: "url('your-background-image-url')",
    }}>


<Box>
          <Typography variant="h5">
            INCOME
          </Typography>
          <Typography variant="myVariant" component="p" sx={{ color: "#2ecc71" }}>
            +${formatAmount(totalIncome)}
          </Typography>
        </Box>
        
        <Box>
          <Typography variant="h5" >
            EXPENSE
          </Typography>
          <Typography variant="myVariant" component="p" sx={{ color: "#c0392b" }}>
          -${formatAmount(Math.abs(totalExpense))}
          </Typography>
        </Box>
        </Box>



  </ThemeProvider>
);
};

