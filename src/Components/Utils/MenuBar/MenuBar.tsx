/* eslint-disable @typescript-eslint/no-unused-vars */
import { useMediaQuery, AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Typography, Grid, Button } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../Contexts/UserContext';
import CartButton from '../../Cart/CartButton';
import ToggleThemeButton from '../Buttons/ToggleThemeButton';
import ProfileButton from '../Buttons/ProfileButton';
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

    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open);
    };

    const ClientMenuBarLinks: React.FC<MenuLinksProps> = ({ onCloseDrawer }) => (
        <>
            <Button color="inherit" component={Link} to="/" onClick={onCloseDrawer}>
                Home
            </Button>
            <Button color="inherit" component={Link} to="/cliente/listar-produtos" onClick={onCloseDrawer}>
                Loja
            </Button>
            <Button color="inherit" component={Link} to="/cliente/listar-pedidos" onClick={onCloseDrawer}>
                Meus Pedidos
            </Button>
            <Button color="inherit" onClick={() => { /* lógica para logout aqui */ }} >
                Logout
            </Button>
        </>
    );

    const AdminMenuBarLinks: React.FC<MenuLinksProps> = ({ onCloseDrawer }) => (
        <>
            <Button color="inherit" component={Link} to="/admin-cadastrar-prd" onClick={onCloseDrawer}>
                Cadastrar Produto
            </Button>
            <Button color="inherit" component={Link} to="/admin-dashboard" onClick={onCloseDrawer}>
                Dashboard
            </Button>
            <Button color="inherit" component={Link} to="/admin-listar-prd" onClick={onCloseDrawer}>
                Listar Produtos
            </Button>
        </>
    );

    const UnauthenticatedMenuBarLinks: React.FC<MenuLinksProps> = ({ onCloseDrawer }) => (
        <>
            <Button color="inherit" component={Link} to="/unauthenticated/listar-produtos" onClick={onCloseDrawer}>
                Loja
            </Button>
        </>
    );

    const ClientDrawerLinks: React.FC = () => {
        return (
            <>
                <Grid container>
                    <ToggleThemeButton />
                    <CartButton id={initialUser.carrinho} cliente={initialUser.id} quantidade={0} itens={[]} />
                    <ProfileButton isLoggedIn={isCliente ? isCliente : isAdmin} />
                </Grid>

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
                <Grid container>
                    <ToggleThemeButton />
                    <CartButton id={initialUser.carrinho} cliente={initialUser.id} quantidade={0} itens={[]} />
                    <ProfileButton isLoggedIn={isCliente ? isCliente : isAdmin} />
                </Grid>
                <ListItem button component={Link} to="/login" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Login" />
                </ListItem>
                <ListItem button component={Link} to="/cadastrar-usuario" onClick={toggleDrawer(false)}>
                    <ListItemText primary="Cadastre-se" />
                </ListItem>
            </>
        )
    };

    const DrawerLinks: React.FC = () => {
        return (
            <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                <List>
                    {isCliente && <ClientDrawerLinks />}
                    {isAdmin && <AdminDrawerLinks />}
                    {!userData?.isLoggedIn && <UnauthenticatedDrawerLinks />}
                </List>
            </Drawer>
        );
    };

    const DesktopLinks: React.FC = () => {
        return (
            <>
                {isCliente && <ClientMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                {isAdmin && <AdminMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                {!userData?.isLoggedIn && <UnauthenticatedMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                <ToggleThemeButton />
                <CartButton id={0} cliente={0} quantidade={0} itens={[]} />
                <ProfileButton isLoggedIn={isCliente ? isCliente : isAdmin} />
            </>
        );
    };

    return (
        <>
            <AppBar position="static" >
                <Toolbar>
                    <GradientTitle />
                    <Grid container direction="row" justifyContent="flex-end" alignItems="center">
                        {isSmallScreen ? (
                            <IconButton edge="start" aria-label="menu" onClick={toggleDrawer(true)}>
                                <MenuIcon />
                            </IconButton>
                        ) : (
                            <DesktopLinks />
                        )
                        }
                    </Grid>
                </Toolbar>
            </AppBar>
            <DrawerLinks />
        </>
    );
};

export default MenuBar;
