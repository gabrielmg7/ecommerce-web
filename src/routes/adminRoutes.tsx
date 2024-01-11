
import { Home } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import CadastrarProduto from "../Components/Pages/Client/CadastrarProduto";

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
        </Routes>
    );
};