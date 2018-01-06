import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const Home = resolve => require(['@/components/Home/Home'], resolve)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
