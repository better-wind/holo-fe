import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const Home = resolve => require(['@/components/Home/Home'], resolve),
      Part = resolve => require(['@/components/Part/Part'], resolve),
      Painting = resolve => require(['@/components/Painting/Painting'], resolve),
      About = resolve => require(['@/components/About/About'], resolve),
      Me = resolve => require(['@/components/Me/Me'], resolve)

const router = new Router({
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
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/me',
            name: 'Me',
            component: Me
        },
    ],
    // mode: 'history',
})
router.afterEach((to, from) => {
    if(from.name){
        window.backToTop(2)
    }

})
export default router
