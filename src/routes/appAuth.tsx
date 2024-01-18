/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../Contexts/UserContext';

export type UserType = {
  id?: string;
  username: string;
  email: string;
  password: string;
  role: 'cliente' | 'admin';
};

export const initialUserType: UserType = {

  username: 'teste',
  email: 'mock@teste.com',
  password: 'teste123',
  role: 'cliente'
}


export const AppAuthenticator = ({ userType }: { userType: UserType }) => {
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
        case 'cliente':
          navigate('/cliente');
          break;
        case 'admin':
          navigate('/admin');
          break;
        default:
          navigate('/login');
          break;
      }
    }
  }, [isAuthenticated, userType.role, navigate]);

  return null;
}