// ProductContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAllProducts } from '../services/fakeAPI/fakeApiProductService';
import { IProduto } from '../types/restAPI/IProduto';

interface ProductContextProps {
    produtos: IProduto[] | null;
    carregarProdutos: () => Promise<void>;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [produtos, setProdutos] = useState<IProduto[] | null>(null);

    const carregarProdutos = async () => {
        try {
            const produtosCarregados = await getAllProducts();
            setProdutos(produtosCarregados);
        } catch (error) {
            console.error('Erro ao carregar produtos:', error);
        }
    };

    useEffect(() => {
        carregarProdutos();
    }, []); 

    return (
        <ProductContext.Provider value={{ produtos, carregarProdutos }}>
            {children}
        </ProductContext.Provider>
    );
};

export const useProduct = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error('useProduct deve ser usado dentro de um ProductProvider');
    }
    return context;
};
