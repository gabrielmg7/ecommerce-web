import { ICliente } from "./ICliente";

export interface IPedido {
    orderId: string,
    idCliente: ICliente["id"]
}