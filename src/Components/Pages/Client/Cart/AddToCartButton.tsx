import React from 'react';
import { IconButton } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const AddToCartButton: React.FC<{ onClick: () => void }> = ({ onClick, ...props }) => {

  return (
    <IconButton color="primary" onClick={onClick} {...props}>
      <AddShoppingCartIcon />
    </IconButton>
  );
};

export default AddToCartButton;
