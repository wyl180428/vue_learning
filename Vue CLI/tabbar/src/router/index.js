import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const home=()=>import('../views/home/home.vue')
const catmgroy=()=>import('../views/catmgory/catmgory.vue')
const car=()=>import('../views/car/car.vue')
const profile=()=>import('../views/profile/profile.vue')

export default new Router({
  routes: [
    {
      path:'',
      redirect:'/home',
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/catmgroy',
      component:catmgroy
    },
    {
      path:'/car',
      component:car
    },
    {
      path:'/profile',
      component:profile
    }
  ],
  mode:'history'
})
