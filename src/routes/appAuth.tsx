/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export type UserType = {
  id: string;
  username: string;
  email: string;
  password: string;
  role: 'cliente' | 'admin'; // Pode ser qualquer tipo de função ou papel que o usuário desempenha no sistema
};

export const initialUserType: UserType = {
  id: '',
  username: '',
  email: '',
  password: '',
  role: 'cliente'
}


export const AppAuthenticator = ({ userType }: { userType: UserType }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Simulação de uma verificação assíncrona de autenticação
    // lógica de autenticação 
    const authenticate = async () => {
      try {
        // Aqui você verificará as credenciais, token, etc.
        // Por enquanto, apenas simulemos que a autenticação é bem-sucedida
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    authenticate();
  }, []); // Executar somente uma vez após a montagem do componente

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

  return null; // Este componente não renderiza nada visível, apenas redireciona
};

