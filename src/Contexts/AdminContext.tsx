/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, useContext, useState, useEffect } from 'react';
import { IUser } from '../Types/restAPI/IUser';
interface AdminContextProps {
    admin: IUser | null;
    registerAdmin: (adminData: IUser) => Promise<void>;
    loginAdmin: (credentials: { email: string; password: string }) => Promise<void>;
    logoutAdmin: () => void;
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [admin, setAdmin] = useState<IUser | null>(null);

    // TODO: Lógica para registrar o usuário no backend
    const registerAdmin = async (adminData: IUser) => {
        try {
            console.log('Registrando usuário:', adminData);
        } catch (error) {
            console.error('Erro no login:', error);
        }
    };


    // TODO: Lógica para logar o usuário no backend
    const loginAdmin = async (credentials: { email: string; password: string }) => {
        try {
            console.log('Autenticando usuário:', credentials);

        } catch (error) {
            console.error('Erro no login do administrador:', error);
        }
    };

    const logoutAdmin = () => {
        setAdmin(null);
    };


    // TODO: UseEffect para simular a persistência de dados
    useEffect(() => {
        const storedAdmin = localStorage.getItem('admin');
        if (storedAdmin) {
            setAdmin(JSON.parse(storedAdmin));
        }
    }, []);

    return (
        <AdminContext.Provider value={{ admin, registerAdmin, loginAdmin, logoutAdmin }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdmin = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('useAdmin deve ser usado dentro de um AdminProvider');
    }
    return context;
};

// verificar se o usuário está logado com base na propriedade isLoggedIn.
// Quando o usuário faz o login, define isLoggedIn como true,
// e quando ele faz o logout, define isLoggedIn como false.
// Isso permite que controle o status de login do usuário no contexto.