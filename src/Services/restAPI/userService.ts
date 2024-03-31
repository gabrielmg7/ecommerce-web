import axios from "axios";
import { IUser } from "../../types/restAPI/IUsuario";

const API_BASE_URL = "http://localhost:3003/api";

const userService = {
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
  create: async (userData: IUser): Promise<IUser> => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/clientes`,
        userData
      );
      console.info("✔ userApiService.create() - Usuário cadastrado.");
      return response.data;
    } catch (error) {
      console.error("❌ userApiService.create() - Erro ao cadastrar usuário:", error);
      throw error;
    }
  },

  // Função para logar um usuário
  login: async (credentials: {
    email: string;
    password: string;
  }): Promise<IUser> => {
    try {
      const response = await axios.post(
        `${API_BASE_URL}/auth/login`,
        credentials
      );
      console.info("✔ userApiService.login() - Usuário autenticado.");

      const user: IUser = {
        id: response.data.id,
        nome: response.data.nome,
        sobrenome: response.data.sobrenome,
        cpf: response.data.cpf,
        telefone: response.data.telefone,
        email: response.data.email,
        password: response.data.password,
        cidade: response.data.cidade,
        endereco: response.data.endereco,
        cep: response.data.cep,
        role: response.data.role,
        allowExtraEmails: response.data.allowExtraEmails,
        isLoggedIn: true, // Marcamos como logado após autenticação
        pedidos: response.data.pedidos,
        carrinho: 0
      };

      return user;
    } catch (error) {
      console.error("❌ userApiService.login() - Erro ao logar usuário:", error);
      throw error;
    }
  },

  // Função para atualizar um usuário existente
  update: async (id: string, userData: IUser): Promise<IUser> => {
    const response = await axios.put(
      `${API_BASE_URL}/clientes/${id}`,
      userData
    );
    return response.data;
  },

  // Função para excluir um usuário por ID
  delete: async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/clientes/${id}`);
  },
};

export default userService;
