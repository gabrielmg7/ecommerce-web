import { Grid, Paper, Typography, Skeleton } from '@mui/material';
import { useState, useEffect } from 'react';
import productApiService from '../../Services/productApiService';
import { IProduto } from '../../Types/IProduto';

const ProductList: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<IProduto[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await productApiService.getAllProducts();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching products:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    return (
        <Grid container spacing={2}>
            {loading ? (
                // Renderiza o Skeleton enquanto os dados estão sendo carregados
                Array.from({ length: 6 }).map((_, index) => (
                    <Grid item key={index} xs={12} md={4}>
                        <Skeleton variant="rectangular" width="100%" height={200} />
                    </Grid>
                ))
            ) : (
                // Renderiza a lista de produtos quando os dados estão disponíveis
                products.map((product) => (
                    <Grid item key={product.id} xs={12} md={4}>
                        <Paper>
                            <Typography variant="h5">{product.nome}</Typography>
                            <Typography>{product.descricao}</Typography>
                            <Typography>Valor: R$ {product.valor.toFixed(2)}</Typography>
                            <Typography>Quantidade: {product.quantidade}</Typography>
                        </Paper>
                    </Grid>
                ))
            )}
        </Grid>
    );
};

export default ProductList;