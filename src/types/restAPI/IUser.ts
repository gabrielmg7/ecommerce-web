import { ICarrinho } from "./ICarrinho";
import { IPedido, } from "./IPedido";

export interface IUser {
  id: number;
  nome: string;
  sobrenome?: string;
  cpf: string;
  telefone: number;
  email: string;
  dataNascimento: string;
  password: string;
  endereco: {
    rua: string;
    numero: number;
    bairro: string;
    complemento?: string;
    cidade: string;
    cep: number;
  };
  carrinho: ICarrinho["id"];
  pedidos: IPedido[];
  role: "CLIENT_ROLE" | "ADMIN_ROLE" | "unauth";
  allowExtraEmails: boolean;
  isLoggedIn: boolean;
}

export const initialUser: IUser = {
  id: 0,
  nome: "",
  sobrenome: "",
  cpf: "",
  email: "",
  password: "",
  dataNascimento: "",
  carrinho: 0,
  telefone: 0,
  endereco: {
    rua: "",
    numero: 0,
    bairro: "",
    complemento: undefined,
    cidade: "",
    cep: 0
  },
  role: "CLIENT_ROLE",
  allowExtraEmails: false,
  isLoggedIn: true,
  pedidos: [],
};
