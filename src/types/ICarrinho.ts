import { ICliente } from "./ICliente";
import { IProduto } from "./IProduto";


export interface ICarrinho {
    id?: string;
    idCliente?: ICliente["id"];
    itemCount: number;
    itens: IProduto[];
}
