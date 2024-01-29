import { Home } from "@mui/icons-material";
import { Routes, Route } from "react-router-dom";
import ListarProdutos from "../Components/Pages/Client/ListarProdutos";

export const ClientRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/listar-produtos" element={<ListarProdutos />} />
        </Routes>
    );
};
