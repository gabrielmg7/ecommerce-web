import { Home } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import AdminCrudProduto from "../Components/Pages/Admin/AdminCrudProduto";
import AdminListarProdutos from "../Components/Pages/Admin/AdminListarProdutos";
import AdminDashboard from "../Components/Pages/Admin/AdminDashboard";

export const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/crud-produto" element={<AdminCrudProduto />} />
            <Route path="/admin-listar-prd" element={<AdminListarProdutos />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
    );
};