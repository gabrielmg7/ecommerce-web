import { IUsuario } from "./IUsuario";
import { ItemCarrinho } from "./IItemCarrinho";

export interface ICarrinho {
    id: number;
    idUsuario: IUsuario["id"];
    itens: ItemCarrinho[];
    quantidade: number;
    criadoEm: string;
}