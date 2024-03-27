import { Routes, Route } from 'react-router-dom';

import { AppAuthenticator } from '../Auth/AppAuthenticator';
import { AdminRoutes } from './AdminRoutes';
import { ClientRoutes } from './ClientRoutes';
import { UnauthenticatedRoutes } from './UnauthenticatedRoutes';


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