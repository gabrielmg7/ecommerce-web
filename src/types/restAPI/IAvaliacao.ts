
import { IProduto } from "./IProduto";
import { IUsuario } from "./IUsuario";

export interface IAvaliacao {
  id: number;
  idProduto: IProduto["id"];
  idUsuario: IUsuario["id"];
  score: number;
  comentario: string;
  criadoEm: string;
}
