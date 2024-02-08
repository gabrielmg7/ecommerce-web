import { Home } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import AdminCrudProduto from "../Components/Pages/Admin/AdminCrudProduto";
import AdminListarProdutos from "../Components/Pages/Admin/AdminListarProdutos";
import Sobre from "../Components/Pages/Sobre";
import Dashboard from "../Components/Dashboard/Dashboard";

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crud-produto" element={<AdminCrudProduto />} />
            <Route path="/admin-listar-prd" element={<AdminListarProdutos />} />
            <Route path="/admin-dashboard" element={<Dashboard />} />
            <Route path="/sobre" element={<Sobre />} />
            
        </Routes>
    );
};