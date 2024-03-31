
import { IPedido } from "./IPedido";
import { IProduto } from "./IProduto";

export interface ItemPedido {
    id: number;
    idPedido: IPedido["id"];
    idProduto: IProduto["id"];
    quantidade: number;
}