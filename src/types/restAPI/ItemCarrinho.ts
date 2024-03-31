import { ICarrinho } from "./ICarrinho";
import { IProduto } from "./IProduto";

export interface ItemCarrinho {
    id?: number;
    idCarrinho: ICarrinho["id"]; // ID Carrinho
    idProduto: IProduto["id"]; //ID Produto
    quantidade: number;
}

export const initialItemCarrinho: ItemCarrinho = {
    idCarrinho: 0,
    idProduto: 0,
    quantidade: 0
}