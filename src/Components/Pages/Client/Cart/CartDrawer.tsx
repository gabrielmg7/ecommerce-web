import React, { useState } from 'react';
import { IconButton, Badge, Drawer, Card, CardContent, Typography, Grid, 
  Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QuantityButton from './QuantityButton';
import { ICarrinho } from '../../../../Types/restAPI/ICarrinho';
import { useThemeContext } from '../../../../Themes/ThemeProviderWrapper';

interface CartItem {
  nome: string;
  quantidade: number;
  preco: number;
}

const Cart: React.FC<ICarrinho> = ({ quantidade }) => {
  const { theme } = useThemeContext();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [itemToRemoveIndex, setItemToRemoveIndex] = useState<number | null>(null);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const incrementCartItem = (index: number) => {
    const newItems = [...cartItems];
    newItems[index].quantidade += 1;
    setCartItems(newItems);
  };

  const decrementCartItem = (index: number) => {
    const newItems = [...cartItems];
    if (newItems[index].quantidade > 1) {
      newItems[index].quantidade -= 1;
      setCartItems(newItems);
    } else {
      setItemToRemoveIndex(index);
    }
  };

  const confirmRemoveItem = (index: number) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
    setItemToRemoveIndex(null);
  };

  const handleCancelRemove = () => {
    setItemToRemoveIndex(null);
  };

  const addToCart = (nome: string, preco: number) => {
    const newItem: CartItem = { nome, quantidade: 1, preco };
    setCartItems([...cartItems, newItem]);
  };

  return (
    <div>
      <IconButton style={{ color: theme.palette.text.primary }} onClick={toggleCart}>
        <Badge badgeContent={quantidade} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}>
        <div style={{ width: 300 }}>
          <CardContent>
            {cartItems.map((item, index) => (
              <Card key={index} style={{ marginBottom: 10 }}>
                <CardContent>
                  <Grid container direction="row" justifyContent={"end"}> {/* Preço ====================================*/}
                    <Typography variant="body1">{item.nome}</Typography>
                  </Grid>
                  <Grid container direction={"row"} justifyContent={"end"}>
                    <Typography variant="body2">R$ {item.preco.toFixed(2)}</Typography>
                  </Grid>

                  <QuantityButton
                      quantidade={item.quantidade}
                      onIncrement={() => incrementCartItem(index)}
                      onDecrement={() => decrementCartItem(index)}
                    />
                </CardContent>
              </Card>
            ))}
          </CardContent>
          <div>
            <IconButton onClick={() => addToCart(`Item ${cartItems.length + 1}`, 10)}>
              <Typography variant="body2">Adicionar Item</Typography>
            </IconButton>
          </div>
        </div>
      </Drawer>

      <Dialog open={itemToRemoveIndex !== null} onClose={handleCancelRemove}>
        <DialogTitle>Remover Item</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Tem certeza que deseja remover este item do carrinho?</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelRemove}>Cancelar</Button>
          <Button onClick={() => confirmRemoveItem(itemToRemoveIndex as number)} color="error">Remover</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Cart;
