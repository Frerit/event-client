import Vue from 'vue'
import Router from 'vue-router'
import SinglePage from '@/components/SinglePage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: SinglePage
    }
  ]
})
