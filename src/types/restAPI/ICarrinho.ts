/* eslint-disable @typescript-eslint/no-unused-vars */

import { ICliente } from "./ICliente";
import { ItemCarrinho } from "./ItemCarrinho";

export interface ICarrinho {
    id: number;
    cliente: ICliente["id"];
    quantidade: number;
    itens: ItemCarrinho[];
}

const initialCarrinho: ICarrinho = {
    id: 0,
    cliente: 0,
    quantidade: 0,
    itens: [],
}