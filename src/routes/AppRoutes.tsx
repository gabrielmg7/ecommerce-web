import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { CadastrarProduto } from '../pages/CadastrarProduto';
import { Carrinho } from '../pages/Carrinho';
import { ListarClientes } from '../pages/ListarClientes';
import { ListarProdutos } from '../pages/ListarProdutos';
import { Home } from '../pages/Home';
import CadastrarCliente from '../pages/CadastrarCliente';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastrar-cliente" element={<CadastrarCliente />} />
        <Route path="/cadastrar-produto" element={<CadastrarProduto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/listar-clientes" element={<ListarClientes />} />
        <Route path="/listar-produtos" element={<ListarProdutos />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
