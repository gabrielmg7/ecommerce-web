/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { Container, Grid, Typography, Breadcrumbs, Link, Divider } from '@mui/material';
import MenuBar from '../Utils/MenuBar/MenuBar';
import Footer from '../Utils/Footer';
import { useThemeContext } from '../../Themes/ThemeProviderWrapper';

const Sobre = () => {
    const { theme } = useThemeContext();

    return (
        <Container color={theme.palette.background.paper}>
            <MenuBar/>
            <Grid container spacing={3} mt={2} mb={2}>
                <Grid item xs={12} xl={{ offset: 1, span: 10 } as any}>
                    <div className="content">
                        <Typography variant="h3" className="title-page">
                            Quem Somos
                        </Typography>
                        <div className="breadcrumb">
                            <span>Você está em: </span>
                            <Breadcrumbs separator="›" aria-label="breadcrumb">
                                <Link href="/">Home</Link>
                                <Link href="/">OnlineShopping</Link>
                                <Link href="/sobre">
                                    Quem Somos
                                </Link>
                            </Breadcrumbs>
                        </div>
                    </div>
                </Grid>
            </Grid>
            <Divider />
            <Grid mt={2}>
                <Typography variant="body1" className="about-page">
                    The standard Lorem Ipsum passage, used since the 1500s
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Typography>
            </Grid>
            <Footer/>
        </Container>
    );
};

export default Sobre;
