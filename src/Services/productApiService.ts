import axios from 'axios';
import { IProduto } from '../Types/IProduto';

const API_BASE_URL = 'http://localhost:8080';

const productApiService = {
  // Função para obter todos os produtos
  getAllProducts: async (): Promise<IProduto[]> => {
    const response = await axios.get(`${API_BASE_URL}/products`);
    return response.data;
  },

  // Função para obter um produto por ID
  getProductById: async (id: string): Promise<IProduto | undefined> => {
    const response = await axios.get(`${API_BASE_URL}/products/${id}`);
    return response.data;
  },

  // Função para criar um novo produto
  createProduct: async (productData: IProduto): Promise<IProduto> => {
    const response = await axios.post(`${API_BASE_URL}/products`, productData);
    return response.data;
  },

  // Função para atualizar um produto existente
  updateProduct: async (id: string, productData: IProduto): Promise<IProduto> => {
    const response = await axios.put(`${API_BASE_URL}/products/${id}`, productData);
    return response.data;
  },

  // Função para excluir um produto por ID
  deleteProduct: async (id: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/products/${id}`);
  }
};

export default productApiService;
