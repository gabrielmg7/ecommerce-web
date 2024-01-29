import axios from "axios";
import { ItemProduto } from "../../Types/restAPI/ItemPedido";

const API_BASE_URL = "http://localhost:8080";

const orderApiService = {
  // Função para obter todos os itens de produtos por ID do pedido
  getItemsByOrderId: async (orderId: string): Promise<ItemProduto[]> => {
    const response = await axios.get(`${API_BASE_URL}/orders/${orderId}/items`);
    return response.data;
  },

  // Função para adicionar um item de produto a um pedido
  addItemToOrder: async (itemData: ItemProduto): Promise<ItemProduto> => {
    const response = await axios.post(`${API_BASE_URL}/items`, itemData);
    return response.data;
  },

  // Função para atualizar a quantidade de um item de produto em um pedido
  updateItemQuantity: async (itemId: string, newQuantity: number): Promise<ItemProduto> => {
    const response = await axios.put(`${API_BASE_URL}/items/${itemId}`, {
      quantidade: newQuantity,
    });
    return response.data;
  },

  // Função para remover um item de produto de um pedido por ID
  removeItemFromOrder: async (itemId: string): Promise<void> => {
    await axios.delete(`${API_BASE_URL}/items/${itemId}`);
  },
};

export default orderApiService;
