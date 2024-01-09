export interface ICliente {
    id?: string;
	nome: string;
	telefone: string;
	email: string;
	cidade: string;
	endereco: string;
}

export const initialCliente: ICliente = {
    nome: "",
    email: "",
    telefone: "",
    cidade: "",
    endereco: ""
};