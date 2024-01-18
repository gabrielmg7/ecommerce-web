import axios from "axios";
import { ICliente } from "../Types/ICliente";

const API_BASE_URL = "http://localhost:8080";

const userApiService = {
  // Função para obter todos os usuários
  getAllUsers: async (): Promise<ICliente[]> => {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  },

  // Função para obter um usuário por ID
  getUserById: async (id: string): Promise<ICliente | undefined> => {
    const response = await axios.get(`${API_BASE_URL}/users/${id}`);
    return response.data;
  },

  // Função para criar um novo usuário
  createUser: async (userData: ICliente): Promise<ICliente> => {
    const response = await axios.post(`${API_BASE_URL}/users`, userData);
    return response.data;
  },

  // Função para atualizar um usuário existente
  updateUser: async (id: string, userData: ICliente): Promise<ICliente> => {
    const response = await axios.put(`${API_BASE_URL}/users/${id}`, userData);
    return response.data;
  },

  // Função para excluir um usuário por ID
  deleteUser: async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/users/${id}`);
  },
};

export default userApiService;
