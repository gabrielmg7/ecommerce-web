import { IProduto } from "./IProduto";

export interface IImagemProduto {
    id: number;
    produto: IProduto["id"]; //ID Produto
    imagem: string;
}

export const initialImagemProduto: IImagemProduto = {
    id: 0,
    produto: 0,
    imagem: ''
}
