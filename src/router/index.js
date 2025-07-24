import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/components/HelloWorld.vue'
import ProductCenter from '@/components/ProductCenter.vue'
import CaseShowcase from '@/components/CaseShowcase.vue'
import ContactUs from '@/components/ContactUs.vue'

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
  },
  {
    path: '/contact',
    name: 'ContactUs',
    component: ContactUs
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router