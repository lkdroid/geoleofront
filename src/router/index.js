import Vue from 'vue'
import VueRouter from 'vue-router'
import CardsUI from '../views/CardsUI.vue'
import GeoheeGame from '../views/GeoheeGame.vue'



Vue.use(VueRouter)

const routes = [
    // {
    //     path: '/',
    //     name: 'Home',
    //     component: Home
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: function () {
    //         return import(/* webpackChunkName: "about" */ '../views/About.vue')
    //     }
    // },

    {
        path: '/',
        name: 'CardsUI',
        component: CardsUI
    },
    {
        path: "/game",
        name: "GeoheeGame",
        component: GeoheeGame
    }
]

const router = new VueRouter({
    routes
})

export default router
