import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/p/:userId/:userName',
    name: 'Posts',
    props: true,
    //Set Navigation guard on the route definition object:
    beforeEnter: (to, from, next) => {
      to.params.myCustomizations = {
        
      }
      next()
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Posts.vue')
  },

  {
    path: '/login',
    name: 'Login',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },

  {
    path: '/profile/:userId/:userName',
    name: 'Profile',
    props: true,
    //Set Navigation guard on the route definition object:
    beforeEnter: (to, from, next) => {
      to.params.myCustomizations = {
        
      }
      next()
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  },
  {
    path: '/newpost',
    name: 'Newpost',
    props: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Newpost.vue')
  },

  {
    path: '/verify-email',
    name: 'VerifyEmail',
    component: () => import(/* webpackChunkName: "verifyEmail" */ '../views/auth/VerifyEmail.vue'),
  },
  
  {
    //otherwise redirect to home
    path: '*', redirect:'/'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeResolve((to, from, next) => {
  //redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ['/login', '/register', '/verify-email', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');
  if(authRequired && !loggedIn){
    console.log('from index in router');
    return next('/');
  }
  next();
})

export default router


