import { ICliente } from "./ICliente";
import { IProduto } from "./IProduto";

export interface ICarrinho {
    idCliente: ICliente["id"];
    quantidade: number;
    itens: IProduto[];
}

const initialCarrinho: ICarrinho = {
    idCliente: 0,
    quantidade: 0,
    itens: []
}