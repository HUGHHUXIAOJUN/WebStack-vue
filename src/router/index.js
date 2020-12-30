import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta:{title:'我的导航页'}
  },
  {
    path: '/myapp',
    name: 'myapp',
    component: () => import(/* webpackChunkName: "myapp" */ '../views/myapp.vue'),
    meta:{title:'我的应用'}
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta:{title:'关于本站'}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  to.meta.title && (document.title = to.meta.title)
  next();
})
export default router
