import React from 'react';
import { IconButton, Typography, Grid } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface QuantityButtonProps {
  quantidade: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({ quantidade, onIncrement, onDecrement }) => {
  return (
    <Grid container direction={"row"} alignContent={"end"} alignItems="center" justifyContent={"flex-end"} >
      <IconButton onClick={onDecrement} size='small'>
        <RemoveIcon />
      </IconButton>
      <Typography variant="body2">{quantidade}</Typography>
      <IconButton onClick={onIncrement} size='small'>
        <AddIcon />
      </IconButton>
    </Grid>
  );
};

export default QuantityButton;
