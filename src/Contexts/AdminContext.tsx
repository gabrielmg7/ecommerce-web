import React, { createContext, useContext, ReactNode, useState } from 'react';

export interface IAdmin {
    id: string;
    email: string;
    role: 'cliente' | 'admin';
}

type AdminContextType = {
    admin: IAdmin | null;
    setAdmin: (admin: IAdmin | null) => void;
};

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const AdminProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [admin, setAdmin] = useState<IAdmin | null>(null);

    const contextValue: AdminContextType = { admin, setAdmin };

    return <AdminContext.Provider value={contextValue}>{children}</AdminContext.Provider>;
};

export const UseAdminContext = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error('UseAdminContext must be used within an AdminProvider');
    }
    return context;
};

export const isAdminUser = (): boolean => {
    const { admin } = UseAdminContext();
    return !!admin && admin.role === 'admin';
};