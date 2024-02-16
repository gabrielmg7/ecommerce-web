import { Home } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import AdminCrudProduto from "../Components/Pages/Admin/AdminCrudProduto";
import AdminListarProdutos from "../Components/Pages/Admin/AdminListarProdutos";
import Sobre from "../Components/Pages/Sobre";

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