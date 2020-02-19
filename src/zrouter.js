import Vue from 'vue';
import VueRouter from './zvue-router'
import Home from './views/Test.vue'
import About from './views/About.vue'

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Test',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})