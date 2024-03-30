import React, { useState } from 'react';
import {
  IconButton, Badge, Drawer, Card, CardContent, Typography, Grid,
  Dialog, DialogTitle, DialogContent, DialogActions, Button,
  Box
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import QuantityButton from './QuantityButton';
import { ICarrinho } from '../../../../Types/restAPI/ICarrinho';
import { useThemeContext } from '../../../../Themes/ThemeProviderWrapper';
import { Link } from 'react-router-dom';

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
    <Box>
      <IconButton style={{ color: theme.palette.text.primary }} onClick={toggleCart}>
        <Badge badgeContent={quantidade} color="error">
          <ShoppingCartIcon />
        </Badge>
      </IconButton>

      <Drawer anchor="right" open={isCartOpen} onClose={toggleCart}>

          <Box style={{ width: 300 }}>

            <CardContent>
              {cartItems.map((item, index) => (
                <Card key={index} style={{ marginBottom: 10 }}>
                  
                  <CardContent>
                    <Grid container direction={"row"} justifyContent={"end"}>
                      <Box alignSelf={"center"} paddingInline={1}>
                        <QuantityButton
                          quantidade={item.quantidade}
                          onIncrement={() => incrementCartItem(index)}
                          onDecrement={() => decrementCartItem(index)}
                        />
                      </Box>
                      <Box> {/* Nome ====================================*/}
                        <Typography variant="body1">
                          {item.nome}
                        </Typography>
                        <Typography variant="body2">
                          R$ {item.preco.toFixed(2)}
                        </Typography>
                      </Box>
                    </Grid>
                  </CardContent>
                </Card>
              ))}
            </CardContent>

            <Box>
              <IconButton onClick={() => addToCart(`Item ${cartItems.length + 1}`, 10)}>
                <Typography variant="body2">
                  Adicionar Item
                </Typography>
              </IconButton>
            </Box>

            {/* Botões  */}
            <Grid container
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-evenly"}
              marginBottom={2}
              width="100%"
              textAlign="center"
            >
              {cartItems.length > 0 && (
                <Button component={Link} to="/cliente/checkout" variant="outlined">
                  Checkout
                </Button>
              )}
              <Button component={Link} to="/cliente/carrinho" variant="outlined" onClick={toggleCart} color={"primary"}>
                Ver Carrinho
              </Button>
            </Grid>
          </Box>

      </Drawer>


      <Dialog open={itemToRemoveIndex !== null} onClose={handleCancelRemove}> {/* Caixa de diálogo  */}
        <DialogTitle>
          Remover Item
        </DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Tem certeza que deseja remover este item do carrinho?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCancelRemove}>
            Cancelar
          </Button>
          <Button onClick={() => confirmRemoveItem(itemToRemoveIndex as number)} color="error">
            Remover
          </Button>
        </DialogActions>
      </Dialog>


    </Box>
  );
};

export default Cart;
