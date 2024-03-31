import { IProduto } from "./IProduto";

export interface IImagemProduto {
    id: number;
    produto: IProduto["id"]; //ID Produto
    imagem?: Uint8Array; //Array de bytes
}