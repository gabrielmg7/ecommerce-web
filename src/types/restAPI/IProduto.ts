import { IAvaliacao } from "./IAvaliacao";
import { IImagemProduto } from "./IImagemProduto";


export interface IProduto {
    id?: number;
    nome: string;
    descricao: string;
    preco: number;
    desconto: number;
    categoria: string;
    quantidade: number;   
    avaliacoes: IAvaliacao[];
    imagens: IImagemProduto[];
}

export const initialProduto: IProduto = {
    nome: "",
    descricao: "",
    preco: 0,
    desconto: 0,
    categoria: "",
    quantidade: 0,
    avaliacoes: [],
    imagens: []
}