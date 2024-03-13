import { createRouter, createWebHistory } from 'vue-router'
import ProductList from '@/views/ProductList.vue'
import ProductsDetails from '@/views/ProductsDetails.vue'
import NotFound from '@/views/NotFound.vue'

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
      name: 'ProductDetails',
      component: ProductsDetails
    },
    {
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound
    }
  ]
})

export default router
