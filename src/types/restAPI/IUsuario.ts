import { ICarrinho } from "./ICarrinho";
import { IEndereco } from "./IEndereco";
import { IPedido } from "./IPedido";

export interface IUsuario {
  id: number;
  nome: string;
  sobrenome?: string;
  cpf: string;
  telefone: number;
  email: string;
  dataNascimento: string;
  password: string;
  endereco: IEndereco[];
  carrinho: ICarrinho["id"];
  pedidos: IPedido[];
  role: "CLIENT_ROLE" | "ADMIN_ROLE" | "unauth";
  allowExtraEmails: boolean;
  isLoggedIn: boolean;
}

export const initialUser: IUsuario = {
  id: 0,
  nome: "",
  sobrenome: "",
  cpf: "",
  email: "",
  password: "",
  dataNascimento: "",
  carrinho: 0,
  telefone: 0,
  endereco: [],
  role: "CLIENT_ROLE",
  allowExtraEmails: false,
  isLoggedIn: true,
  pedidos: [],
};
