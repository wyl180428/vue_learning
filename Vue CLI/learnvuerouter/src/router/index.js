import Vue from 'vue'
import Router from 'vue-router'
// import home from '../components/home'
// import about from '../components/about'
// import User from "../components/User";

Vue.use(Router)
//懒加载
const home = () => import ( "../components/home")
const about = () => import ("../components/about")
const User = () => import ("../components/User")
const homenews = () => import("../components/homenews")
const homemessage = () => import("../components/homemessage")
const profile = () => import('../components/Profile')


export default new Router({
  //配置路由与组件之间的关系
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      // name: 'home',
      component: home,
      meta: {
        title: '首页'
      },
      //  嵌套路由
      children: [
        {
          path: '',
          redirect: '/home/news'
        },
        {
          path: 'news',
          component: homenews
        },
        {
          path: 'message',
          component: homemessage
        }
      ]
    },
    {
      path: '/about',
      // name: 'about',
      component: about,
      meta: {
        title: '关于'
      },
    },
    {
      path: '/User/:userid',
      component: User,
      meta: {
        title: '用户'
      },
    },
    {
      path: '/myId',
      component: profile,
      meta: {
        title: '档案'
      },
    }
  ],
  mode: 'history',
  linkActiveClass: 'active',
})

