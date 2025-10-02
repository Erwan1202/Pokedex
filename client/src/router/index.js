import {createRouter, createWebHistory} from 'vue-router'
import Home from '@/pages/Home.vue'
import Pokemon from '@/pages/Pokedex.vue'
import NotFound from '@/pages/NotFound.vue'

const routes = [
    { path: '/', component: Home },
    { path : '/pokedex', name: 'Pokedex', component: Pokemon },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router