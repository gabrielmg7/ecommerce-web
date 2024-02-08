import {  useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../Contexts/UserContext';

export const AppAuthenticator = () => {
  const navigate = useNavigate();
  const { userData, checkAuthentication } = useUserContext();

  useEffect(() => {
    console.log('userData mudou:', userData);
    checkAuthentication();
  }, [userData]);

  useEffect(() => {
    console.log('userData mudou:', userData);
  }, [userData]);

  useEffect(() => {
    if (userData?.isLoggedIn === true) {
      switch (userData.role) {
        case 'CLIENT_ROLE':
          navigate('/cliente');
          console.info('📞 AppAuthenticator -> Navegando para /cliente/*')
          break;
        case 'ADMIN_ROLE':
          navigate('/admin');
          console.info('📞 AppAuthenticator -> Navegando para /admin/*')
          break;
        case 'unauth':
          navigate('/unauthenticated');
          console.info('📞 AppAuthenticator -> Navegando para /unauthenticated/*')
          break;
        default:
          navigate('/home');
          break;
      }
    }
  }, [userData?.role, navigate]);

  return null;

}