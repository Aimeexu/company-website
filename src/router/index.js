import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HelloWorld.vue'
import ProductCenter from '@/components/ProductCenter.vue'
import CaseShowcase from '@/components/CaseShowcase.vue'

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
  },
  {
    path: '/case-showcase',
    name: 'CaseShowcase',
    component: CaseShowcase
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router