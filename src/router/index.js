import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = () => import(/* webpackChunkName: "login"*/ '@/pages/Login')
const Home = () => import(/* webpackChunkName: "Hello"*/ '@/pages/Home')
const Natural = () => import(/* webpackChunkName: "Hello"*/ '@/pages/Wrap/Natural')
const Recommend = () => import(/* webpackChunkName: "Hello"*/ '@/pages/Wrap/Recommend')
const Talk = () => import(/* webpackChunkName: "Hello"*/ '@/pages/Wrap/Talk')
const Admin = () => import(/* webpackChunkName: "Hello"*/ '@/pages/Wrap/Admin')
const Detail = () => import(/* webpackChunkName: "Hello"*/ '@/pages/Detail')


export default new Router({
  bash: '/',
  mode: 'history',
  routes: [
    {path: '/', redirect: '/login'},
    {path: '/login', name: 'Login', component: Login},
    {path: '/natural', name: 'Natural', component: Natural},
    {path: '/recommend', name: 'Recommend', component: Recommend},
    {path: '/talk', name: 'Talk', component: Talk},
    {path: '/admin', name: 'Admin', component: Admin},
    {path: '/natural/:id', name: 'Detail', component: Detail}
  ]
})
