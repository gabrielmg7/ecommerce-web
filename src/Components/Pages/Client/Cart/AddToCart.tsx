import React from 'react';
import { IconButton, IconButtonProps } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface AddToCartButtonProps extends IconButtonProps {
  addToCart: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ addToCart, ...props }) => {


  return (
    <IconButton color="primary" onClick={addToCart} {...props}>
      <AddShoppingCartIcon />
    </IconButton>
  );
};

export default AddToCartButton;
