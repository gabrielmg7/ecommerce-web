import { IPedido } from "./IPedido";
import { IProduto } from "./IProduto";

export interface ItemProduto {
    id?: string;
    idPedido: IPedido["orderId"];
    idProduto: IProduto["id"];
    quantidade: number;
}