import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { AppAuthenticator } from '../Auth/AppAuthenticator';
import { useAdmin } from '../Contexts/AdminContext';
import { useUser } from '../Contexts/UserContext';
import { UnauthenticatedRoutes } from './UnauthenticatedRoutes';
import { AdminRoutes } from './AdminRoutes';
import { ClientRoutes } from './ClientRoutes';
import { initialCliente } from '../Types/restAPI/ICliente';

const AppRoutes = () => {
  const { user } = useUser();
  const { admin } = useAdmin();
  const navigate = useNavigate();
  const isAuthenticated = user?.isLoggedIn || admin?.isLoggedIn;


  useEffect(() => {
    // Verifica se o usuário não está autenticado e redireciona para /unauthenticated apenas se ele tentar acessar uma rota protegida
    if (!isAuthenticated && !window.location.pathname.includes('/unauthenticated')) {
      navigate('/unauthenticated');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route path="/" element={<AppAuthenticator userType={initialCliente} />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/cliente/*" element={<ClientRoutes />} />
      <Route path="/unauthenticated/*" element={<UnauthenticatedRoutes />} />
    </Routes>
  );
};

export default AppRoutes;