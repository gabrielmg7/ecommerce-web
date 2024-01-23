
export interface IProduto {
    id?: string;
    nome: string;
    descricao: string;
    preco: number;
    categoria: string;
    quantidade: number;   
}

const initialProduto: IProduto = {
    nome: "",
    descricao: "",
    preco: 0,
    categoria: "",
    quantidade: 0
}