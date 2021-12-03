import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    // MENUS
    {
        path: '/main',
        name: 'Main',
        component: () =>
            import ( /* webpackChunkName: "main" */ '../views/menu/Main.vue'),
        props: true
    },
    {
        path: '/brandingMenu',
        name: 'BrandingMenu',
        component: () =>
            import ( /* webpackChunkName: "brandingMenu" */ '../views/menu/BrandingMenu.vue'),
        props: true
    },

    {
        path: '/logoMenu',
        name: 'LogoMenu',
        component: () =>
            import ( /* webpackChunkName: "logoMenu" */ '../views/menu/LogoMenu.vue'),
        props: true
    },
    {
        path: '/packageMenu',
        name: 'PackageMenu',
        component: () =>
            import ( /* webpackChunkName: "packageMenu" */ '../views/menu/PackageMenu.vue'),
        props: true
    },
    {
        path: '/magMenu',
        name: 'MagMenu',
        component: () =>
            import ( /* webpackChunkName: "magMenu" */ '../views/menu/MagMenu.vue'),
        props: true
    },

    {
        path: '/brandingSingle',
        name: 'BrandingSingle',
        component: () =>
            import ( /* webpackChunkName: "brandingSingle" */ '../views/single/BrandingSingle.vue'),
        props: true
    },
    {
        path: '/agile',
        name: 'Agile',
        component: () =>
            import ( /* webpackChunkName: "agile" */ '../components/single/branding/Agile.vue'),
        props: true
    },
    {
        path: '/alta',
        name: 'Alta',
        component: () =>
            import ( /* webpackChunkName: "alta" */ '../components/single/branding/Alta.vue'),
        props: true
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router