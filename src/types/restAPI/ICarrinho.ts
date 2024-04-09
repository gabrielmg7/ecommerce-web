import { IUsuario } from "./IUsuario";
import { ItemCarrinho, initialItemCarrinho } from "./IItemCarrinho";

export interface ICarrinho {
    id: number;
    idUsuario: IUsuario["id"];
    itens: ItemCarrinho[];
    quantidade: number;
    criadoEm: string;
}

const initialCarrinho: ICarrinho = {
    id: 0,
    idUsuario: 0,
    itens: [initialItemCarrinho],
    quantidade: 0,
    criadoEm: ""
}