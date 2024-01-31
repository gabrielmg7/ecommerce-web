/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMediaQuery, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useUser } from '../../../Contexts/UserContext';
import CartButton from '../../Cart/CartButton';
import { AdminMenuBarLinks } from './Links/AdminMenuBarLinks';
import { ClientMenuBarLinks } from './Links/ClientMenuBarLinks';
import { UnauthenticatedMenuBarLinks } from './Links/UnauthenticatedMenuBarLinks';
import { lightTheme } from '../../../Themes/theme';

export interface MenuLinksProps {
    onCloseDrawer: () => void;
}

const MenuBar = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isSmallScreen = useMediaQuery(lightTheme.breakpoints.down('sm'));
    const { userData } = useUser();
    const isCliente = userData?.isLoggedIn && userData.role === 'CLIENT_ROLE';
    const isAdmin = userData?.isLoggedIn && userData.role === 'ADMIN_ROLE';

    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open);
    };

    const ClientDrawerLinks = () => {
        return (
            <>
                <ListItem button component={Link} to="/home" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Home" />
                </ListItem>
                <ListItem button component={Link} to="/" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Clientes" />
                </ListItem>
                <CartButton quantidade={2} itens={[]} id={0} cliente={0} />
            </>
        )
    };

    const AdminDrawerLinks = () => {
        return (

            <>
                <ListItem button component={Link} to="/cadastrar-produto" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Cadastrar Produto" />
                </ListItem>
                <ListItem button component={Link} to="/listar-produtos" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Loja" />
                </ListItem>
            </>
        )
    };

    const UnauthenticatedDrawerLinks = () => {
        return (

            <>
                <ListItem button component={Link} to="/login" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Login" />
                </ListItem>
                <ListItem button component={Link} to="/cadastrar-usuario" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Cadastre-se" />
                </ListItem>
            </>
        )
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
                            {isCliente && <ClientMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                            {isAdmin && <AdminMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                            {!userData?.isLoggedIn && <UnauthenticatedMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                        </>
                    )}
                </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    {isCliente && <ClientDrawerLinks />}
                    {isAdmin && <AdminDrawerLinks />}
                    {!userData?.isLoggedIn && <UnauthenticatedDrawerLinks />}
                </List>
            </Drawer>
        </div>
    );
};

export default MenuBar;
