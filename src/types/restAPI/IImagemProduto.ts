export interface IImagemProduto {
    id?: number;
    produto: number; //ID Produto
    imagem?: Uint8Array; //Array de bytes
     //a propriedade imagem é opcional (?) para refletir a possibilidade 
     //de ela poder não estar presente em todos os objetos IImagemProduto
}