/* eslint-disable @typescript-eslint/no-unused-vars */
import { Routes, Route } from 'react-router-dom';
import { CadastrarCliente } from '../pages/CadastrarCliente';
import { CadastrarProduto } from '../pages/CadastrarProduto';
import { Carrinho } from '../pages/Carrinho';
import { ListarClientes } from '../pages/ListarClientes';
import { ListarProdutos } from '../pages/ListarProdutos';
import { Home } from '../pages/Home';


const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" Component={Home} />
        <Route path="/cadastrar-cliente" Component={CadastrarCliente} />
        <Route path="/cadastrar-produto" Component={CadastrarProduto} />
        <Route path="/carrinho" Component={Carrinho} />
        <Route path="/listar-clientes" Component={ListarClientes} />
        <Route path="/listar-produtos" Component={ListarProdutos} />
    </Routes>
  );
};

export default AppRoutes;
