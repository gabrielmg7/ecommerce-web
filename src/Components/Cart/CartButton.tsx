import React, { useState } from 'react';
import { IconButton, Badge, Drawer, Card, CardContent, Typography, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { ICart } from '../../Types/ICart';

const CartButton: React.FC<ICart> = ({ itemCount }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<string[]>(['']); 

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const incrementCartItem = (index: number) => {
    console.log("Quantidade: " + cartItems)
    const newItems = [...cartItems];
    newItems[index] = `Item ${index + 1}`;
    setCartItems(newItems);
  };

  const decrementCartItem = (index: number) => {
    console.log("Quantidade: " + cartItems)
    if (cartItems.length > 1) {
      const newItems = cartItems.filter((_, i) => i !== index);
      setCartItems(newItems);
    }
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
                  <Button
                    variant="contained"
                    color="error"
                    size="small"
                    startIcon={<RemoveIcon />}
                    onClick={() => decrementCartItem(index)}
                  >
                  </Button>
                  <Button
                    variant="contained"
                    color="success"
                    size="small"
                    startIcon={<AddIcon />}
                    onClick={() => incrementCartItem(index)}
                  >
                  </Button>
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
