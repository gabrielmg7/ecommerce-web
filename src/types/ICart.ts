import { ICliente } from "./entity/ICliente";
import { IProduto } from "./entity/IProduto";

export interface ICart {
    id?: string;
    idCliente?: ICliente["id"];
    itemCount: number;
    itens: IProduto[];
}
