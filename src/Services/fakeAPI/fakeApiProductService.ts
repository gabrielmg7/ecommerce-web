import axios, { AxiosResponse } from "axios";
import { IProduto } from "../../types/restAPI/IProduto";

const apiUrl = "https://fakestoreapi.com/products";

// Função para obter todos os produtos
export const getAllProducts = async (): Promise<IProduto[]> => {
  try {
    const response: AxiosResponse<IProduto[]> = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Função para obter um produto por ID
export const getProductById = async (
  id: number
): Promise<IProduto | undefined> => {
  try {
    const response: AxiosResponse<IProduto> = await axios.get(
      `${apiUrl}/${id}`
    );
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

// Função para criar um novo produto
export const createProduct = async (
  newProduct: Omit<IProduto, "id">
): Promise<IProduto> => {
  try {
    const response: AxiosResponse<IProduto> = await axios.post(
      apiUrl,
      newProduct
    );
    return response.data;
  } catch (error) {
    console.error("Error creating product:", error);
    throw error;
  }
};

// Função para atualizar um produto existente por ID
export const updateProduct = async (
  id: number,
  updatedProductData: Partial<IProduto>
): Promise<IProduto> => {
  try {
    const response: AxiosResponse<IProduto> = await axios.put(
      `${apiUrl}/${id}`,
      updatedProductData
    );
    return response.data;
  } catch (error) {
    console.error(`Error updating product with ID ${id}:`, error);
    throw error;
  }
};

// Função para excluir um produto por ID
export const deleteProduct = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${apiUrl}/${id}`);
  } catch (error) {
    console.error(`Error deleting product with ID ${id}:`, error);
    throw error;
  }
};
