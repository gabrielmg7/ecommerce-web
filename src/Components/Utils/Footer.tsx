import { Box, Divider, Grid, Link, Typography } from '@mui/material';
import Logo from './Logo/Logo.tsx';
import AnimatedGrid from './AnimatedGrid';

const Footer = () => {
    return (
        <Box>
            <Box mt={1} mb={1}>
                <Divider orientation="horizontal" />
            </Box>
            <AnimatedGrid>
                <Grid container direction="row" justifyContent="space-around" alignItems="center" >
                    <Grid item>
                        <Logo logo='Logo1' width='150px' height='150px' />
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">
                            <Link href="/" color="text.primary" underline="hover">
                                Home
                            </Link>
                        </Typography>
                        <Typography variant="subtitle2">
                            <Link href="/" color="text.primary" underline="hover">
                                Categorias
                            </Link>
                        </Typography>

                        <Typography variant="subtitle2">
                            <Link href="#" color="text.primary" underline="hover">
                                Contato
                            </Link>
                        </Typography>
                        <Typography variant="subtitle2">
                            <Link href="/sobre" color="text.primary" underline="hover">
                                Sobre Nós
                            </Link>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="subtitle2">
                            <Link href="/" color="text.primary" underline="hover">
                                Perfil
                            </Link>
                        </Typography>
                        <Typography variant="subtitle2">
                            <Link href="/carrinho" color="text.primary" underline="hover">
                                Carrinho
                            </Link>
                        </Typography>
                        <Typography variant="subtitle2">
                            <Link href="/pedidos" color="text.primary" underline="hover">
                                Pedidos
                            </Link>
                        </Typography>
                        <Typography variant="subtitle2">
                            <Link href="/" color="text.primary" underline="hover">
                                Carteira
                            </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </AnimatedGrid>
            <Box mt={1} mb={1}>
                <Divider orientation="horizontal" />
            </Box>
        </Box>
    );
};

export default Footer;
