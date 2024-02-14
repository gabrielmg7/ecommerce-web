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

                    <Grid item direction="column" justifyContent="center" alignItems={'center'}>
                        <Logo logo='Logo1' width='150px' height='150px' />
                    </Grid>

                    <Grid item>

                        <Grid item direction="column" justifyContent="center" alignItems={'center'}>
                            <Typography variant="subtitle2">
                                <Link href="/" color="text.primary" underline="hover">
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
            </AnimatedGrid>
            <Box mt={1} mb={1}>
                <Divider orientation="horizontal" />
            </Box>
        </Box>
    );
};

export default Footer;
