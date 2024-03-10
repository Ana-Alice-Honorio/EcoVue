<template>
  <div class="product-card">
    <img :src="product.thumbnail" :alt="product.title" class="product-image" />
    <div class="product-details">
      <h3>{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <p>Preço: R$ {{ product.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: Object
  }
};
</script>

