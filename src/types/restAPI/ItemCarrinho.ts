export interface ItemCarrinho {
    id?: string;
    carrinho: number; // ID Carrinho
    produto: number; //ID Produto
    quantidade: number;
}

export const initialItemCarrinho: ItemCarrinho = {
    carrinho: 0,
    produto: 0,
    quantidade: 0
}