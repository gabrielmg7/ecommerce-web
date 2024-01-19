import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import CadastrarCliente from '../Components/Pages/Client/CadastrarCliente';
import ListarProdutos from '../Components/Pages/Client/ListarProdutos';
import LogarCliente from '../Components/Pages/Client/LogarCliente';
import AdminCrudProduto from '../Components/Pages/Admin/AdminCrudProduto';
import AdminListarProdutos from '../Components/Pages/Admin/AdminListarProdutos';
import AdminPainel from '../Components/Pages/Admin/AdminDashboard';
import Home from '../Components/Pages/Client/Home';

import { AppAuthenticator, initialUserType } from './appAuth';
import { useAdmin } from '../Contexts/AdminContext';
import { useUser } from '../Contexts/UserContext';


const UnauthenticatedRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/logar-cliente" element={<LogarCliente />} />
      <Route path="/cadastrar-cliente" element={<CadastrarCliente />} />
      <Route path="/listar-produtos" element={<ListarProdutos />} />
    </Routes>
  );
};

const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
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
      <Route path="/admin-dashboard" element={<AdminPainel />} />
    </Routes>
  );
};

const AppRoutes = () => {
  const { user } = useUser();
  const { admin } = useAdmin();
  const navigate = useNavigate();
  const isAuthenticated = user?.isLoggedIn || admin?.isLoggedIn;

  useEffect(() => {
    if (isAuthenticated) {
      switch (user?.role || admin?.role) {
        case 'cliente':
          navigate('/cliente');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/unauthenticated');
          break;
      }
    }
  }, [isAuthenticated, user, admin, navigate]);

  return (
    <Routes>
      <Route path="/" element={<AppAuthenticator userType={initialUserType} />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/cliente/*" element={<ClientRoutes />} />
      <Route path="/unauthenticated/*" element={<UnauthenticatedRoutes />} />
    </Routes>
  );
};

export default AppRoutes;