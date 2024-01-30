import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuLinksProps } from "../MenuBar";

export const AdminMenuBarLinks: React.FC<MenuLinksProps> = ({ onCloseDrawer }) => (
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