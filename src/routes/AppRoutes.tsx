import { Routes, Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppAuthenticator, initialUserType } from './appAuth';
import { AdminRoutes } from './adminRoutes';
import { ClientRoutes } from './clientRoutes';


const AppRoutes = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppAuthenticator userType={initialUserType} />}/>
        <Route path="/cliente" element={<ClientRoutes />} />
        <Route path="/admin" element={<AdminRoutes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
 