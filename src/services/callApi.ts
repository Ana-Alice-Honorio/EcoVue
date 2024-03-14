const API_URL = 'https://api.mercadolibre.com';

export interface Product {
  thumbnail: string;
  title: string;
  price: number;
  id: string;
  description: string;
}

async function fetchProducts(query: string, offset: number = 0, limit: number = 20): Promise<Product[]> {
  try {
    const response = await fetch(`${API_URL}/sites/MLB/search?q=${query}&offset=${offset}&limit=${limit}`);
    const data = await response.json();
    return data.results as Product[];
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}

async function fetchProductById(productId: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_URL}/items/${productId}`);
    const data = await response.json();
    const product: Product = {
      thumbnail: data.thumbnail,
      title: data.title,
      price: data.price,
      id: data.id,
      description: data.description,
    };
    return product;
  } catch (error) {
    console.error('Erro ao buscar detalhes do produto:', error);
    return null;
  }
}

export { fetchProducts, fetchProductById };
