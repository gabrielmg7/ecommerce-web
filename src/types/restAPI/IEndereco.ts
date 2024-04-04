import { IUsuario } from "./IUsuario";

export interface IEndereco {
    id: number;
    idUsuario: IUsuario["id"]; //FK de Usuário
    cep: string;
    logradouro: string;
    complemento: string;
    bairro: string;
    localidade: string;
    uf: string;
    ibge: string;
    gia: string;
    ddd: string;
    siafi: string;

}

export const initialEndereco: IEndereco = {
    id: 0,
    idUsuario: 0,
    cep: "",
    logradouro: "",
    complemento: "",
    bairro: "",
    localidade: "",
    uf: "",
    ibge: "",
    gia: "",
    ddd: "",
    siafi: ""
}