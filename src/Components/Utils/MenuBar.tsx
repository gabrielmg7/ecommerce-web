/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMediaQuery, AppBar, Toolbar, IconButton, Button, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import theme from '../../Themes/theme';
import { useUser } from '../../Contexts/UserContext';
import { useAdmin } from '../../Contexts/AdminContext';
import CartButton from '../Cart/CartButton';

//Links da rota do Usuário
const ClientMenuBarLinks = () => {
    return (
        <>
            <Button color="inherit" component={Link} to="/">
                Home
            </Button>
            <Button color="inherit" component={Link} to="/listar-produtos">
                Loja
            </Button>
            <Button color="inherit" component={Link} to="/listar-pedidos">
                Meus Pedidos
            </Button>
        </>
    );
};
//Links da rota do Administrador
const AdminMenuBarLinks = () => {
    return (
        <>
            <Button color="inherit" component={Link} to="/admin-listar-prd">
                Cadastrar Produto
            </Button>
            <Button color="inherit" component={Link} to="/admin-dashboard">
                Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/admin-listar-prd">
                Listar Produtos
            </Button>
        </>
    );
};
//Links de Usuário deslogado
const UnauthenticatedMenuBarLinks = () => {
    return (
        <>
            <Button color="inherit" component={Link} to="/unauthenticated/listar-produtos">
                Loja
            </Button><Button color="inherit" component={Link} to="/unauthenticated/logar-cliente">
                Entrar
            </Button>
        </>
    );
};

const MenuBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { user } = useUser();
    const { admin } = useAdmin();

    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open);
    };

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', flexGrow: 2 }}>
                        OnlineShopping
                    </Typography>
                    {isSmallScreen ? (
                        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                            <MenuIcon />
                        </IconButton>
                    ) : (
                        <>
                            {user ? (( //Usuário é um cliente?
                                <ClientMenuBarLinks />
                            )) : null}
                            {admin ? ( // Usuário é um admin?
                                <AdminMenuBarLinks />
                            ) : null}
                            <UnauthenticatedMenuBarLinks />
                        </>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    {user ? (
                        <>
                            <ListItem button component={Link} to="/home" onClick={toggleDrawer(false)}>
                                <ListItemText primary="Home" />
                            </ListItem>
                            <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                                <ListItemText primary="Clientes" />
                            </ListItem>
                            <CartButton itemCount={2} itens={[]}/>
                        </>
                    ) : null}
                    {admin ? (
                        <>
                            <ListItem button component={Link} to="/cadastrar-produto" onClick={toggleDrawer(false)}>
                                <ListItemText primary="Cadastrar Produto" />
                            </ListItem>
                            <ListItem button component={Link} to="/listar-produtos" onClick={toggleDrawer(false)}>
                                <ListItemText primary="Loja" />
                            </ListItem>
                        </>
                    ) : null}
                </List>
            </Drawer>
        </div>
    );
};

export default MenuBar;
