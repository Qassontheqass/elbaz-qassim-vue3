import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListMonsterView from '../views/ListMonsterView.vue'
import Monster1View from '../views/Monster1View.vue'
import Monster2View from '../views/Monster2View.vue'
import Monster3View from '../views/Monster3View.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/monsters',
      name: 'monsterslist',
      component: ListMonsterView
    },
    {
      path: '/monstre1',
      name: 'monstre1',
      component: Monster1View
    },
    {
      path: '/monstre2',
      name: 'monstre2',
      component: Monster2View
    },
    {
      path: '/monstre3',
      name: 'monstre3',
      component: Monster3View
    },
  ]
})

export default router
