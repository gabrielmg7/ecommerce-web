import { Routes, Route } from 'react-router-dom';

import { AppAuthenticator } from '../Auth/AppAuthenticator';
import { UnauthenticatedRoutes } from './UnauthenticatedRoutes';
import { AdminRoutes } from './AdminRoutes';
import { ClientRoutes } from './ClientRoutes';

const AppRoutes = () => {
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