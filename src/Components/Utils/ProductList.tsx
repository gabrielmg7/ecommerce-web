// ProductList.tsx
import React, { useState } from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, ButtonGroup, Skeleton } from '@mui/material';
import { useProduct } from '../../Contexts/ProductContext';
import { IProduct } from '../../Types/fakeAPI/type';
import AddToCartButton from '../Pages/Client/Cart/AddToCart';

// TODO: Lógica para adicionar o item ao carrinho aqui
const addToCart = () => {
    console.log('Item adicionado ao carrinho!');
};


//================= | Skeleton | ================= //
const renderSkeleton = () => (
    <Grid container spacing={2}>
        {[1, 2, 3, 4].map((index) => (
            <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                <Card>
                    <Skeleton variant="rounded" height={230} />
                    <CardContent>
                        <Skeleton variant="text" width="50%" />
                        <Skeleton variant="text" width="50%" />
                        <Skeleton variant="text" width="50%" />
                        <Skeleton variant="text" width="50%" />
                        <Skeleton variant="text" width="50%" />
                        <Skeleton variant="text" width="50%" />
                    </CardContent>
                </Card>
            </Grid>
        ))}
    </Grid>
);

const ProductList: React.FC = () => {
    const { produtos } = useProduct();
    const [cartItems, setCartItems] = useState<string[]>(['']);

    if (!produtos) {
        return renderSkeleton();
    }
    return (
        //================= | container principal | ================= //
        <Grid container spacing={2} mt="1vh" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {produtos.map((produto: IProduct) => (
                //================= | container de cada card | ================= //
                <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3} style={{ flexGrow: 1 }}>
                    {/*================= | card | ================= */}
                    <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        {/*================= | imagem do produto | ================= */}
                        <CardMedia component="img" height="230" image={produto.image} alt={produto.title} style={{ objectFit: 'cover' }} />
                        {/*================= | conteúdo do card | ================= */}
                        <CardContent style={{ flex: 1 }}>
                            <Typography id="productTitle" variant="h6" color={"text.primary"}>
                                {produto.title}
                            </Typography>
                            <Typography id="productCategory" variant="subtitle2" color="text.secondary">
                                {produto.category}
                            </Typography>
                        </CardContent>
                        {/*================= | preço e botões | ================= */}
                        <CardContent>
                            <Grid container justifyContent="space-between">
                                <Grid item>
                                    <Typography id="productPrice" variant="h6" color="primary">
                                        R$ {produto.price.toFixed(2)}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                        <AddToCartButton onClick={addToCart} />
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>



    );
};

export default ProductList;
