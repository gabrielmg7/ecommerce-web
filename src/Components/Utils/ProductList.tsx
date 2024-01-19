// ProductList.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { useProduct } from '../../Contexts/ProductContext';
import { IProduct } from '../../Services/fakeApiService';

const ProductList: React.FC = () => {
    const { produtos } = useProduct();

    if (!produtos) {
        return <div>Carregando produtos...</div>;
    }

    return (
        <Grid container spacing={2}>
            {produtos.map((produto : IProduct) => (
                <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={produto.image}
                            alt={produto.title}
                        />
                        <CardContent>
                            <Typography variant="h6" component="div">
                                {produto.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary">
                                {produto.category}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {produto.description}
                            </Typography>
                            <Typography variant="h6" color="primary">
                                R$ {produto.price.toFixed(2)}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
