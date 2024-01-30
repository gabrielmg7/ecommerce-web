/* eslint-disable @typescript-eslint/no-unused-vars */

import { ICliente } from "./IUser";
import { ItemCarrinho } from "./ItemCarrinho";

export interface ICarrinho {
    id: number;
    cliente: ICliente["id"];
    quantidade: number;
    itens: ItemCarrinho[];
}