/* eslint-disable @typescript-eslint/no-unused-vars */
// ProductList.tsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid, Button, ButtonGroup, Skeleton } from '@mui/material';
import { useProduct } from '../../Contexts/ProductContext';
import { IProduct } from '../../Types/fakeAPI/type';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

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

    if (!produtos) {
        return renderSkeleton();
    }

    return (
        <Grid container spacing={2} mt="1vh" style={{ display: 'flex', flexWrap: 'wrap' }}>
            {produtos.map((produto: IProduct) => (
                <Grid item key={produto.id} xs={12} sm={6} md={4} lg={3} style={{ flexGrow: 1 }}>
                    <Card style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            height="230"
                            image={produto.image}
                            alt={produto.title}
                            style={{ objectFit: 'cover' }}
                        />
                        <CardContent style={{ flex: 1 }}>
                            <Typography id="productTitle" style={{ display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden', WebkitLineClamp: 3, textOverflow: 'ellipsis' }} variant="h6" component="div">
                                {produto.title}
                            </Typography>
                            <Typography id="productCategory" variant="subtitle1" color="text.secondary">
                                {produto.category}
                            </Typography>
                            <Grid container justifyContent="space-between" direction={'row'} alignItems={'flex-end'}>
                                <Grid item>
                                    <Typography id="productPrice" variant="h6" color="primary">
                                        R$ {produto.price.toFixed(2)}
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <ButtonGroup size="small" aria-label="small button group">
                                        {buttons}
                                    </ButtonGroup>
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
