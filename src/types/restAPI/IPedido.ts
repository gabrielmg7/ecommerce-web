import { IUsuario } from "./IUsuario";
import { IItemPedido } from "./IItemPedido";

enum PedidoStatus {
    PENDENTE = "Pendente de Pagamento",
    PREPARO = "Em Preparo",
    ENVIADO = "Enviado",
    ENTREGUE = "Entregue",
    DEVOLVIDO = "Devolvido",
    CANCELADO = "Cancelado",
}

export interface IPedido {
    id: number;
    itens: IItemPedido[]; //Array de ItemPedido dentro de um Pedido
    idUsuario: IUsuario["id"]; //FK de Usuário
    dataPedido: string;
    valorTotal: number;
    status: PedidoStatus;
    codigoRastreio: string;
}

export const initialPedido: IPedido = {
    id: 0,
    idUsuario: 0,
    dataPedido: '',
    valorTotal: 0,
    status: PedidoStatus.PENDENTE,
    codigoRastreio: "",
    itens: []
}