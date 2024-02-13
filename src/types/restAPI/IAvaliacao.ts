import { IProduct } from "../fakeAPI/type";
import { IUser } from "./IUser";

export interface IAvaliacao {
  id: number;
  score: number;
  description: string;
  product: IProduct["id"];
  user: IUser["id"];
}
