import { Home } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import ListarProdutos from "../Components/Pages/Client/ListarProdutos";
import ListarPedidos from "../Components/Pages/Client/Pedidos";
import Sobre from "../Components/Pages/Sobre";

export const ClientRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listar-produtos" element={<ListarProdutos />} />
            <Route path="/listar-pedidos" element={<ListarPedidos />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    );
};
