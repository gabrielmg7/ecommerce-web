import { ICarrinho } from "./ICarrinho";
import { IProduto } from "./IProduto";

export interface ItemCarrinho {
    id?: number;
    idCarrinho: ICarrinho["id"];
    idProduto: IProduto["id"];
    quantidade: number;
    valorUnitario: number;
    subtotal: number;
}

export const initialItemCarrinho: ItemCarrinho = {
    idCarrinho: 0,
    idProduto: 0,
    quantidade: 0,
    valorUnitario: 0,
    subtotal: 0
}