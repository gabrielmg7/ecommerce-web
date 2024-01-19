import React from 'react';
import { IconButton, Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

interface AddToCartButtonProps {
    onClick: () => void;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({ onClick }) => {
    return (
        <IconButton color="primary" onClick={onClick} aria-label="Adicionar ao Carrinho">
            <Badge badgeContent={1} color="error">
                <AddShoppingCartIcon />
            </Badge>
        </IconButton>
    );
};

export default AddToCartButton;
