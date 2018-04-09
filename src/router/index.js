import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home'
import Singer from '../components/singer/Singer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'recommend',
      component: Home
    },
    {
      path: '/singer',
      name: 'singer',
      component: Singer
    }
  ]
})
