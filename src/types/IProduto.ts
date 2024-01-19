
export interface IProduto {
    id?: string,
    title: string,
    price: number,
    category: string,
    description: string,
    image: string
}

export const initialProduto: IProduto = {
    title: "",
    price: 0,
    category: "",
    description: "",
    image: ""
}