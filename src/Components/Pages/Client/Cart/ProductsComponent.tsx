import React from 'react';
import { Avatar, Grid, Typography } from '@mui/material';
import { useProduct } from '../../../../contexts/ProductContext';
import { useCartContext } from '../../../../contexts/CartContext';

const ProductsComponent = () => {
    const { carrinho } = useCartContext();
    const { produtos } = useProduct();

    return (
        <Grid container direction="column" justifyContent="center" alignItems="center">
            {carrinho?.itens.map(item => {
                const produto = produtos?.find(prod => prod.id === item.idProduto);
                if (!produto) return null; // Se o produto não for encontrado, retornar null

                return (
                    <Grid key={item.id} container direction="row" bgcolor="background.card" alignItems="center">
                        <Grid item>
                            <Avatar sx={{ width: 100, height: 100 }} variant="rounded" />
                        </Grid>
                        <Grid item marginLeft={1}>
                            <Typography variant="body1" color="text.primary">
                                {produto.nome} {/* Exibindo o nome do produto */}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Quantidade: {item.quantidade} {/* Exibindo a quantidade */}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Preço Unitário: {item.valorUnitario} {/* Exibindo o preço unitário */}
                            </Typography>
                        </Grid>
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default ProductsComponent;
