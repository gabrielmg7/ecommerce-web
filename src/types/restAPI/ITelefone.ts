import { IUsuario } from "./IUsuario";

export interface ITelefone {
    id: number;
    idUsuario: IUsuario["id"]; //FK de Usuário
    numero: number;
}