// ProductContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAllProducts } from '../Services/fakeAPI/fakeApiProductService';
import { IProduct } from '../Types/fakeAPI/type';

interface ProductContextProps {
    produtos: IProduct[] | null;
    carregarProdutos: () => Promise<void>;
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [produtos, setProdutos] = useState<IProduct[] | null>(null);

    const carregarProdutos = async () => {
        try {
            const produtosCarregados = await getAllProducts();
            setProdutos(produtosCarregados);
        } catch (error) {
            console.error('Erro ao carregar produtos:', error);
        }
    };

    useEffect(() => {
        // Chame a função para carregar produtos assim que o componente for montado
        carregarProdutos();
    }, []); // A dependência vazia garante que isso só acontecerá uma vez

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
