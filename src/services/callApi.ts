const API_URL = 'https://api.mercadolibre.com';

interface Product {
  thumbnail: string;
  title: string;
  price: number;
  id: string;
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

export { fetchProducts };
