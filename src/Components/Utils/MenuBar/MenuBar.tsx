/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMediaQuery, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, Grid } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../Contexts/UserContext';
import CartButton from '../../Cart/CartButton';
import { AdminMenuBarLinks } from './Links/AdminMenuBarLinks';
import { ClientMenuBarLinks } from './Links/ClientMenuBarLinks';
import { UnauthenticatedMenuBarLinks } from './Links/UnauthenticatedMenuBarLinks';
import ToggleThemeButton from './Buttons/ToggleThemeButton';
import ProfileButton from './Buttons/ProfileButton';
import { useThemeContext } from '../../../Themes/ThemeProviderWrapper';
import GradientTitle from './GradientTitle';
import { initialUser } from '../../../Types/restAPI/IUser';
export interface MenuLinksProps {
    onCloseDrawer: () => void;
}

const MenuBar: React.FC = () => {
    const { theme } = useThemeContext();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { userData } = useUserContext();
    const isCliente = userData?.isLoggedIn && userData.role === 'CLIENT_ROLE';
    const isAdmin = userData?.isLoggedIn && userData.role === 'ADMIN_ROLE';

    //==========================| Functions |====================================

    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open);
    };

    //==========================| FC's |=========================================

    const ClientDrawerLinks: React.FC = () => {
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

    const AdminDrawerLinks: React.FC = () => {
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

    const UnauthenticatedDrawerLinks: React.FC = () => {
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
        <>
            <AppBar position="static" >
                <Toolbar>
                    <GradientTitle />
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                        {isSmallScreen ? (
                            <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <>
                                {isCliente && <ClientMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                                {isAdmin && <AdminMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                                {!userData?.isLoggedIn && <UnauthenticatedMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                                <ToggleThemeButton />
                                <ProfileButton isLoggedIn={isCliente ? isCliente : isAdmin} />
                            </>
                        )}
                    </Grid>
                </Toolbar>
            </AppBar>
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <Grid container>
                    <ToggleThemeButton />
                    <CartButton id={initialUser.carrinho} cliente={initialUser.id} quantidade={0} itens={[]}/>
                    <ProfileButton isLoggedIn={isCliente ? isCliente : isAdmin} />
                </Grid>
                <List>
                    {isCliente && <ClientDrawerLinks />}
                    {isAdmin && <AdminDrawerLinks />}
                    {!userData?.isLoggedIn && <UnauthenticatedDrawerLinks />}
                </List>
            </Drawer>
        </>
    );
};

export default MenuBar;
