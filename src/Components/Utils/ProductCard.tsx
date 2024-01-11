import { Card, CardMedia, CardContent, Typography, CardActions, Button } from "@mui/material";

export interface ProductCardProps {
    id?: string;
    nome: string;
    descricao: string;
    valor: number;
    imageUrl: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ nome, descricao, valor, imageUrl }) => {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia sx={{ height: 140 }} image={imageUrl} title="Product Image" />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {nome}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {descricao}
                </Typography>
                <Typography variant="h6" color="green">
                    {valor}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Detalhes</Button>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
