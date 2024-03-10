<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
import FooterStore from './components/FooterStore.vue';
</script>

<template>
  <div class="container">
    <NavBar/>
    <main>
      <RouterView />
    </main>
    <FooterStore/>
  </div>
</template>

<style scoped lang="scss">
.content {
  margin-top: 80px;
}
</style>
