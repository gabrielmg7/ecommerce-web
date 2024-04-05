import { Home } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import AdminCrudProduto from "../components/pages/Admin/AdminCrudProduto";
import AdminListarProdutos from "../components/pages/Admin/AdminListarProdutos";
import Sobre from "../components/pages/Sobre";

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto" element={<AdminCrudProduto />} />
            <Route path="/produtos" element={<AdminListarProdutos />} />
            <Route path="/sobre" element={<Sobre />} />
        </Routes>
    );
};