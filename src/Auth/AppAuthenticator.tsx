/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Contexts/UserContext';
import { ICliente } from '../Types/restAPI/ICliente';

export const AppAuthenticator = ({ userType }: { userType: ICliente }) => {
  const navigate = useNavigate();
  const { user, loginUser } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authenticate = async () => {
      try {
        await loginUser({
          email: userType.email,
          password: userType.password,
        });
        if (user && user.isLoggedIn) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };
    authenticate();
  }, [loginUser, userType, user]);

  useEffect(() => {
    if (isAuthenticated) {
      switch (userType.role) {
        case 'client':
          navigate('/cliente');
          console.info('Navegando para /cliente')
          break;
        case 'admin':
          navigate('/admin');
          console.info('Navegando para /admin')
          break;
        case 'unauth':
          navigate('/unauthenticated');
          console.info('Navegando para /unauthenticated')
          break;
        default:
          navigate('/home');
          break;
      }
    }
  }, [isAuthenticated, userType.role, navigate]);

  return null;
}
