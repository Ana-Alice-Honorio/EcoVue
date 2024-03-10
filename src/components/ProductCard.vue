<template>
  <div class="product-card">
    <img :src="product.thumbnail" :alt="product.title" class="product-image" />
    <div class="product-details">
      <h3>{{ product.title }}</h3>
      <!-- <p>{{ product.description }}</p> -->
      <p>R$ {{ product.price }}</p>
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
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
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
    gap: 8px;
    background: linear-gradient(to bottom,#00000000, #00000080, #00000080, #000000);

  h3 {
    font-size: 14px;
    font-weight: 500;
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

