import { ICarrinho } from "./ICarrinho";
import { IEndereco } from "./IEndereco";
import { IPedido } from "./IPedido";

enum UserRole {
  CLIENT = "CLIENT_ROLE",
  ADMIN = "ADMIN_ROLE",
  UNAUTH = "UNAUTHENTICATED"
}
export interface IUsuario {
  id: number;
  idCarrinho: ICarrinho["id"]; //FK de Carrinho
  pedidos: IPedido[]; //Array de todos os pedidos para este cliente
  endereco: IEndereco[]; //Array de Endereços
  nome: string;
  sobrenome?: string;
  cpf: string;
  telefone: number;
  email: string;
  dataNascimento: string;
  password: string;
  role: UserRole;
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
  idCarrinho: 0,
  telefone: 0,
  endereco: [],
  role: UserRole.CLIENT,
  allowExtraEmails: false,
  isLoggedIn: true,
  pedidos: [],
};
