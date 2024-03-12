<template>
  <div class="home">
    <div class="product-list">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
      <v-progress-circular
      v-if="loading"
      indeterminate
      color="primary"
    ></v-progress-circular>
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue';
import { fetchProducts } from '../services/callApi.js';
import { ref, onMounted } from 'vue';

// produtos, quantidade por página e estado inicial do loading
const products = ref([]);
const pageSize = 20;
let offset = 0;
const loading = ref(false);

const loadInitialItems = async () => {
  loading.value = true; 
  // Carrega os primeiros 20 itens
  products.value = await fetchProducts(offset, pageSize);
  offset += pageSize;
  loading.value = false;
};

const loadMoreItems = async () => {
  if (loading.value) return;
  loading.value = true; 
  // Carrega mais 20 itens a partir do offset atual
  const newProducts = await fetchProducts(offset, pageSize);
  // Verifica se houve novos produtos retornados
  if (newProducts.length > 0) {
    products.value = [...products.value, ...newProducts];
    offset += pageSize;
  }
  loading.value = false;
};

onMounted(async () => {
  await loadInitialItems();
});

// Se o usuário chegou ao final da página, carregue mais itens
window.addEventListener('scroll', () => {
  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    loadMoreItems();
  }
});
</script>

<style scoped lang="scss">
.home {
  padding-top: 100px;
}

.product-list {
  margin: 0 auto;
  padding: 24px;
  max-width: 1322px;
  min-height: 355px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 24px;
  background-color: var(--mauve-a3);
  backdrop-filter: blur(2px);
  border-radius: 4px;
}

.progress-circular {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
}

@media only screen and (max-width: 768px) {
  .product-list {
    padding: 16px;
    gap: 16px;
    background-color: var(--mauve-3);
  }
}
</style>
