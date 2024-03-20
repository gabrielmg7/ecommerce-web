/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

export interface ICart {
  id: number;
  userId: number;
  date: any;
  products: any[];
}

export interface IUser {
  nome: unknown;
  sobrenome: unknown;
  cpf: unknown;
  dataNascimento: string;
  telefone: unknown;
  endereco: any;
  id: number;
  email: string;
  username: string;
  password: string;
  name: {
    firstname: string;
    lastname: string;
  };
  address: {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: {
      lat: string;
      long: string;
    };
  };
  phone: string;
}
