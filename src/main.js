import './assets/main.css'


import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router' 
import App from './App.vue'

import Home from "@/pages/Home.vue"
import Results from "@/pages/Results.vue"
import Album from "@/pages/Album.vue"
import NotFound from '@/pages/NotFound.vue';

const routes = [
    { path: '/', component: Home },
    { path: '/results', component: Results },
    { path: '/album', component: Album },
    { path: '/:pathMatch(.*)*', component: NotFound }
]

const router = createRouter({ 
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router) 
app.mount('#app')
