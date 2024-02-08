import { useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import { AppAuthenticator } from '../Auth/AppAuthenticator';
import { useUserContext } from '../Contexts/UserContext';
import { UnauthenticatedRoutes } from './UnauthenticatedRoutes';
import { AdminRoutes } from './AdminRoutes';
import { ClientRoutes } from './ClientRoutes';

const AppRoutes = () => {
  const { userData } = useUserContext();
  const navigate = useNavigate();
  const isAuthenticated = userData?.isLoggedIn || userData?.isLoggedIn;

  useEffect(() => {
    if (!isAuthenticated && !window.location.pathname.includes('/unauthenticated')) {
      navigate('/unauthenticated');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Routes>
      <Route path="/" element={<AppAuthenticator />} />
      <Route path="/admin/*" element={<AdminRoutes />} />
      <Route path="/cliente/*" element={<ClientRoutes />} />
      <Route path="/unauthenticated/*" element={<UnauthenticatedRoutes />} />
    </Routes>
  );
};

export default AppRoutes;