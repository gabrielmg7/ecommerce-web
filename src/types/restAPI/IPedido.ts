import { IUsuario } from "./IUsuario";
import { ItemPedido } from "./ItemPedido";

export interface IPedido {
    id: number,
    itens: ItemPedido[];
    idUsuario: IUsuario["id"]
    dataPedido: string;
    status: "Pendente" | "Em Preparo" | "Enviado" | "Entregue" | "Devolvido" | "Cancelado";
    valorTotal: number;
}

export const initialPedido: IPedido = {
    id: 0,
    idUsuario: 0,
    dataPedido: '',
    valorTotal: 0,
    status: "Pendente",
    itens: []
}