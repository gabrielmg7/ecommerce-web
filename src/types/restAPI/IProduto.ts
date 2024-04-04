import { IAvaliacao } from "./IAvaliacao";
import { ICategoriaProduto } from "./ICategoriaProduto";
import { IImagemProduto } from "./IImagemProduto";


export interface IProduto {
    id: number;
    idCategoria: ICategoriaProduto["id"]; //FK de ICategoriaProduto
    avaliacoes: IAvaliacao[]; //Array de Avaliações 
    imagens: IImagemProduto[]; //Array de Imagens
    nome: string;
    descricao: string;
    preco: number;
    desconto: number;
    quantidade: number;   
}

export const initialProduto: IProduto = {
    id: 0,
    idCategoria: 0,
    nome: "",
    descricao: "",
    preco: 0,
    desconto: 0,
    quantidade: 0,
    avaliacoes: [],
    imagens: [],
}