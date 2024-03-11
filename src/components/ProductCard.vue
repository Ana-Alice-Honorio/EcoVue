<template>
  <div class="product-card">
    <img :src="product.thumbnail" :alt="product.title" />
    <div class="product-details">
      <h3>{{ product.title.substring(0, 50) + '...' }}</h3>
      <div class="price-heart">
        <p>R$ {{ product.price }}</p>
        <v-icon @click="toggleFavorite" :color="isFavorite ? 'red' : ''">mdi-heart</v-icon>
      </div>
    </div>
 </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watchEffect } from 'vue';

const props = defineProps({
  product: {
    type: Object as () => Product,
    default: null
  }
});
const { product } = props;

interface Product {
  thumbnail: string;
  title: string;
  price: number;
}

const isFavorite = ref(false);

// Verificação se é favorito
watchEffect(() => {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  isFavorite.value = favorites.some((fav: Product) => fav.title === product.title);
});

function toggleFavorite() {
  const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
  const index = favorites.findIndex((fav: Product) => fav.title === product.title);
  if (index !== -1) {
    // Se o produto já for favorito ele não entra na lista de salvos/favoritos
    favorites.splice(index, 1);
  } else {
    // Se o produto não for favorito, adicionar
    favorites.push(product);
  }
  localStorage.setItem('favorites', JSON.stringify(favorites));
  isFavorite.value = !isFavorite.value;
}
</script>

<style scoped lang="scss">
.product-card {
  position: relative;
  width: 235px;
  height: 355px;
  font-family: "Roboto", sans-serif;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #eee;
  border-radius: 4px;
  overflow: hidden;
  background-color: var(--mauve-1);
  cursor: pointer;

  img {
    width: 100%;
    height: 80%;
    position: absolute;
    inset: 0;
    object-fit: cover;
  }

  .product-details {
    padding: 16px;
    width: 100%;
    height: 157px;
    position: absolute;
    left: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    justify-content: end;
    background: linear-gradient(to bottom, #00000000, #00000080, #000000);

  .price-heart {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  h3 {
    font-size: 14px;
    font-weight: 400;
    }

  p {
    font-size: 25px;
    font-weight: 500;
    color: #b4b4b4;
  }
  }
}

@media only screen and (max-width: 768px) {
  .product-card {
    width: 183px;
    height: 281px;

  .product-details h3 {
    font-size: 14px;
    font-weight: 700;
  }
 }
}

@media only screen and (width < 414px) {
  .movie-card {
    width: 235px;
    height: 355px;
  }
}
</style>

