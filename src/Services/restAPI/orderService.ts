import axios from "axios";
import { ItemPedido } from "../../types/restAPI/IItemPedido";

const API_BASE_URL = "http://localhost:3003/api";

const orderApiService = {
  // Função para obter todos os itens de pedido por ID do pedido
  getItemsByOrderId: async (orderId: string): Promise<ItemPedido[]> => {
    const response = await axios.get(`${API_BASE_URL}/orders/${orderId}/items`);
    return response.data;
  },

  // Função para adicionar um item de pedido a um pedido
  addItemToOrder: async (itemData: ItemPedido): Promise<ItemPedido> => {
    const response = await axios.post(`${API_BASE_URL}/items`, itemData);
    return response.data;
  },

  // Função para atualizar a quantidade de um item de produto em um pedido
  updateItemQuantity: async (itemId: string, newQuantity: number): Promise<ItemPedido> => {
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