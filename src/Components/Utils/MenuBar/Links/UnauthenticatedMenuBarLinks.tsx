import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { MenuLinksProps } from "../MenuBar";

export const UnauthenticatedMenuBarLinks: React.FC<MenuLinksProps> = ({ onCloseDrawer }) => (
    <>
        <Button color="inherit" component={Link} to="/unauthenticated/listar-produtos" onClick={onCloseDrawer}>
            Loja
        </Button>
    </>
);