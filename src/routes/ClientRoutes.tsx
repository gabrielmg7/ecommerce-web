import { Routes, Route } from "react-router-dom";
import ListarProdutos from "../Components/Pages/Client/ListarProdutos";
import Sobre from "../Components/Pages/Sobre";
import Home from "../Components/Pages/Client/Home";
import MeusPedidos from "../Components/Pages/Client/MeusPedidos";

export const ClientRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listar-produtos" element={<ListarProdutos />} />
            <Route path="/meus-pedidos" element={<MeusPedidos />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    );
};
