import { IUsuario } from "./IUsuario";
import { ItemCarrinho } from "./ItemCarrinho";

export interface ICarrinho {
    id: number;
    idUsuario: IUsuario["id"];
    quantidade: number;
    itens: ItemCarrinho[];
}