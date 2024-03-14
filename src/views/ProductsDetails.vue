<template>
  <div v-if="product" class="card-details">
    <div class="image-container">
      <img :src="product.thumbnail" :alt="product.title" />
    </div>
    <div class="product-details">
      <p>{{ product.title }}</p>
      <p>{{ product.price }}</p>
      <p>{{ product.id }}</p>
      <p>{{ product.description }}</p>
      <v-btn class="custom-button" block>Adicionar no carrinho</v-btn>
    </div>
  </div>
  <div v-else>
   <p>Carregando...</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { fetchProductById } from '../services/callApi';
import type { Product } from '../services/callApi.ts';

export default defineComponent({
  name: 'ProductDetails',
  setup() {
    const route = useRoute();
    const productId = ref<string | null>(null);
    const product = ref<Product | null>(null);

    onMounted(async () => {
      try {
        if (typeof route.params.id === 'string') {
          productId.value = route.params.id;
          product.value = await fetchProductById(productId.value);
        } else {
          console.error('ID de produto inválido:', route.params.id);
        }
      } catch (error) {
        console.error('Erro ao carregar detalhes do produto:', error);
      }
    });

    return {
      product,
    };
  },
});

</script>

<style scoped lang="scss">
.card-details {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 8px;
  overflow: hidden;
  background-color: var(--mauve-a3);
  color: #eee;
  justify-content: center;
  height: 92vh;
}

.image-container {
  height: 700px;
  overflow: hidden;
  padding-top: 150px;
}

img {
  width: 100%;
  height: 80%;
  inset: 0;
  object-fit: cover;
}

.product-details {
  padding: 16px;
  color: black;
  font-size: larger;
  font-family: "Roboto", sans-serif;
}

.custom-button {
  margin-top: 36px;
}
</style>