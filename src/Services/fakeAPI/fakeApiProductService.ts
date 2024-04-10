import axios, { AxiosResponse } from "axios";
import { IProduct } from "../../types/FakeAPI/type";

const apiUrl = "https://fakestoreapi.com/products";

// Função para obter todos os produtos
export const getAllProducts = async (): Promise<IProduct[]> => {
  try {
    const response: AxiosResponse<IProduct[]> = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

// Função para obter um produto por ID
export const getProductById = async (
  id: number
): Promise<IProduct | undefined> => {
  try {
    const response: AxiosResponse<IProduct> = await axios.get(
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
  newProduct: Omit<IProduct, "id">
): Promise<IProduct> => {
  try {
    const response: AxiosResponse<IProduct> = await axios.post(
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
  updatedProductData: Partial<IProduct>
): Promise<IProduct> => {
  try {
    const response: AxiosResponse<IProduct> = await axios.put(
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

// Função para obter todas as categorias de produtos
export const getAllProductCategories = async (): Promise<IProduct[]> => {
  try {
    const response: AxiosResponse<string[]> = await axios.get(`${apiUrl}/categories`);
    const product: IProduct[] = response.data.map(category => ({
      id: 0, 
      title: '', 
      price: 0, 
      category: category, 
      description: '', 
      image: '' 
    }));
    // Remove duplicatas e retorna os produtos únicos
    return product.filter((product, index, self) =>
      index === self.findIndex(p => p.category === product.category)
    );
  } catch (error) {
    console.error("Error fetching product categories:", error);
    throw error;
  }
};
