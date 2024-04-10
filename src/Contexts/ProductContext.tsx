import React, { createContext, useContext, useState, useEffect } from 'react';
import { getAllProducts } from '../services/fakeAPI/fakeApiProductService';
import { IProduct } from '../types/FakeAPI/type';

interface ProductContextProps {
    produtos: IProduct[] | null;
    carregarProdutos: () => Promise<void>;
    atualizarProdutos: (novosProdutos: IProduct[]) => void; 
}

const ProductContext = createContext<ProductContextProps | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [produtos, setProdutos] = useState<IProduct[] | null>(null);
    
    const carregarProdutos = async () => {
        try {
            const produtosCarregados: IProduct[] = await getAllProducts();
            setProdutos(produtosCarregados);
            console.log("Produtos Carregados: ", produtosCarregados); 
        } catch (error) {
            console.error('Erro ao carregar produtos:', error);
        }
    };
    
    
    useEffect(() => {
        carregarProdutos();
    }, []); 

    
    const atualizarProdutos = (novosProdutos: IProduct[]) => {
        setProdutos(novosProdutos);
    };

    return (
        <ProductContext.Provider value={{ produtos, carregarProdutos, atualizarProdutos }}>
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
