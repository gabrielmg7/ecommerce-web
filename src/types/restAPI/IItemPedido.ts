
import { IPedido } from "./IPedido";
import { IProduto } from "./IProduto";

export interface IItemPedido {
    id: number;
    idPedido: IPedido["id"];
    idProduto: IProduto["id"];
    quantidade: number;
    valorUnitario: number;
    subtotal: number;
}

const initialItemProduto: IItemPedido = {
    id: 0,
    idPedido: 0,
    idProduto: 0,
    quantidade: 0,
    valorUnitario: 0,
    subtotal: 0
}