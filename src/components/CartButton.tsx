/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from 'react';
import { IconButton, Badge, Drawer, Card, CardContent, Typography } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

interface CartIconProps {
  itemCount: number;
}

const CartButton: React.FC<CartIconProps> = ({ itemCount }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>(['Item 1', 'Item 2', 'Item 3']); // Seus itens do carrinho

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <div>
      <IconButton color="inherit" onClick={toggleCart}>
        <Badge badgeContent={itemCount} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}>
        <div style={{ width: 300 }}>
          <CardContent>
            {cartItems.map((item, index) => (
              <Card key={index} style={{ marginBottom: 10 }}>
                <CardContent>
                  <Typography variant="body1">{item}</Typography>
                </CardContent>
              </Card>
            ))}
          </CardContent>
        </div>
      </Drawer>
    </div>
  );
};

export default CartButton;
