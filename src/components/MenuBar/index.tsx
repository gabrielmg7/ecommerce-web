import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const MenuBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    NomeDaMarca
                </Typography>

                <div style={{ flexGrow: 1 }}></div>

                <Button color="inherit" component={Link} to="/cadastrar-cliente">
                    Cadastrar Cliente
                </Button>

                <Button color="inherit" component={Link} to="/listar-clientes">
                    Listar Clientes
                </Button>

                <Button color="inherit" component={Link} to="/cadastrar-produto">
                    Cadastrar Produto
                </Button>

                <Button color="inherit" component={Link} to="/listar-produtos">
                    Listar Produtos
                </Button>

            </Toolbar>
        </AppBar>
    );
};

export default MenuBar;
