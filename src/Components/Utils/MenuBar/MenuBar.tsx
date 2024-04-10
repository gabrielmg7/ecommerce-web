import { useMediaQuery, AppBar, Toolbar, IconButton, Drawer, List, Grid, Button, Box, Stack } from '@mui/material';
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useUserContext } from '../../../Contexts/UserContext';
import CartButton from '../../pages/Client/Cart/CartDrawer';
import { useThemeContext } from '../../../Themes/ThemeProviderWrapper';
import AnimatedGrid from '../AnimatedGrid';
import Logo from '../Logo/Logo';
import ProductCategoryMenu from './ProductCategoryMenu';
import ProfileButton from '../../buttons/ProfileButton';
import ToggleThemeButton from '../../buttons/ToggleThemeButton';


export interface MenuLinksProps {
    onCloseDrawer: () => void;
}

const MenuBar: React.FC = () => {
    const { theme } = useThemeContext();
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const { data } = useUserContext();
    const isCliente = data?.isLoggedIn && data.role === 'CLIENT_ROLE';
    const isAdmin = data?.isLoggedIn && data.role === 'ADMIN_ROLE';

    const toggleDrawer = (open: boolean) => () => {
        setIsDrawerOpen(open);
    };

    const ClientMenuBarLinks: React.FC<MenuLinksProps> = ({ onCloseDrawer }) => (
        <>
            <ProductCategoryMenu />
            <Button style={{ color: theme.palette.text.primary }} component={Link} to="/cliente/listar-produtos" onClick={onCloseDrawer}>
                OFERTAS DO DIA
            </Button>
            <Button style={{ color: theme.palette.text.primary }} component={Link} to="/cliente/listar-pedidos" onClick={onCloseDrawer}>
                MAIS PROCURADOS
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

    const carrinhoId = data ? data.idCarrinho : null;

    const ClientDrawerLinks: React.FC = () => {
        return (
            <>
                <Grid container>
                    <ToggleThemeButton />
                    <CartButton id={carrinhoId ? carrinhoId : 0} idUsuario={data?.id ?? 0} quantidade={0} itens={[]} criadoEm={''} />
                    <ProfileButton isLoggedIn={data ? data.role === 'CLIENT_ROLE' : false} />
                </Grid>
                <Button component={Link} to="/home">
                    Home
                </Button>
                <Button component={Link} to="/">
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
                    {!data?.isLoggedIn && <UnauthenticatedDrawerLinks />}
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
                    {!data?.isLoggedIn && <UnauthenticatedMenuBarLinks onCloseDrawer={() => setIsDrawerOpen(false)} />}
                </Box>

                <Stack direction="row" justifyContent={'flex-end'}>
                    <ToggleThemeButton />
                    <CartButton id={0} idUsuario={0} quantidade={0} itens={[]} criadoEm={''} />
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
        <Grid mb={4}>
            <AppBar position="static" color='transparent'>
                <AnimatedGrid>
                    <Toolbar>
                        {isSmallScreen ? (<MobileMenuBar />) : (<DesktopMenuBar />)}
                    </Toolbar>
                </AnimatedGrid>
            </AppBar>
            <DrawerLinks />
        </Grid>
    );
};

export default MenuBar;
