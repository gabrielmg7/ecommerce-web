/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMediaQuery, AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';

const MenuBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 1 }}>
                        NomeDaMarca
                    </Typography>
                    {isSmallScreen ? (
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <>
                            <Button color="inherit" component={Link} to="/listar-clientes">
                                Clientes
                            </Button>
                            <Button color="inherit" component={Link} to="/cadastrar-produto">
                                Cadastrar Produto
                            </Button>
                            <Button color="inherit" component={Link} to="/listar-produtos">
                                Loja
                            </Button>
                            <Button color="inherit" component={Link} to="/logar-cliente">
                                Entrar
                            </Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    <ListItem button component={Link} to="/cadastrar-cliente" onClick={toggleDrawer(false)}>
                        <ListItemText primary="Cadastrar Cliente" />
                    </ListItem>
                    <ListItem button component={Link} to="/listar-clientes" onClick={toggleDrawer(false)}>
                        <ListItemText primary="Clientes" />
                    </ListItem>
                    <ListItem button component={Link} to="/cadastrar-produto" onClick={toggleDrawer(false)}>
                        <ListItemText primary="Cadastrar Produto" />
                    </ListItem>
                    <ListItem button component={Link} to="/listar-produtos" onClick={toggleDrawer(false)}>
                        <ListItemText primary="Loja" />
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
};

export default MenuBar;
