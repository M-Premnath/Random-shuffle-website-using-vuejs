import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Result from './components/Result.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/result', component: Result },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router