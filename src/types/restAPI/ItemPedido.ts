/* eslint-disable @typescript-eslint/no-unused-vars */

import { IPedido } from "./IPedido";
import { IProduto } from "./IProduto";

export interface ItemPedido {
    id?: string;
    idPedido: IPedido["id"];
    idProduto: IProduto["id"];
    quantidade: number;
}

const initialPedido: ItemPedido = {
    idPedido: "",
    idProduto: undefined,
    quantidade: 0
}