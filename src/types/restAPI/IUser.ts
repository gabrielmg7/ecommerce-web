import { ICarrinho } from "./ICarrinho";
import { IPedido, } from "./IPedido";

export interface IUser {
  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone: number;
  email: string;
  password: string;
  cidade: string;
  endereco: string;
  cep: number;
  role: "CLIENT_ROLE" | "ADMIN_ROLE" | "unauth";
  allowExtraEmails: boolean;
  isLoggedIn: boolean;
  pedidos: IPedido[];
  carrinho: ICarrinho["id"];
}

export const initialUser: IUser = {
  id: 0,
  nome: "",
  sobrenome: "",
  cpf: "",
  email: "",
  password: "",
  pedidos: [],
  carrinho: 0,
  telefone: 0,
  cidade: "",
  endereco: "",
  cep: 0,
  allowExtraEmails: false,
  isLoggedIn: false,
  role: "CLIENT_ROLE",
};
