import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from '../pages/Dashboard'
import Posts from '../pages/posts/Posts'

export default new VueRouter({
    routes: [
        {
            name: 'dashboard',
            path: '/',
            component: Dashboard
        },
        {
            name: 'posts',
            path: "/posts",
            component: Posts
        }
    ]
})