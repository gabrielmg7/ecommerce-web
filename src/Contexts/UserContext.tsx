import React, { createContext, useContext, useState, useEffect } from 'react';

export interface IUser {
    id?: string;
    username: string;
    email: string;
    role: 'cliente' | 'admin';
}

interface UserContextProps {
    user: IUser | null;
    registerUser: (userData: IUser) => Promise<void>;
    loginUser: (credentials: { email: string; password: string }) => Promise<void>;
    logoutUser: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<IUser | null>(null);

    // TODO: Lógica para registrar o usuário no backend
    const registerUser = async (userData: IUser) => {
        try {
            console.log('Registrando usuário:', userData);
        } catch (error) {
            console.error('Erro no login:', error);
        }
    };
    // TODO: Lógica para autenticar o usuário no backend
    const loginUser = async (credentials: { email: string; password: string }) => {
        try {
            console.log('Autenticando usuário:', credentials);
        } catch (error) {
            console.error('Erro no registro:', error);
        }
    };

    // TODO: Lógica para efetuar logout (limpar o estado do usuário)
    const logoutUser = () => {
        setUser(null);
    };

    // UseEffect para simular a persistência de dados
    useEffect(() => {
        // Lógica para verificar se o usuário já está autenticado (por exemplo, se há um token no localStorage)
        // Se sim, pode obter as informações do usuário e definir no estado
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // UseEffect para atualizar o localStorage sempre que o estado do usuário mudar
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    return (
        <UserContext.Provider value={{ user, registerUser, loginUser, logoutUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser deve ser usado dentro de um UserProvider');
    }
    return context;
};
