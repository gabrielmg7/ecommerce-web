
export interface IProduto {
    id?: string,
    nome: string,
    valor: number,
    descricao: string,
    quantidade: number
}

export const initialProduto: IProduto = {
    nome: "",
    valor: 0,
    descricao: "",
    quantidade: 0
}