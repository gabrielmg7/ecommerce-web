import { Card, CardActionArea, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <Link to="/" style={{ textDecoration: 'none' }}>
            <Card>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image="https://source.unsplash.com/random?wallapers"
                        alt="Banner Promocional"
                    />
                </CardActionArea>
            </Card>
        </Link>
    );
};

export default Banner;