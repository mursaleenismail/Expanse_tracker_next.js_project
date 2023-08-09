"use client"
import React from 'react';
import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';




const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: '-5px',
    paddingTop:'28px',
    paddingBottom:'28px'
  },
  
  },
);

export default function Page() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container maxWidth="sm" className={classes.container}>
        <Grid container spacing={-1}>
          <Grid item xs={12}>
            <Balance />
          </Grid>
          <Grid item xs={12}>
            <IncomeExpenses />
          </Grid>
          <Grid item xs={12}>
            <TransactionList />
          </Grid>
          <Grid item xs={12}>
            <AddTransaction />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
