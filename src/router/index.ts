import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/views/ProductList.vue'
import ProductsDetails from '@/views/ProductsDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Product List',
      component: ProductList
    },
    {
      path: '/product/:id',
      name: 'Product Details',
      component: ProductsDetails
    },
  ]
})

export default router
