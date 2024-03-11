const API_URL = 'https://api.mercadolibre.com';

// const apiKey = import.meta.env.VITE_API_KEY;

async function fetchProducts( query, pageSize = 20) {
  try {
    const response = await fetch(`${API_URL}/sites/MLB/search?q=${query}&limit=${pageSize}`);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Erro ao buscar produtos:', error);
    return [];
  }
}

export { fetchProducts };

