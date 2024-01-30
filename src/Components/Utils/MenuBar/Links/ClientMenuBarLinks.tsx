/* eslint-disable @typescript-eslint/no-unused-vars */
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuLinksProps } from "../MenuBar";

export const ClientMenuBarLinks: React.FC<MenuLinksProps> = ({ onCloseDrawer }) => (
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