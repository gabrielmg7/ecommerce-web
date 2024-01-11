import React, { createContext, useContext, useState, useEffect } from 'react';

export interface User {
    id: string;
    username: string;
    email: string;
    role: 'cliente' | 'admin';
}

interface UserContextProps {
    user: User | null;
    registerUser: (userData: User) => Promise<void>;
    loginUser: (credentials: { email: string; password: string }) => Promise<void>;
    logoutUser: () => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    const registerUser = async (userData: User) => {
        // Lógica para registrar o usuário no backend
        // Substitua o código abaixo pela sua implementação real
        console.log('Registrando usuário:', userData);
    };

    const loginUser = async (credentials: { email: string; password: string }) => {
        // Lógica para autenticar o usuário no backend
        // Substitua o código abaixo pela sua implementação real
        console.log('Autenticando usuário:', credentials);
    };

    const logoutUser = () => {
        // Lógica para efetuar logout (limpar o estado do usuário)
        setUser(null);
    };

    // UseEffect para simular a persistência de dados (opcional)
    useEffect(() => {
        // Lógica para verificar se o usuário já está autenticado (por exemplo, se há um token no localStorage)
        // Se sim, você pode obter as informações do usuário e definir no estado
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
