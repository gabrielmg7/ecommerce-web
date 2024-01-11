import { ICliente } from "./ICliente";

export interface IPedido {
    id?: string,
    idCliente?: ICliente["id"],

}