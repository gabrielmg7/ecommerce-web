import React, { createContext, useContext, useState, useEffect } from 'react';
import { IProduto } from '../types/restAPI/IProduto';
import { useUserContext } from './UserContext';
import { ICarrinho } from '../types/restAPI/ICarrinho';

interface CarrinhoContextProps {
    carrinho: ICarrinho | null;
    adicionarProdutoAoCarrinho: (produto: IProduto) => void;
    removerProdutoDoCarrinho: (produtoId: number) => void;
    limparCarrinho: () => void;
}

const CarrinhoContext = createContext<CarrinhoContextProps | undefined>(undefined);

export const CarrinhoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { data: usuarioData } = useUserContext();
    const [carrinho, setCarrinho] = useState<ICarrinho | null>(null);

    useEffect(() => {
        if (usuarioData?.isLoggedIn) {
            // Se o usuário estiver logado, carregue o carrinho do usuário do backend
            // Aqui você pode fazer uma solicitação para obter o carrinho do usuário do backend
            // e definir o estado do carrinho com os produtos do carrinho do usuário
        }
    }, [usuarioData]);

    // TODO: Lógica para adicionar um produto ao carrinho
    const adicionarProdutoAoCarrinho = (produto: IProduto) => {
    };

    // TODO: Lógica para remover um produto do carrinho
    const removerProdutoDoCarrinho = (produtoId: number) => {
    };

    // TODO: Lógica para limpar o carrinho
    const limparCarrinho = () => {
    };

    return (
        <CarrinhoContext.Provider value={{ carrinho, adicionarProdutoAoCarrinho, removerProdutoDoCarrinho, limparCarrinho }}>
            {children}
        </CarrinhoContext.Provider>
    );
};

export const useCarrinhoContext = () => {
    const context = useContext(CarrinhoContext);
    if (!context) {
        throw new Error('useCarrinhoContext deve ser usado dentro de um CarrinhoProvider');
    }
    return context;
};
