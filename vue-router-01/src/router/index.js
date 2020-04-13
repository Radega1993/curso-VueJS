import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/about', name: 'About', component: () => import('../views/About.vue')},
    { path: '/contacto', name: 'Contacto', component: () => import('../views/Contacto.vue') },
    { path: '/usuarios/:id',name: 'Usuarios', component: () => import('../views/Usuarios.vue')},
    { path: '/login', name: 'Login', component: () => import('../views/Login.vue')},
    { path: '/signup', name: 'Signup', component: () => import('../views/Signup.vue')},
    { path: '/registrarse', redirect: '/signup'},
    { path: '/productos', name: 'Productos', component: () => import('../views/productos/Index.vue')},
    { path: '/producto-detalle/:id', name: 'Producto', component: () => import('../views/productos/Detalle.vue')}
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
