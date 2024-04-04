export interface ICategoriaProduto {
    id: number;
    nome: string;
    descricao: string;
    imagem?: Uint8Array; //Array de bytes
}

const initialCategoriaProduto: ICategoriaProduto = {
    id: 0,
    nome: "",
    descricao: ""
}