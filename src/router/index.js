import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Index from '../components/Index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Index'
  },
  {
    path: '/Login',
    component: Login
  },
  {
    path: '/Index',
    component: Index
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (token || to.path === '/login') {
    next()
  } else {
    next('/login')
  }
})
export default router
