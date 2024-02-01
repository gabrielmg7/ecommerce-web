import { Routes, Route } from "react-router-dom"
import ListarProdutos from "../Components/Pages/Client/ListarProdutos"
import Home from "../Components/Pages/Home";
import CadastrarUsuario from "../Components/Pages/Client/CadastrarUsuario";
import LogarUsuario from "../Components/Pages/Client/LogarUsuario";
import Sobre from "../Components/Pages/Sobre";

export const UnauthenticatedRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logar-usuario" element={<LogarUsuario />} />
        <Route path="/cadastrar-usuario" element={<CadastrarUsuario />} />
        <Route path="/listar-produtos" element={<ListarProdutos />} />
        <Route path="/sobre" element={<Sobre />} />

      </Routes>
    );
  };