// ProductList.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, ButtonGroup, Skeleton } from '@mui/material';
import { useProduct } from '../../Contexts/ProductContext';
import { IProduct } from '../../Types/fakeAPI/type';

const buttons = [
    <Button key="one">Ver</Button>,
    <Button key="two">Salvar</Button>,

];

const ProductList: React.FC = () => {
    const { produtos } = useProduct();

    const renderSkeleton = () => (
        <Grid container spacing={2}>
            {[1, 2, 3, 4].map((index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <Skeleton variant="rounded" height={230} />
                        <CardContent>
                            <Skeleton variant="text" width="80%" />
                            <Skeleton variant="text" width="60%" />
                            <Skeleton variant="text" width="40%" />
                            <Skeleton variant="text" width="80%" />
                            <Skeleton variant="text" width="60%" />
                            <Skeleton variant="text" width="40%" />
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );

    if (!produtos) {
        return renderSkeleton();
    }

    return (
        <Grid container spacing={2}>
            {produtos.map((produto: IProduct) => (
                <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="230"
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
                            <Grid container justifyContent="space-between" alignItems="center" mt={2}>
                                <Typography variant="h6" color="primary">
                                    R$ {produto.price.toFixed(2)}
                                </Typography>
                                <ButtonGroup size="small" aria-label="small button group">
                                    {buttons}
                                </ButtonGroup>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default ProductList;
