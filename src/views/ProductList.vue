<template>
  <div class="home">
    <h1>Produtos</h1>
    <div class="product-list">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import ProductCard from '../components/ProductCard.vue';
import { fetchProducts} from '../services/callApi.js';

export default {
  components: {
    ProductCard
  },
  data() {
    return {
      products: []
    };
  },
  async created() {
    this.products = await fetchProducts();
  }
};
</script>


