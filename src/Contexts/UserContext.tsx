/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useState } from 'react';
import userApiService from '../Services/restAPI/userApiService';
import { ICarrinho } from '../Types/restAPI/ICarrinho';
import { IPedido } from '../Types/restAPI/IPedido';

interface IUser {
    id: number;
    nome: string;
    sobrenome: string;
    cpf: string;
    telefone: number;
    email: string;
    password: string;
    cidade: string;
    endereco: string;
    cep: number;
    role: "CLIENT_ROLE" | "ADMIN_ROLE" | "unauth";
    allowExtraEmails: boolean;
    isLoggedIn: boolean;
    pedidos: IPedido[];
    carrinho: ICarrinho["id"];
  }
  
  export const initialUser: IUser = {
    id: 0,
    nome: "",
    sobrenome: "",
    cpf: "",
    email: "",
    password: "",
    role: "unauth",
    allowExtraEmails: false,
    isLoggedIn: false,
    pedidos: [],
    carrinho: 0,
    telefone: 0,
    cidade: "",
    endereco: "",
    cep: 0
  };


  interface UserContextProps {
    userData: IUser | null;
    registerUser: (userData: IUser) => Promise<void>;
    loginUser: (credentials: { email: string; password: string }) => Promise<void>;
    logoutUser: () => void;
    setUserData: React.Dispatch<React.SetStateAction<IUser | null>>;
    checkAuthentication: () => void; 
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userData, setUserData] = useState<IUser | null>(initialUser);

    const registerUser = async (userData: IUser) => {
        try {
            await userApiService.create(userData);
            console.info('✔ UserProvider.createUserData() - Usuário cadastrado.')
        } catch (error) {
            console.error('❌ UserProvider.createUserData() - Erro ao cadastrar cliente:', error);
        }
    };

    const loginUser = async (credentials: { email: string; password: string }) => {
        try {
            const response = await userApiService.login(credentials);
            const { role, ...userDataWithoutRole } = response;
            setUserData({ ...userDataWithoutRole, role, isLoggedIn: true });
            console.info('🆗 UserProvider.loginUser() - Usuário autenticado:', response);
        } catch (error) {
            console.error('❌ UserProvider.loginUser() - Erro no login:', error);
        }
    };

    const logoutUser = () => {

        console.info('📞 UserProvider.logoutUser() - Chamada da função da Camada de Serviço')

        setUserData(initialUser);
    };

    const checkAuthentication = () => {
        const loggedInUser = localStorage.getItem('loggedInUser');
        if (loggedInUser) {
            console.info('🆗 UserProvider.checkAuthentication() - Usuário autenticado com sucesso!')
            setUserData(prevState => ({
                ...prevState,
                isLoggedIn: true,
                id: prevState?.id ?? 0,
                nome: prevState?.nome ?? '',
                sobrenome: prevState?.sobrenome ?? '',
                cpf: prevState?.cpf ?? '',
                telefone: prevState?.telefone ?? 0,
                email: prevState?.email ?? '',
                password: prevState?.password ?? '',
                cidade: prevState?.cidade ?? '',
                endereco: prevState?.endereco ?? '',
                cep: prevState?.cep ?? 0,
                role: prevState?.role ?? 'unauth',
                allowExtraEmails: prevState?.allowExtraEmails ?? false,
                pedidos: prevState?.pedidos ?? [],
                carrinho: prevState?.carrinho ?? 0,
            }));
        } else {
            console.info('❌ UserProvider.checkAuthentication() - Usuário não autenticado!')
        }
    };

    return (
        <UserContext.Provider value={{ userData, setUserData, checkAuthentication, registerUser, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser deve ser usado dentro de um UserProvider');
    }
    return context;
};

// verificar se o usuário está logado com base na propriedade isLoggedIn.
// Quando o usuário faz o login, define isLoggedIn como true,
// e quando ele faz o logout, define isLoggedIn como false.
// Isso permite que controle o status de login do usuário no contexto.