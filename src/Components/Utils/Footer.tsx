import { Box, Divider, Grid, Link, Typography } from '@mui/material';
import Logo from './Logo';

const Footer = () => {
    return (
        <Box py={3} justifyContent={'space-around'}>
            <Box mt={2} mb={2}>
                <Divider orientation="horizontal" />
            </Box>
            <Grid container justifyContent="center" alignItems="center" spacing={50}>
                <Grid item>
                    <Logo width='150px' height='150px' />
                </Grid>

                <Grid item>
                    <Grid container direction="column">
                        <Grid item>
                            <Typography variant="subtitle2">
                                <Link href="/" color="text.primary"  underline="hover">
                                    Home
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2">
                                <Link href="/listar-produtos" color="text.primary" underline="hover">
                                    Produtos
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2">
                                <Link href="/carrinho" color="text.primary" underline="hover">
                                    Meu Carrinho
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2">
                                <Link href="#" color="text.primary" underline="hover">
                                    Contato
                                </Link>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant="subtitle2">
                                <Link href="/sobre" color="text.primary" underline="hover">
                                    Sobre Nós
                                </Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box mt={2} mb={2}>
                <Divider orientation="horizontal" />
            </Box>
        </Box>
    );
};

export default Footer;
