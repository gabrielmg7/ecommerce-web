import axios from "axios";
import { ICliente } from "../../Types/ICliente";

const API_BASE_URL = "http://localhost:3003/api";

const clienteApiService = {
  // Função para obter todos os usuários
  getAllClientes: async (): Promise<ICliente[]> => {
    const response = await axios.get(`${API_BASE_URL}/clientes`);
    return response.data;
  },

  // Função para obter um usuário por ID
  getClienteById: async (id: string): Promise<ICliente | undefined> => {
    const response = await axios.get(`${API_BASE_URL}/clientes/${id}`);
    return response.data;
  },

  // Função para criar um novo usuário
  createCliente: async (clienteData: ICliente): Promise<ICliente> => {
    const response = await axios.post(`${API_BASE_URL}/clientes`, clienteData);
    console.log("createCliente.clientData: ", clienteData)
    return response.data;
  },

  // Função para atualizar um usuário existente
  updateCliente: async (id: string, clienteData: ICliente): Promise<ICliente> => {
    const response = await axios.put(`${API_BASE_URL}/clientes/${id}`, clienteData);
    return response.data;
  },

  // Função para excluir um usuário por ID
  deleteCliente: async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/clientes/${id}`);
  },
};

export default clienteApiService;
