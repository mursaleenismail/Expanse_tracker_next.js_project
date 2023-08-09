"use client"
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { useAppDispatch } from '../store/hooks';
import { deleteTransaction } from '../slices/userSlice';
import { Box, List, ListItem, ListItemText, Button } from '@mui/material';

export const TransactionList: React.FC = () => {
  const transactions = useSelector((state: RootState) => state.user.transactions);
  const dispatch = useAppDispatch();

  const listItemStyles = {
    backgroundColor: '#fff',
    boxShadow: 'var(--box-shadow)',
    color: '#333',
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    padding: '5px',
    margin: '10px ',
    borderRadius: '5px', 
  };

  const plusStyles = {
    ...listItemStyles,
    borderRight: '5px solid #2ecc71',
  };

  const minusStyles = {
    ...listItemStyles,
    borderRight: '5px solid #c0392b',
  };

  const deleteButtonStyles = {
    cursor: 'pointer',
    backgroundColor: '#e74c3c',
    border: '0',
    color: '#fff',
    fontSize: '20px',
    lineHeight: '20px',
    padding: '2px 5px',
    position: 'absolute',
    top: '50%',
    left: 0,
    transform: 'translate(-100%, -50%)',
    opacity: 0,
    transition: 'opacity 0.9s ease',
    
  };
  const listItemHoverStyles = {
    '&:hover .delete-btn': {
      opacity: 5,
    },
  };

  return (
    <Box>
      <h2 >History</h2> 
      <hr/>
      <List className="list" sx={{ listStyleType: 'none', padding: 0, marginBottom: '40px' }}>
        {transactions.map((transaction) => (
          <ListItem
            key={transaction.id}
            className={transaction.amount < 0 ? 'minus' : 'plus'}
            sx={{ ...transaction.amount < 0 ? minusStyles : plusStyles, ...listItemHoverStyles }}
          >
            <ListItemText primary={transaction.text} secondary={`$${transaction.amount.toFixed(2)}`} />
            <Button
              className="delete-btn"
              onClick={() => dispatch(deleteTransaction(transaction.id))}
              sx={deleteButtonStyles}
            >
              x
            </Button>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
