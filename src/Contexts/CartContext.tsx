import React, { createContext, useContext} from 'react';
import { useState } from 'react';
import { IProduto } from '../types/restAPI/IProduto';
import { ICarrinho, initialCarrinho } from '../types/restAPI/ICarrinho';
import { ItemCarrinho, initialItemCarrinho } from '../types/restAPI/IItemCarrinho';

interface CartContextProps {
    carrinho: ICarrinho | null;
    adicionarProdutoAoCarrinho: (produto: IProduto) => void;
    removerProdutoDoCarrinho: (produtoId: number) => void;
    limparCarrinho: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [carrinho, setCarrinho] = useState<ICarrinho>(initialCarrinho);

    const adicionarProdutoAoCarrinho = (produto: IProduto) => {
        // Verificar se o produto já está no carrinho
        const itemExistente = carrinho.itens.find(item => item.idProduto === produto.id);
        
        if (itemExistente) {
            // Se o produto já estiver no carrinho, atualizar a quantidade
            const novoCarrinho: ICarrinho = {
                ...carrinho,
                itens: carrinho.itens.map(item =>
                    item.idProduto === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
                ),
                quantidade: carrinho.quantidade + 1
            };
            setCarrinho(novoCarrinho);
        } else {
          
            const novoItem: ItemCarrinho = {
                ...initialItemCarrinho,
                idProduto: produto.id,
                quantidade: 1
            };
            const novoCarrinho: ICarrinho = {
                ...carrinho,
                itens: [...carrinho.itens, novoItem],
                quantidade: carrinho.quantidade + 1
            };
            setCarrinho(novoCarrinho);
        }
    };

    const removerProdutoDoCarrinho = (produtoId: number) => {
        const novoCarrinho: ICarrinho = {
            ...carrinho,
            itens: carrinho.itens.filter(item => item.idProduto !== produtoId),
            quantidade: carrinho.quantidade - 1
        };
        setCarrinho(novoCarrinho);
    };

    const limparCarrinho = () => {
        setCarrinho(initialCarrinho);
    };

    return (
        <CartContext.Provider value={{ carrinho, adicionarProdutoAoCarrinho, removerProdutoDoCarrinho, limparCarrinho }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCartContext deve ser usado dentro de um CartProvider');
    }
    return context;
};
