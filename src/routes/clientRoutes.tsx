
import { Routes, Route } from "react-router-dom";
import CadastrarCliente from "../components/Pages/Client/CadastrarCliente";
import { ListarProdutos } from "../components/Pages/Client/ListarProdutos";
import LogarCliente from "../components/Pages/Client/LogarCliente";
import { Home } from "../components/Pages/Client/Home";

export const ClientRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/logar-cliente" element={<LogarCliente />} />
            <Route path="/cadastrar-cliente" element={<CadastrarCliente />} />
            <Route path="/listar-produtos" element={<ListarProdutos />} />
        </Routes>
    );
};