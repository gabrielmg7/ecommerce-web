import axios from "axios";
import { IUser } from "../../Types/restAPI/IUser";

const API_BASE_URL = "http://localhost:3003/api";

const userApiService = {
  // Função para obter todos os usuários
  getAllUsers: async (): Promise<IUser[]> => {
    const response = await axios.get(`${API_BASE_URL}/clientes`);
    return response.data;
  },

  // Função para obter um usuário por ID
  getUserById: async (id: string): Promise<IUser | undefined> => {
    const response = await axios.get(`${API_BASE_URL}/clientes/${id}`);
    return response.data;
  },

  // Função para criar um novo usuário
  createUser: async (clienteData: IUser): Promise<IUser> => {
    try {
        const response = await axios.post(`${API_BASE_URL}/clientes`, clienteData);
        console.info('✔ createUser() - Usuário cadastrado.');
        return response.data;
    } catch (error) {
        console.error('❌ createUser() - Erro ao cadastrar usuário:', error);
        throw error;
    }
},

  // Função para atualizar um usuário existente
  updateCliente: async (id: string, clienteData: IUser): Promise<IUser> => {
    const response = await axios.put(`${API_BASE_URL}/clientes/${id}`, clienteData);
    return response.data;
  },

  // Função para excluir um usuário por ID
  deleteCliente: async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/clientes/${id}`);
  },
};

export default userApiService;
