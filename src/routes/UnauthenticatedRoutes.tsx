import { Routes, Route } from "react-router-dom"
import ListarProdutos from "../Components/Pages/Client/Loja"
import Home from "../Components/Pages/Client/Home";
import CadastrarUsuario from "../Components/Pages/Client/SignIn";
import LogarUsuario from "../Components/Pages/Client/Login";
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