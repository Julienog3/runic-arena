import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SkillsView from '../views/SkillsView.vue'
import SkillOneView from '../views/SkillOneView.vue'
import SettingsView from '../views/SettingsView.vue'
import NotFoundView from '../views/NotFoundView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView
    },
    {
      path: '/skill/:id',
      name: 'skill',
      component: SkillOneView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'notFound', 
      component: NotFoundView
    },
  ]
})

// router.afterEach((to, from) => {
//   document.title = to.name
// })


export default router
