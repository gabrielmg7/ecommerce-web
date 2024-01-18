import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import CadastrarCliente from '../Components/Pages/Client/CadastrarCliente';
import ListarProdutos from '../Components/Pages/Client/ListarProdutos';
import LogarCliente from '../Components/Pages/Client/LogarCliente';
import AdminCrudProduto from '../Components/Pages/Admin/AdminCrudProduto';
import AdminListarProdutos from '../Components/Pages/Admin/AdminListarProdutos';
import AdminPainel from '../Components/Pages/Admin/AdminPainel';
import Home from '../Components/Pages/Client/Home';
import { AppAuthenticator, initialUserType } from './appAuth';



const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logar-cliente" element={<LogarCliente />} />
      <Route path="/cadastrar-cliente" element={<CadastrarCliente />} />
      <Route path="/listar-produtos" element={<ListarProdutos />} />
    </Routes>
  );
};

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/crud-produto" element={<AdminCrudProduto />} />
      <Route path="/admin-listar-prd" element={<AdminListarProdutos />} />
      <Route path="/admin-painel" element={<AdminPainel />} />
    </Routes>
  );
};

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppAuthenticator userType={initialUserType} />} />
        <Route path="/cliente/*" element={<ClientRoutes />} />
        <Route path="/admin/*" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;