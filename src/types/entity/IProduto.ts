
export interface IProduto {
    id?: string,
    nome: string,
    descricao: string,
    valor: number,
    quantidade: number
}

export const initialProduto: IProduto = {
    nome: "",
    valor: 0,
    descricao: "",
    quantidade: 0
}