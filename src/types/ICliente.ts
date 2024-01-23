export interface ICliente {
  id: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  telefone: string;
  email: string;
  password: string;
  cidade?: string;
  endereco: string;
  cep: string;
  role: "client" | "admin";
  allowExtraEmails: boolean;
}

export const initialCliente: ICliente = {
  nome: "",
  cpf: "",
  id: 0,
  sobrenome: "",
  role: "client",
  telefone: "",
  email: "",
  password: "",
  endereco: "",
  cep: "",
  allowExtraEmails: false
};
