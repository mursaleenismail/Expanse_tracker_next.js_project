"use client"
// import React, { useState } from 'react';
// import { useAppDispatch } from '../store/hooks';
// import { addTransaction } from '../slices/userSlice';
// import { Box, Button, TextField, Typography } from '@mui/material';

// export const AddTransaction: React.FC = () => {
//   const [text, setText] = useState('');
//   const [amount, setAmount] = useState(0);
//   const dispatch = useAppDispatch();

//   const onSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const newTransaction = { id: Math.floor(Math.random() * 900000), text: text, amount: amount };
//     dispatch(addTransaction(newTransaction));
//     setText('');
//     setAmount(0);
//   };



//   return (
//     <Box sx={{ p: 1 }}>
//       <Typography variant="h5">Add new transaction</Typography>
//       <hr/>

//       <form id="form" onSubmit={onSubmit}>
//         <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//          <b><p>Text</p></b> 

//          <TextField
//   type="text"
//   value={text}
//   onChange={(e) => {
//     const inputValue = e.target.value;

//     // Use type assertion to access inputType property
//     const inputType = (e.nativeEvent as InputEvent).inputType;

//     //  use the backspace key (inputType 'deleteContentBackward') and allow it
//     if (inputType === 'deleteContentBackward') {
//       setText(inputValue);
//     } else {
//       // Use regex to allow only alphabetic characters
//       const cleanedInput = inputValue.replace(/[^a-zA-Z]/g, '');

//       setText(cleanedInput);
//     }
//   }}
// />
//          <b> <p> Amount <br />
//           (negative - expense, positive - income)</p> </b>
//           <TextField
//             type="number"
//             value={amount}
//             onChange={(e) => setAmount(Number(e.target.value))}
//             placeholder="Enter amount..."
//             variant="outlined"
//             sx={{ fontSize: '16px', margin: '-10px'}}
//           />
//           <Button variant="contained" color="primary" type="submit" sx={{ cursor: 'pointer', backgroundColor: '#9c88ff', boxShadow: 'var(--box-shadow)', color: '#fff', border: 0, fontSize: '16px', margin: '15px 0 40px', padding: '10px', width: '100%' }}>
//             Add transaction
//           </Button>
//         </Box>
//       </form>
//     </Box>
//   );
// };
import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { addTransaction } from '../slices/userSlice';
import { Box, Button, TextField, Typography } from '@mui/material';

export const AddTransaction: React.FC = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const [textError, setTextError] = useState('');
  const [amountError, setAmountError] = useState('');
  const dispatch = useAppDispatch();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (text.trim() === '') {
      setTextError('This field is required');
      return;
    }

    if (amount === 0) {
      setAmountError('This field is required');
      return;
    }

    const newTransaction = { id: Math.floor(Math.random() * 900000), text: text, amount: amount };
    dispatch(addTransaction(newTransaction));
    setText('');
    setAmount(0);
    setTextError('');
    setAmountError('');
  };

  return (
    <Box sx={{ p: 1 }}>
      <Typography variant="h5">Add new transaction</Typography>
      <hr/>

      <form id="form" onSubmit={onSubmit}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <b><p>Text</p></b>
          <TextField
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
              setTextError('');
            }}
            variant="outlined"
            error={textError !== ''}
            helperText={textError}
          />
          <b><p>Amount <br />
            (negative - expense, positive - income)</p></b>
          <TextField
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(Number(e.target.value));
              setAmountError('');
            }}
            placeholder="Enter amount..."
            variant="outlined"
            sx={{ fontSize: '16px', margin: '-10px'}}
            error={amountError !== ''}
            helperText={amountError}
          />
          <Button variant="contained" color="primary" type="submit" sx={{ cursor: 'pointer', backgroundColor: '#9c88ff', boxShadow: 'var(--box-shadow)', color: '#fff', border: 0, fontSize: '16px', margin: '15px 0 40px', padding: '10px', width: '100%' }}>
            Add transaction
          </Button>
        </Box>
      </form>
    </Box>
  );
};
