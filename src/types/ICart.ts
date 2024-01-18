import { ICliente } from "./ICliente";
import { IProduto } from "./IProduto";


export interface ICart {
    id?: string;
    idCliente?: ICliente["id"];
    itemCount: number;
    itens: IProduto[];
}
