import React, { createContext, useContext, useState, useEffect } from 'react';

export interface IAdmin {
    id?: string;
    username: string;
    email: string;
    role: 'admin';
    isLoggedIn: boolean;
}

interface AdminContextProps {
    admin: IAdmin | null;
    loginAdmin: (credentials: { email: string; password: string }) => Promise<void>;
    logoutAdmin: () => void;
}

const AdminContext = createContext<AdminContextProps | undefined>(undefined);

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [admin, setAdmin] = useState<IAdmin | null>(null);

    const loginAdmin = async (credentials: { email: string; password: string }) => {
        // Lógica de autenticação para o administrador
        try {
            console.log('Autenticando usuário:', credentials);

        } catch (error) {
            console.error('Erro no login do administrador:', error);
        }
    };

    const logoutAdmin = () => {
        setAdmin(null);
    };

    useEffect(() => {
        // Lógica para persistência de dados (se necessário)
    }, [admin]);

    return (
        <AdminContext.Provider value={{ admin, loginAdmin, logoutAdmin }}>
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
