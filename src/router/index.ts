// Composables
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import SearchCarView from '../views/SearchCarView.vue';
import ShoppingCartView from '../views/ShoppingCartView.vue';

const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'Home',
        component: HomeView,
    },
    {
        path: '/search-car',
        name: 'search-car',
        component: SearchCarView
    },
    {
        path: '/shop',
        name: 'shop',
        component: ShoppingCartView
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;
