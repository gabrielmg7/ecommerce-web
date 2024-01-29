/* eslint-disable @typescript-eslint/no-unused-vars */

import { IAvaliacao } from "./IAvaliacao";
import { IImagemProduto } from "./IImagemProduto";

export interface IProduto {
    id?: string;
    nome: string;
    descricao: string;
    preco: number;
    categoria: string;
    quantidade: number;   
    avaliacoes: IAvaliacao[];
    imagens: IImagemProduto[];
}
