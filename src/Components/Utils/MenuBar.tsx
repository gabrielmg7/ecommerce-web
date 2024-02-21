import { useMediaQuery, AppBar, Toolbar, IconButton, Drawer, List, Grid, Button, Box, Stack } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../Contexts/UserContext';
import CartButton from '../Pages/Client/Cart/CartDrawer';
import ToggleThemeButton from '../Buttons/ToggleThemeButton';
import ProfileButton from '../Buttons/ProfileButton';
import { useThemeContext } from '../../Themes/ThemeProviderWrapper';
import { initialUser } from '../../Types/restAPI/IUser';
import AnimatedGrid from './AnimatedGrid';
import Logo from './Logo/Logo';
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
            <Button style={{ color: theme.palette.text.primary }} component={Link} to="/" onClick={onCloseDrawer}>
                Home
            </Button>
            <Button style={{ color: theme.palette.text.primary }} component={Link} to="/cliente/listar-produtos" onClick={onCloseDrawer}>
                Loja
            </Button>
            <Button style={{ color: theme.palette.text.primary }} component={Link} to="/cliente/listar-pedidos" onClick={onCloseDrawer}>
                Meus Pedidos
            </Button>

        </>
    );

    const AdminMenuBarLinks: React.FC<MenuLinksProps> = ({ onCloseDrawer }) => (
        <>
            <Button style={{ color: theme.palette.text.primary }} component={Link} to="/admin-cadastrar-prd" onClick={onCloseDrawer}>
                Cadastrar Produto
            </Button>
            <Button style={{ color: theme.palette.text.primary }} component={Link} to="/admin-dashboard" onClick={onCloseDrawer}>
                Dashboard
            </Button>
            <Button style={{ color: theme.palette.text.primary }} component={Link} to="/admin-listar-prd" onClick={onCloseDrawer}>
                Listar Produtos
            </Button>
        </>
    );

    const UnauthenticatedMenuBarLinks: React.FC<MenuLinksProps> = ({ onCloseDrawer }) => (
        <>

            <Button style={{ color: theme.palette.text.primary }} component={Link} to="/unauthenticated/listar-produtos" onClick={onCloseDrawer}>
                Loja
            </Button>
            <Button style={{ color: theme.palette.text.primary }} onClick={onCloseDrawer}>
                Categorias
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
                <Button component={Link} to="/home" onClick={toggleDrawer(false)}>
                    Home
                </Button>
                <Button component={Link} to="/" onClick={toggleDrawer(false)}>
                    Categorias
                </Button>
            </>
        );
    };

    const AdminDrawerLinks: React.FC = () => {
        return (
            <>
                <Button component={Link} to="/cadastrar-produto" onClick={toggleDrawer(false)}>
                    Cadastrar Produto
                </Button>
                <Button component={Link} to="/listar-produtos" onClick={toggleDrawer(false)}>
                    Loja
                </Button>
            </>
        );
    };

    const UnauthenticatedDrawerLinks: React.FC = () => {
        return (
            <>
                <Grid container>
                    <Button component={Link} to="/login" onClick={toggleDrawer(false)}>
                        Login
                    </Button>
                    <Button component={Link} to="/cadastrar-usuario" onClick={toggleDrawer(false)}>
                        Cadastre-se
                    </Button>
                    <ToggleThemeButton />
                </Grid>

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

    const DesktopMenuBar: React.FC = () => {
        return (
            <Grid display="flex" justifyContent="space-between" alignItems="center" width="100%">
                <Logo width='60px' height='60px' logo='Logo3' />
                <Box display="flex" justifyContent="center" alignItems="center" flexGrow={1}>
                    {isCliente && <ClientMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                    {isAdmin && <AdminMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                    {!userData?.isLoggedIn && <UnauthenticatedMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                </Box>

                <Stack direction="row" justifyContent={'flex-end'}>
                    <ToggleThemeButton />
                    <CartButton id={0} cliente={0} quantidade={0} itens={[]} />
                    <ProfileButton isLoggedIn={isCliente ? isCliente : isAdmin} />
                </Stack>
            </Grid>
        );
    };

    const MobileMenuBar: React.FC = () => {
        return (
            <Grid container justifyContent="space-between" alignItems={'center'}>
                <Box>
                    <Logo width='60px' height='60px' logo={'Logo3'} />
                </Box>
                <Box>
                    <IconButton edge="end" aria-label="menu" onClick={toggleDrawer(true)}>
                        <MenuIcon />
                    </IconButton>
                </Box>
            </Grid>
        );
    }

    return (
        <AnimatedGrid>
            <AppBar position="static" color='transparent'>
                <Toolbar >
                    {isSmallScreen ? (<MobileMenuBar />) : (<DesktopMenuBar />)}
                </Toolbar>
            </AppBar>
            <DrawerLinks />
        </AnimatedGrid>
    );
};

export default MenuBar;
