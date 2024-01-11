/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Divider, Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <Box py={3}>
                <Grid item sx={{ mt: 2, mb: 2 }}>
                    <Divider orientation="horizontal" />
                </Grid>
                <Grid container justifyContent="space-between" alignItems="center" direction={"row"}>
                    <Grid item direction={"column"} alignContent={"center"}>
                        <Link component={RouterLink} to="/" color="inherit" underline="none">
                            <img src="src\assets\img\logo-light.png" alt="Logo" style={{ maxWidth: '120px' }} />
                        </Link>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Grid container direction="column" spacing={1}>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    <Link href="/" color="inherit" underline="hover">
                                        Home
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    <Link href="/listar-produtos" color="inherit" underline="hover">
                                        Produtos
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    <Link href="/carrinho" color="inherit" underline="hover">
                                        Meu Carrinho
                                    </Link>
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">
                                    <Link href="#" color="inherit" underline="hover">
                                        Contato
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Footer;
