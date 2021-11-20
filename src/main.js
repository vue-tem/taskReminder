import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router';
import About from './views/About.vue';
import "./assets/tailwind.css"


// Creating Routes
const routes = [
    {path: '/about', name: 'About', component: About}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

createApp(App).use(router).mount('#app')
