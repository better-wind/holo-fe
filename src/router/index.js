import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const Home = resolve => require(['@/components/Home/Home'], resolve),
      Part = resolve => require(['@/components/Part/Part'], resolve),
      Painting = resolve => require(['@/components/Painting/Painting'], resolve)

export default new Router({
  routes: [
      {
          path: '/',
          name: 'Home',
          component: Home
      },
      {
          path: '/part/:name',
          name: 'Part',
          component: Part
      },
      {
          path: '/painting',
          name: 'Painting',
          component: Painting
      },
  ]
})