import React from 'react';
import { Box, Divider, Grid, Link, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
    return (
        <Box py={3}>
            <Box mt={2} mb={2}>
                <Divider orientation="horizontal" />
            </Box>
            <Grid container justifyContent="center" alignItems="center" spacing={50}>
                {/* Grid da Logo */}
                <Grid item>
                    <Link component={RouterLink} to="/" color="inherit" underline="none">
                        <img src="src\assets\img\logo-light.png" alt="Logo" style={{ maxWidth: '120px' }} />
                    </Link>
                </Grid>

                {/* Grid dos Links */}
                <Grid item>
                    <Grid container direction="column">
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
            <Box mt={2} mb={2}>
                <Divider orientation="horizontal" />
            </Box>
        </Box>
    );
};

export default Footer;
