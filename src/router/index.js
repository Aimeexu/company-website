import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HelloWorld.vue'
import ProductCenter from '@/components/ProductCenter.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/product-center',
    name: 'ProductCenter',
    component: ProductCenter
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router