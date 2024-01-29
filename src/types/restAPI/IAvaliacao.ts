export interface IAvaliacao {
  id: number;
  pontuacao: number;
  comentario: string;
  produto: number; // ID do Produto
  cliente: number; // ID do Cliente
}
