import React, { createContext, useContext, useState, useEffect } from 'react';
import { IUser, initialUser } from '../Types/restAPI/IUser';
import userApiService from '../Services/restAPI/userApiService';

interface UserContextProps {
    userData: IUser | null;
    registerUser: (userData: IUser) => Promise<void>;
    loginUser: (credentials: { email: string; password: string }) => Promise<void>;
    logoutUser: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [userData, setUserData] = useState<IUser | null>(null);

    const registerUser = async (userData: IUser) => {

        console.info('📞 registerUser() - Chamada da função da Camada de Serviço')

        try {
            await userApiService.createUser(userData);
            console.info('✔ createUserData() - Usuário cadastrado.')
        } catch (error) {
            console.error('❌ createUserData() - Erro ao cadastrar cliente:', error);
        }
    };

    // TODO: Lógica para autenticar o usuário no backend
    const loginUser = async (credentials: { email: string; password: string }) => {
        console.info('📞 loginUser() - Chamada da função da Camada de Serviço')
        try {
            const response = await userApiService.loginUser(credentials);
            const { role, ...userDataWithoutRole } = response;
            setUserData({ ...userDataWithoutRole, role, isLoggedIn: true });
            console.info('🆗 loginUser() - Usuário autenticado:', response);
        } catch (error) {
            console.error('❌ loginUser() - Erro no login:', error);
        }
    };

    // TODO: Lógica para efetuar logout (limpar o estado do usuário)
    const logoutUser = () => {

        console.info('📞 logoutUser() - Chamada da função da Camada de Serviço')

        setUserData(initialUser);
    };


    useEffect(() => {
        // Simular a persistência de dados e atualização do localStorage
        localStorage.setItem('user', JSON.stringify(userData));
    }, [userData]);


    return (
        <UserContext.Provider value={{ userData, registerUser, loginUser, logoutUser }}>
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