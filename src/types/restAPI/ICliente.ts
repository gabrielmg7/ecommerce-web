import { IPedido, } from "./IPedido";

export interface ICliente {
  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone: number;
  email: string;
  password: string;
  cidade?: string;
  endereco: string;
  cep: number;
  role: "client" | "admin";
  allowExtraEmails: boolean;
  pedidos: IPedido[];
}

export const initialCliente: ICliente = {
  nome: "",
  cpf: "",
  id: 0,
  sobrenome: "",
  role: "client",
  telefone: 0,
  email: "",
  password: "",
  endereco: "",
  cep: 0,
  allowExtraEmails: false,
  pedidos: []
};
