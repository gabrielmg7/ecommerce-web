import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <BottomNavigation showLabels>
            <BottomNavigationAction label="Home" component={Link} to="/" />
            <BottomNavigationAction label="Cadastrar Cliente" component={Link} to="/cadastrar-cliente" />
            <BottomNavigationAction label="Listar Clientes" component={Link} to="/listar-clientes" />
        </BottomNavigation>
    );
};

export default Footer;
