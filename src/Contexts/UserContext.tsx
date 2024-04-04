import React, { createContext, useContext, useState } from 'react';
import userApiService from '../Services/restAPI/userService';
import { ICarrinho } from '../Types/restAPI/ICarrinho';
import { IPedido } from '../Types/restAPI/IPedido';
import { IUser, initialUser } from '../types/restAPI/IUsuario';

interface UserContextProps {
    data: IUser | null;
    registerUser: (data: IUser) => Promise<void>;
    loginUser: (credentials: { email: string; password: string }) => Promise<void>;
    logoutUser: () => void;
    setData: React.Dispatch<React.SetStateAction<IUser>>;
    checkAuthentication: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<IUser>(initialUser);

    const registerUser = async (data: IUser) => {
        try {
            await userApiService.create(data);
            console.info('✔ UserProvider.createdata() - Usuário cadastrado.')
        } catch (error) {
            console.error('❌ UserProvider.createdata() - Erro ao cadastrar cliente:', error);
        }
    };

    const checkAuthentication = () => {
        if (data.isLoggedIn && data.role !== 'unauth') {
            console.info('🆗 checkAuthentication() - Usuário autenticado com sucesso!')
            setData(prevState => ({
                ...prevState,
                isLoggedIn: true,
            }));
        } else {
            console.info('❌ checkAuthentication() - Usuário não autenticado!')
            setData(prevState => ({
                ...prevState,
                isLoggedIn: false,
            }));
        }
    }

    const loginUser = async (credentials: { email: string; password: string }) => {
        try {
            const response = await userApiService.login(credentials);
            const { role, ...dataWithoutRole } = response;
            setData({ ...dataWithoutRole, role, isLoggedIn: true });
            console.info('🆗 UserProvider.loginUser() - Usuário autenticado:', response);
        } catch (error) {
            console.error('❌ UserProvider.loginUser() - Erro no login:', error);
        }
    };

    const logoutUser = () => {
        console.info('📞 UserProvider.logoutUser() - Chamada da função da Camada de Serviço')
        setData(initialUser);
    };

    return (
        <UserContext.Provider value={{ data, setData, checkAuthentication, registerUser, loginUser, logoutUser }}>
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