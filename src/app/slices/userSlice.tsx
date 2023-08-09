"use client"
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Transaction {
  id: number;
  text: string;
  amount: number;
}

interface UserState {
  transactions: Transaction[];
  income: number;
  expense: number;
}
const initialState: UserState = {
transactions: [
    // { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 500 },
    // { id: 3, text: "Book", amount: -10 },
    // { id: 4, text: "Camera", amount: 150 },
  ],
  income: 0,
  expense: 0,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addTransaction: (state, action: PayloadAction<Transaction>) => {
      const { text, amount } = action.payload;
      const newTransaction = { id: state.transactions.length + 1, text, amount };

      state.transactions.push(newTransaction);

      if (amount > 0) {
        state.income += amount;
      } else {
        state.expense -= amount;
      }
    },

    deleteTransaction: (state, action: PayloadAction<number>) => {
      const deletedTransaction = state.transactions.find(item => item.id === action.payload);
      if (deletedTransaction) {
        if (deletedTransaction.amount > 0) {
          state.income -= deletedTransaction.amount;
        } else {
          state.expense += deletedTransaction.amount;
        }
        state.transactions = state.transactions.filter(item => item.id !== action.payload);
      }
    },
  },
});


 export const { addTransaction, deleteTransaction } = userSlice.actions;
 export default userSlice.reducer;
