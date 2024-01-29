/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { ICliente } from "./ICliente";
import { ItemPedido } from "./ItemPedido";

export interface IPedido {
    id: string,
    idCliente: ICliente["id"]
    dataPedido: any;
    total: number;
    status: string;
    itens: ItemPedido[];
}

export const initialPedido: IPedido = {
    id: "",
    idCliente: 0,
    dataPedido: undefined,
    total: 0,
    status: "",
    itens: []
}