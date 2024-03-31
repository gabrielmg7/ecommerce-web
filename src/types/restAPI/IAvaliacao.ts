
import { IProduto } from "./IProduto";
import { IUsuario } from "./IUsuario";

export interface IAvaliacao {
  id: number;
  score: number;
  description: string;
  idProduto: IProduto["id"];
  idUsuario: IUsuario["id"];
}
