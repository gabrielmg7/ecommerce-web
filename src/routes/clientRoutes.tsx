import { Routes, Route } from "react-router-dom";
import CadastrarCliente from "../Components/Pages/Client/CadastrarCliente";
import ListarProdutos from "../Components/Pages/Client/ListarProdutos";
import LogarCliente from "../Components/Pages/Client/LogarCliente";
import Home from "../Components/Pages/Client/Home";


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