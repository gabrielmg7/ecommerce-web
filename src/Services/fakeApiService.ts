import axios, { AxiosResponse } from 'axios';

export interface IProduct {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const apiUrl = 'https://fakestoreapi.com/products';

// Função para obter todos os produtos
export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    const response: AxiosResponse<IProduct[]> = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

// Função para obter um produto por ID
export const getProductById = async (id: number): Promise<IProduct | undefined> => {
  try {
    const response: AxiosResponse<IProduct> = await axios.get(`${apiUrl}/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching product with ID ${id}:`, error);
    throw error;
  }
};

// Função para criar um novo produto
export const createProduct = async (newProduct: Omit<IProduct, 'id'>): Promise<IProduct> => {
  try {
    const response: AxiosResponse<IProduct> = await axios.post(apiUrl, newProduct);
    return response.data;
  } catch (error) {
    console.error('Error creating product:', error);
    throw error;
  }
};

// Função para atualizar um produto existente por ID
export const updateProduct = async (id: number, updatedProductData: Partial<IProduct>): Promise<IProduct> => {
  try {
    const response: AxiosResponse<IProduct> = await axios.put(`${apiUrl}/${id}`, updatedProductData);
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
