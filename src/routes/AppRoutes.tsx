import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CadastrarProduto } from '../pages/CadastrarProduto';
import { Carrinho } from '../pages/Carrinho';
import { ListarClientes } from '../pages/ListarClientes';
import { ListarProdutos } from '../pages/ListarProdutos';
import { Home } from '../pages/Home';
import LogarCliente from '../pages/LogarCliente';
import CadastrarCliente from '../pages/CadastrarCliente';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logar-cliente" element={<LogarCliente />} />
        <Route path="/cadastrar-cliente" element={<CadastrarCliente/>} />
        <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
        <Route path="/listar-clientes" element={<ListarClientes />} />
        <Route path="/listar-produtos" element={<ListarProdutos />} />
        <Route path="/carrinho" element={<Carrinho />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
