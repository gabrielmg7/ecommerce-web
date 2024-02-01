/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Contexts/UserContext';
import { IUser } from '../Types/restAPI/IUser';

export const AppAuthenticator = ({ userType }: { userType: IUser }) => {
  const navigate = useNavigate();
  const { userData, loginUser } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    console.info('📞 authenticate() - Chamada da função da camada de Autenticação')
    try {
      await loginUser({
        email: userType.email,
        password: userType.password,
      });
      if (userData && userData.isLoggedIn) {
        console.info('🆗 authenticate() - Uuário autenticado com sucesso!')
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('❌ authenticate() - Uuário não autenticado!')

      setIsAuthenticated(false);
    }
  };

  useEffect(() => {
    authenticate();
  }, [loginUser, userType, userData]);

  useEffect(() => {
    if (isAuthenticated) {
      switch (userType.role) {
        case 'CLIENT_ROLE':
          navigate('/cliente');
          console.info('Navegando para /cliente/*')
          break;
        case 'ADMIN_ROLE':
          navigate('/admin');
          console.info('Navegando para /admin/*')
          break;
        case 'unauth':
          navigate('/unauthenticated');
          console.info('Navegando para /unauthenticated/*')
          break;
        default:
          navigate('/home');
          break;
      }
    }
  }, [isAuthenticated, userType.role, navigate]);

  return null;
}
