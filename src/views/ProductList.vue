<template>
  <div class="home">
    <div class="product-list">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup>
import ProductCard from '../components/ProductCard.vue';
import { fetchProducts } from '../services/callApi.js';
import { ref, onMounted } from 'vue';

const products = ref([]);

onMounted(async () => {
  products.value = await fetchProducts();
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

@media only screen and (max-width: 768px) {
  .product-list {
    padding: 16px;
    gap: 16px;
    background-color: var(--mauve-3);
  }
}
</style>
