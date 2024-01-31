import { IUser } from "./IUser";
import { ItemCarrinho } from "./ItemCarrinho";

export interface ICarrinho {
    id: number;
    cliente: IUser["id"];
    quantidade: number;
    itens: ItemCarrinho[];
}